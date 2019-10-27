/* Scroll behaviour */
window.addEventListener('scroll', () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st < 500) {
        document.body.classList.remove('u-scrollDown', 'u-scrollUp');
    } else if (st > window.oldScroll) {
        !document.body.classList.contains('u-scrollDown') ? document.body.classList.add('u-scrollDown'): '';
        document.body.classList.contains('u-scrollUp') ? document.body.classList.remove('u-scrollUp') : '';
    } else {
        !document.body.classList.contains('u-scrollUp') ? document.body.classList.add('u-scrollUp') : '';
        document.body.classList.contains('u-scrollDown') ? document.body.classList.remove('u-scrollDown') : '';
    }
    window.oldScroll = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);