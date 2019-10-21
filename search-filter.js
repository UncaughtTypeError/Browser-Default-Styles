import { cssDefaults } from '/css-defaults.js';

/* Compile style list */
const getStyles = (obj) => {
    const styles = [];
    for (const [keyObj, styleBlock] of Object.entries(obj)) {
        if(typeof styleBlock !== 'object') {continue}

        const browsers = getBrowsers(keyObj);

        for (let [key, value] of Object.entries(styleBlock)) {
            if(key.toLowerCase() != key) {
                key = key.replace(/([A-Z])/g, "-$1").toLowerCase();
            }
            styles.push(`<li class="${keyObj}">${key}: ${value} <span class="browsers">${browsers}</span></li>`);
        }
    }
    return styles.map(style => style).join('');
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

    const meta = {
        description:    `<div class="meta__description meta__item u-tooltip-parent">
                            <span class="meta__label">/* description */</span>
                            <div class="meta__tooltip u-tooltip">${obj.description}<div class="u-tooltip__arrow"></div></div>
                        </div>`,
    }

    return meta;
}

/* Filter by Search */
const findSearchMatches = (elementToMatch, arrayToFilter) => {
    return arrayToFilter.filter(htmlElement => {
        const regex = new RegExp(elementToMatch, 'gi');
        return htmlElement.element.match(regex);
    });
}

const displaySearchMatches = (event) => {

    const   value = event.target.value,
            matchArray = findSearchMatches(value, cssDefaults),
            html = matchArray.map(htmlElement => {

        const   regex = new RegExp(value, 'gi'),
                elementName = htmlElement.element.replace(regex, `<span class="u-highlight">${value}</span>`),
                stylesHtml = getStyles(htmlElement),
                metaHtml = getMeta(htmlElement);

        return `
            <li>
                <div class="element">${elementName}
                    <div class="meta">${metaHtml.description}</div>
                </div>
                <ul class="styles">${stylesHtml}</ul>
            </li>
        `;

    }).join('');
    searchResults.innerHTML = html;

    const activeFilter = document.querySelector('.filter__button--active');
    
    if(activeFilter) {
        filterSelectMatches(activeFilter.dataset.engine);
    }
    
    setEngineStyleFilters();
}

const   searchInput = document.querySelector('.search__field'),
        searchResults = document.querySelector('.results');

searchInput.addEventListener('keyup', displaySearchMatches);

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
        setFilterResultsLabel({engine: engine, active: true});

        if(searchInput.value) {
            filterSelectMatches(engine);
        } else {
            const   matchArray = findSelectMatches(engine, cssDefaults),
                    html = matchArray.map(htmlElement => {

                const   elementName = htmlElement.element,
                        stylesHtml = getStyles(htmlElement);

                return `
                    <li>
                        <div class="element">${elementName}
                            <div class="meta">${metaHtml.description}</div>
                        </div>
                        <ul class="styles">${stylesHtml}</ul>
                    </li>
                `;

            }).join('');
            searchResults.innerHTML = html;
        }
    } else {
        setFilterResultsLabel({engine: engine, active: false});
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

const setFilterResultsLabel = (props) => {
    const   filterLabel = document.querySelector('.filter-results-label'),
            {engine, active} = props;
    if(active) {
        filterLabel.classList.remove('u-hide');
        filterLabel.setAttribute('data-engine',engine);
        filterLabel.firstElementChild.innerHTML = `Showing results for <em>${engine}</em> browsers: `;
    } else {
        filterLabel.classList.add('u-hide');
        const results = document.querySelectorAll('.results .u-hide');
        results.forEach((result) => {
            result.classList.remove('u-hide');
        });
    }
}

const filterButtons = document.querySelectorAll('.filter__button');

filterButtons.forEach((button) => {
    button.addEventListener('click', displaySelectedMatches);
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

    for(const [engine, valid] of Object.entries(validFilters)) {
        valid ? engineStyles.classList.add(engine) : engineStyles.classList.remove(engine);
    }

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