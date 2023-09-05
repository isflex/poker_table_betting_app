// restrict DS visibility
window.addEventListener('DOMContentLoaded', function () {
    var prod = document.querySelectorAll('.ds-prod');
    var edge = document.querySelectorAll('.ds-edge');
    var isProd = (document.location.host === 'design.bouyguestelecom.fr');
    Array.from(isProd ? edge : prod).map(e => e.outerHTML = '');
});
