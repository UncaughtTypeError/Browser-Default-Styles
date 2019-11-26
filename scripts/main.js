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

// Escape special characters
// see: https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex/6969486#6969486
const escapeRegExp = (str) => {
    return str.replace(/[-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

// Remove whitespaces
const removeWhiteSpace = (str) => {
    return str.replace(/\s/g, "");
}

const setStandby = (condition) => {
    let icon    = document.querySelector('.search svg'),
        search  = document.querySelector('.search');

    if(condition) {

        if(icon) { // icon already exists, do not append another
            return;
        }

        icon = document.createElement('i');
        icon.classList.add('fas', 'fa-circle-notch', 'fa-spin');
        search.appendChild(icon);
    } else {
        icon = document.querySelector('.search svg');

        if(!icon) { // icon does not exist, do not attempt to remove
            return;
        } else {
            icon.parentNode.removeChild(icon);
        }
    }
}

const displaySearchMatches = (...args) => {
    let [event,value] = args;

    value = removeWhiteSpace(value);

    const   matchArray = findSearchMatches(value, cssDefaults),
            html = matchArray.map(htmlElement => {

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
            let results = document.querySelectorAll('.results li'),
                filterLabel = document.querySelector('.filter-results-label')
            if(results) {
                results.forEach(result => result.remove());
                filterLabel.firstElementChild.innerHTML = `Showing 0 result(s): `;
            }
        }

    }, 500);
}

searchInput.addEventListener('keydown', searchHandler);

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
            const   matchArray = findSelectMatches(engine, cssDefaults),
                    html = matchArray.map(htmlElement => {

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
    return total;
}

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