/* || Theme toggle */
const setThemeToggle = () => {
    var options = {
        bottom: '32px', // default: '32px'
        right: 'unset', // default: '32px'
        left: '32px', // default: 'unset'
        time: '0.5s', // default: '0.3s'
        mixColor: '#fff', // default: '#fff'
        backgroundColor: '#fff',  // default: '#fff'
        buttonColorDark: '#292929;',  // default: '#100f2c'
        buttonColorLight: '#ffffff', // default: '#fff'
        saveInCookies: true, // default: true,
        label: '<i class="fas fa-adjust"></i>', // default: ''
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