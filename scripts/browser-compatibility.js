/* Browser Compatibility Data */
const compatibilityDataState = {
    elements: [],
}

const setCompatibilityData = (event) => {
    let eventTarget = event.target;

    if(eventTarget.classList.contains('element')) {

        let appendTarget = eventTarget.querySelector('.compatibility');
        if(appendTarget.hasChildNodes()) {
            return;
        }

        let element = eventTarget.querySelector('.element__name').textContent,
            format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        // Exit if name contains spaces or special characters
        if(format.test(element)) {
            return;
        }

        let inStore = false;
        // Element is already in state store, no need for repeat lookup
        compatibilityDataState.elements.map(e => {
            for(let [key, value] of Object.entries(e)) {
                if(inStore) {
                    break; // already in store, exit loop
                } else if(key !== element) {
                    continue; // not in store, continue to next iteration
                }
                inStore = true;
                let compatibilityData = value;
                appendCompatibilityData({compatibilityData, appendTarget});
            }
        });
        // Element is not in state store, lookup is needed
        if(!inStore) {
            ((async () => {
                let compatibilityData = await fetchCompatibilityData(element);
                if(appendTarget.hasChildNodes()) {
                    return;
                }
                appendCompatibilityData({compatibilityData, appendTarget});

                // Set state
                compatibilityDataState.elements.push({[element] : compatibilityData});
            })()).catch(err => {
                console.error(err);
            });
        }
    }

}

const fetchCompatibilityData = async element => {

    const setVersion = (browser, element) => {
        browser = element.__compat.support[browser];
        if(Array.isArray(browser)) {
            return browser[0].version_added; // get latest version
        } else {
            return browser.version_added;
        }
    }
    
    let url = `/api/mdn-browser-compat-data/html/elements/${element}.json`,
        response = await fetch(url),
        result = await response.json(),
        elementData = result.html.elements[element];
    return {
        chrome: setVersion('chrome', elementData),
        edge: setVersion('edge', elementData),
        firefox: setVersion('firefox', elementData),
        opera: setVersion('opera', elementData),
        safari: setVersion('safari', elementData),
        ie: setVersion('ie', elementData),
    };

};

const appendCompatibilityData = data => {
    const {compatibilityData, appendTarget} = data;

    const getIcon = dataset => {
        let {browser, compatibility} = dataset;

        if(compatibility === true) {
            compatibility = `<span class="supported"><i class="fas fa-check"></i></span>`;
        } else if(compatibility === false) {
            compatibility = `<span class="unsupported"><i class="fas fa-times"></i></span>`;
        } else {
            compatibility = `<span class="supported">${compatibility}</span>`;
        }

        switch(browser) {
            case 'chrome' :
                return `<span><i class="fab fa-chrome"></i></span>
                        ${compatibility}`;
            case 'opera' :
                return `<span><i class="fab fa-opera"></i></span>
                        ${compatibility}`;
            case 'edge' :
                return `<span><i class="fab fa-edge"></i></span>
                        ${compatibility}`;
            case 'safari' :
                return `<span><i class="fab fa-safari"></i></span>
                        ${compatibility}`;
            case 'firefox' :
                return `<span><i class="fab fa-firefox"></i></span>
                        ${compatibility}`;
            case 'ie' :
                return `<span><i class="fab fa-internet-explorer"></i></span>
                        ${compatibility}`;
        }
    }

    const setIcon = icon => {
        appendTarget.appendChild(icon);
        appendTarget.classList.add('compatibility--visible');
    }
    
    for (let [browser, compatibility] of Object.entries(compatibilityData)) {
        let icon = document.createElement('span');
        icon.innerHTML = getIcon({browser, compatibility});
        setIcon(icon);
    }
};

document.querySelector('.results').addEventListener('mouseover', setCompatibilityData);