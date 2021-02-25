import { cssDefaults } from './css-defaults.js';

/* Compile style list */
const getStyles = (obj) => {
    const styles = [];
    for (const [keyObj, styleBlock] of Object.entries(obj)) {
        if(Array.isArray(styleBlock) || typeof styleBlock !== 'object') {continue}

        const browsers = getBrowsers(keyObj);

        for (let [key, value] of Object.entries(styleBlock)) {
            if(key.toLowerCase() != key) {
                key = key.replace(/([A-Z])/g, "-$1").toLowerCase();
            }
            styles.push(`<li class="${keyObj}">${key}: ${value} <span class="browsers">${browsers}</span></li>`);
        }
    }
    return styles.length ? styles.map(style => style).join('') : 'No default styles.';
}

const getBrowsers = (engine) => {
    switch(engine) {
        case 'blink' :
            return (
                `<i class="fab fa-chrome"></i>
                <i class="fab fa-opera"></i>
                <i class="fab fa-edge"></i>`
            );
            break;
        case 'webkit' :
            return (
                `<i class="fab fa-safari"></i>`
            );
            break;
        case 'gecko' :
            return (
                `<i class="fab fa-firefox"></i>`
            );
            break;
        case 'trident' :
            return (
                `<i class="fab fa-internet-explorer"></i>`
            );
            break;
        case 'defaults' :
            return '<small><em>standard</em></small>';
            break;
        default : return '';
    }
}

/* Compile meta */
const getMeta = (obj) => {

    const   meta = [];

    if(obj.description) {
        const description = `<div class="meta__description meta__item u-tooltip-parent">
                                <span class="meta__label">/* description */</span>

                                <div class="description__tooltip u-tooltip">
                                    <div class="description__tooltip__description">${obj.description}</div>

                                    <div class="description__tooltip__use"><strong>Use:</strong> ${obj.use}</div>
                                    ${obj.note ? `<div class="description__tooltip__use"><strong>Note:</strong> ${obj.note}</div>` : ''}

                                    <div class="u-tooltip__arrow u-tooltip__arrow--left u-tooltip__arrow--bottom"></div>
                                </div>

                            </div>`;

        meta.push(description);
    }
    if(obj.note) {
        const icon = obj.obsolete ? `<i class="fas fa-thumbs-down"></i>` : '<i class="fas fa-info"></i>';
        const note = `<div class="meta__note meta__item u-tooltip-parent">
                        <span>${icon}</span>

                        <div class="note__tooltip u-tooltip">
                            ${obj.note}
                            <div class="u-tooltip__arrow u-tooltip__arrow--center u-tooltip__arrow--bottom"></div>
                        </div>
                    </div>`;

        meta.push(note);
    }

    return meta.map(data => data).join('');
}

/* Actions */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.search').classList.remove('u-hide');
});

const showFilter = () => {
    document.querySelector('.filter').classList.remove('u-hide');
}

/* Filter by Search */
const findSearchMatches = (elementToMatch, arrayToFilter) => {

    return arrayToFilter.filter(htmlElement => {
        let regex = new RegExp(escapeRegExp(elementToMatch), 'gi');
        return htmlElement.element.match(regex);
    });
}

const sortSearchMatches = (elementToMatch, arrayToSort) => {
    
    let value_sanitized = escapeRegExp(elementToMatch);

    let exact_MatchArray = [],
        partialsPseudo_MatchArray = [],
        partialsAttributes_MatchArray = [],
        beginsWith_MatchArray = [],
        contains_MatchArray = [];
    
    arrayToSort.map(htmlElement => {
        let element = htmlElement.element;
        if ( (element.indexOf(value_sanitized) === 0) && (element.length === value_sanitized.length) ) {

            exact_MatchArray.push(htmlElement);

        } else if ( element.indexOf(`${value_sanitized}:`) === 0 ) {

            partialsPseudo_MatchArray.push(htmlElement);

        } else if ( element.indexOf(`${value_sanitized}[`) === 0 ) {

            partialsAttributes_MatchArray.push(htmlElement);

        } else if ( element.indexOf(`${value_sanitized}`) === 0 ) {

            beginsWith_MatchArray.push(htmlElement);

        } else {
            contains_MatchArray.push(htmlElement);
        }
    });

    return sortArrays(
        exact_MatchArray,
        partialsPseudo_MatchArray,
        partialsAttributes_MatchArray,
        beginsWith_MatchArray,
        contains_MatchArray
    );
}

// Sort alphabetically
// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
const sortArrays = (...arrays) => {
    return arrays.map((array) => {
        return array.sort((a, b) => {
            return a.element.localeCompare(b.element);
        });
    }).flat();
}

// Escape special characters
// see: https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex/6969486#6969486
const escapeRegExp = (str) => {
    return str.replace(/[-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

// Remove whitespaces
const removeWhiteSpace = (str) => {
    return str.replace(/\s/g, "");
}

// Allow time for user input before calling search handler
const setStandby = (condition) => {
    let loader  = document.querySelector('.search .search__loader'),
        search  = document.querySelector('.search');

    if(condition) {

        if(loader) { // loader already exists, do not append another
            return;
        }

        loader = document.createElement('div');
        loader.classList.add('search__loader');
        search.appendChild(loader);
    } else {
        loader = document.querySelector('.search__loader');

        if(!loader) { // loader does not exist, do not attempt to remove
            return;
        } else {
            loader.parentNode.removeChild(loader);
        }
    }
}

const displaySearchMatches = (...args) => {
    let [event,value] = args;

    value = removeWhiteSpace(value);

    const   matchedArray = findSearchMatches(value, cssDefaults),
            sortedArray = sortSearchMatches(value, matchedArray),
            html = sortedArray.map(htmlElement => {

        const   regex = new RegExp(escapeRegExp(value), 'gi'),
                name = htmlElement.element.replace(regex, `<span class="u-highlight">${value.toLowerCase()}</span>`),
                obsolete = htmlElement.obsolete,
                styles = getStyles(htmlElement),
                description = getMeta(htmlElement),
                result = renderResult({name, description, styles, obsolete});

        return result;

    }).join('');
    searchResults.innerHTML = html;

    const activeFilter = document.querySelector('.filter__button--active');
    
    if(activeFilter) {
        filterSelectMatches(activeFilter.dataset.engine);
    }
    
    showFilter();
    setShareLink(value);
    setUrlFragment(value);
    setFilterResultsLabel();
    setEngineStyleFilters();
    setStandby(false);
}

const   searchInput = document.querySelector('.search__field'),
        searchResults = document.querySelector('.results'),
        searchTimeout = {timeout: null};

const searchHandler = (event) => {

    setStandby(true);
    clearTimeout(searchTimeout.timeout);

    searchTimeout.timeout = setTimeout(() => {
        setStandby(false);

        let value = event.target.value;

        if (value) {
            displaySearchMatches(event,value);
        } else {
            let results = document.querySelectorAll('.results li');
            if(results) {
                results.forEach(result => result.remove());
            }
            setFilterResultsLabel();
            setEngineStyleFilters();
        }

    },500);
}

searchInput.addEventListener('keydown', searchHandler);

const urlQuery = () => {

    let value = window.location.hash.substr(1);

    if (value) {
        displaySearchMatches(null,value);
    }
}

document.addEventListener('DOMContentLoaded', urlQuery);

/* Filter by Rendering Engine */
const findSelectMatches = (elementToMatch, arrayToFilter) => {
    return arrayToFilter.filter(htmlElement => {
        for (const [keyObj, styleBlock] of Object.entries(htmlElement)) {
            if(typeof styleBlock !== 'object' || Object.entries(styleBlock).length === 0) {continue}
            if(keyObj === elementToMatch) { return true; }
        }
    });
}

const filterSelectMatches = (elementToMatch) => {
    const state = {
        searchResults: document.querySelectorAll('.results > li'),
        hasEngine: false,
    }
    state.searchResults.forEach((result) => {
        result.querySelector(`.${elementToMatch}`) ? state.hasEngine = true : state.hasEngine = false;
        state.hasEngine ? result.classList.remove('u-hide') : result.classList.add('u-hide');
    });
}

const displaySelectedMatches = (event) => {

    const   engine = event.target.dataset.engine,
            buttonActive = setButtonState(event.target);

    if(buttonActive) {
        if(searchInput.value) {
            filterSelectMatches(engine);
        } else {
            const   matchedArray = findSelectMatches(engine, cssDefaults),
                    html = matchedArray.map(htmlElement => {

                const   name = htmlElement.element,
                        obsolete = htmlElement.obsolete,
                        styles = getStyles(htmlElement),
                        description = getMeta(htmlElement),
                        result = renderResult({name, description, styles, obsolete});

                return result;

            }).join('');
            searchResults.innerHTML = html;
        }
        setFilterResultsLabel(engine);
    } else {
        setFilterResultsLabel();
    }

    setEngineStyleFilters();
}

const setButtonState = (element) => {

    if(element.classList.contains('filter__button--active')) {
        element.classList.toggle('filter__button--active');
        return false;
    } else {
        filterButtons.forEach((button) => {
            button.classList.remove('filter__button--active');
        });
        element.classList.toggle('filter__button--active');
        return true;
    }
}

const filterButtons = document.querySelectorAll('.filter__button');

filterButtons.forEach((button) => {
    button.addEventListener('click', displaySelectedMatches);
});

/* Render Results */
const renderResult = (props) => {
    const   {name, description, styles, obsolete} = props,
            result = `<li ${obsolete ? `class="obsolete"` : ''}>
                        <div class="element">
                            <div class="element__name">${name}</div>
                            <div class="meta">${description}</div>
                            <div class="compatibility"></div>
                        </div>
                        <ul class="styles">${styles}</ul>
                    </li>`;
    return result;
}

const setFilterResultsLabel = (engine) => {
    const   filterLabel = document.querySelector('.filter-results-label'),
            total = countResults();

    if(engine) {
        filterLabel.setAttribute('data-engine',engine);
        filterLabel.firstElementChild.innerHTML = `Showing ${total} result(s) for <em>${engine}</em> browsers: `;
    } else {
        filterLabel.setAttribute('data-engine','none');
        filterLabel.firstElementChild.innerHTML = `Showing ${total} result(s): `;
        const results = document.querySelectorAll('.results .u-hide');
        results.forEach((result) => {
            result.classList.remove('u-hide');
        });
    }
}

const setShareLink = (searchTerm) => {
    let share_Wrapper           = document.querySelector('.results-share__wrapper');
    if(searchTerm) {

        let share_Url           = window.location.origin+'#'+searchTerm,
            share_Icon          = `<span class="results-share__target"><i class="fa fa-clone" aria-hidden="true"></i></span>`,
            share_IconLink      = `<span class="results-share__link">
                                        <span class="results-share__copyIcon">${share_Icon}</span> 
                                        ${share_Url}
                                    </span>`;

        share_Wrapper.innerHTML = share_IconLink;
        share_Wrapper.classList.remove('u-hide');
    } else {
        share_Wrapper.textContent = '';
        share_Wrapper.classList.add('u-hide');
    }
};

const setUrlFragment = (searchTerm) => {
    if(searchTerm) {
        window.location.hash = searchTerm;
    } else {
        clearUrlFragment();
    }
};

const clearUrlFragment = () => {
    // remove fragment
    window.location.replace("#");

    // clean up the remaining '#'    
    if (typeof window.history.replaceState == 'function') {
        history.replaceState({}, '', window.location.href.slice(0, -1));
    }
}

const countResults = () => {
    const   results = document.querySelector('.results'),
            activeFilter = document.querySelector('.filter__button--active');
    let     total = 0;
    
    if(activeFilter) {
        results.childNodes.forEach(result => {
            if(!result.classList.contains('u-hide')) {
                total += 1;
            }
        });
    } else {
        total = results.childElementCount;
    }

    noResults(total);

    return total;
}

const noResults = (total) => {
    const results = document.querySelector('.results');

    if(total <= 0) {
        results.classList.add('results--noMatches');
        setShareLink(null);
        setUrlFragment(null);
    } else {
        results.classList.remove('results--noMatches');
    }
}

/**
 * Clipboard Copy
 * 
 * @note: checking for "clipboard-write" permission using the Permissions API 
 */
navigator.permissions.query({name: "clipboard-write"}).then(result => {

    if (result.state == "granted" || result.state == "prompt") {
        const copyUrlToClipboard = (event) => {
            let urlClip                 = event.target.innerText.trim() || event.target.textContent.trim(),
                tooltip_feedbackTimeout = (tooltip, state, delay) => {
                    setTimeout(() => {
                        tooltip.classList.remove(`results-share__tooltip--${state}`);
                        tooltip.innerText = '/* Copy */';
                    }, delay);
                };

            navigator.clipboard.writeText(urlClip).then(() => {
                /* clipboard successfully set */

                let tooltip = document.querySelector('.results-share__tooltip');
                tooltip.classList.add('results-share__tooltip--success');
                tooltip.innerText = '/* Copied! */';

                tooltip_feedbackTimeout(tooltip, 'success', 3000);

            }, (error) => {
                /* clipboard write failed */
                console.error(error);

                let tooltip = document.querySelector('.results-share__tooltip');
                tooltip.classList.add('results-share__tooltip--fail');
                tooltip.innerText = '/* Could not copy (╯°□°)╯︵ ┻━┻ */';

                tooltip_feedbackTimeout(tooltip, 'fail', 3000);

            });

        }

        let copyTargets = document.querySelectorAll('.results-share__target');
        copyTargets.forEach((target) => {
            target.addEventListener('click', copyUrlToClipboard);
        });

    } else {
        console.info('Cannot use the Clipboard API. The "clipboard-write" permission has been ',result.state);
    }

});

/* Filter Rendering Engine Styles */
const filterEngineStyles = (event) => {
    const   classes = {
                checked: ['fas', 'fa-check-square'],
                unchecked: ['far', 'fa-square'],
            },
            input = event.target,
            icon = input.nextElementSibling.querySelector('svg');

    if(input.checked) {
        icon.classList.add(...classes.checked);
        icon.classList.remove(...classes.unchecked);
    } else {
        icon.classList.add(...classes.unchecked);
        icon.classList.remove(...classes.checked);
    }

    setEngineStyleFilters();
}

const setEngineStyleFilters = () => {
    const   validFilters = {
                blinkStyles: document.querySelector('.results .styles .blink'),
                webkitStyles: document.querySelector('.results .styles .webkit'),
                geckoStyles: document.querySelector('.results .styles .gecko'),
                tridentStyles: document.querySelector('.results .styles .trident'),
            },
            engineStyles = document.querySelector('.filter-engine-styles'),
            results = document.querySelector('.results'),
            checkboxes = document.querySelectorAll('.filter-engine-styles input');

    if(engineStyles.classList.contains('u-hide')) {
        engineStyles.classList.remove('u-hide');
    }

    // Show checkbox if element with engine style is available
    for(const [engine, valid] of Object.entries(validFilters)) {
        valid ? engineStyles.classList.add(engine) : engineStyles.classList.remove(engine);
    }

    // Show engine styles if corresponding checkbox is checked
    checkboxes.forEach((input) => {
        let browserStyles = input.id;
        if(engineStyles.classList.contains(browserStyles)) {
            input.checked ? results.classList.add(browserStyles) : results.classList.remove(browserStyles);
        }
    });
}

const engineStylesField = document.querySelectorAll('.filter-engine-styles input');

engineStylesField.forEach((checkbox) => {
    checkbox.addEventListener('change', filterEngineStyles);
});