/* || Theme toggle */
const setThemeToggle = () => {
    const node = `
        <div class="darkmode-toggle__label u-tooltip-parent"> 
            <div class="darkmode-toggle__tooltip u-tooltip u-center">
                <span>Switch to <span class="u-light--hide">light</span><span class="u-dark--hide">dark</span> theme</span>
                <div class="u-tooltip__arrow u-tooltip__arrow--center u-tooltip__arrow--bottom"></div>
            </div>
            <i class="fas fa-adjust"></i>
        </div>
    `;

    const options = {
        bottom: '32px', // default: '32px'
        right: 'unset', // default: '32px'
        left: '32px', // default: 'unset'
        time: '0.5s', // default: '0.3s'
        mixColor: '#fff', // default: '#fff'
        backgroundColor: '#fff',  // default: '#fff'
        buttonColorDark: '#292929;',  // default: '#100f2c'
        buttonColorLight: '#ffffff', // default: '#fff'
        saveInCookies: true, // default: true,
        label: node, // default: ''
        autoMatchOsTheme: true // default: true
    }

    const darkmode = new Darkmode(options);
    darkmode.showWidget();
};

document.addEventListener('DOMContentLoaded', setThemeToggle);

/* || Scroll behaviour */
const watchScroll = () => {
    const fromTop = window.pageYOffset || document.documentElement.scrollTop;
    if (fromTop < 500) {
        document.body.classList.remove('u-scrollDown', 'u-scrollUp');
    } else if (fromTop > window.oldScroll) {
        !document.body.classList.contains('u-scrollDown') ? document.body.classList.add('u-scrollDown'): '';
        document.body.classList.contains('u-scrollUp') ? document.body.classList.remove('u-scrollUp') : '';
    } else {
        !document.body.classList.contains('u-scrollUp') ? document.body.classList.add('u-scrollUp') : '';
        document.body.classList.contains('u-scrollDown') ? document.body.classList.remove('u-scrollDown') : '';
    }
    window.oldScroll = fromTop <= 0 ? 0 : fromTop; // For Mobile or negative scrolling
};

window.addEventListener('scroll', watchScroll, false);

/* || Scroll to top */
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelector('.to-top').addEventListener('click', scrollToTop);