document.addEventListener('DOMContentLoaded', function () {

    // handles MODAL opening
    if (document.getElementById('js-modal-opening')) {
        document.getElementById('js-modal-opening').addEventListener('click', function(e) {
            document.querySelector('.modal').classList.add('is-active');
            e.preventDefault();
        });
    }

    // handles MODAL closing
    if (document.getElementById('js-modal-closing')) {
        document.getElementById('js-modal-closing').addEventListener('click', function (e) {
            document.querySelector('.modal').classList.remove('is-active');
            e.preventDefault();
        });
    }

    // handles OLD NAVBAR dropdown
    if (document.getElementById('js-dropdown-documentation-old')) {
        document.getElementById('js-dropdown-documentation-old').addEventListener('click', function (e) {
            this.classList.toggle('is-active');
            e.preventDefault();
        });
    }

    // handles NEW NAVBAR dropdown
    if (document.getElementById('js-dropdown-documentation-new')) {
        document.getElementById('js-dropdown-documentation-new').addEventListener('click', function (e) {
            this.classList.toggle('is-active');
            e.preventDefault();
        });
    }

    // handles NEW NAVBAR dropdown
    if (document.getElementById('js-dropdown-documentation-guest')) {
        document.getElementById('js-dropdown-documentation-guest').addEventListener('click', function (e) {
            this.classList.toggle('is-active');
            e.preventDefault();
        });
    }

    // handles NEW NAVBAR dropdown
    if (document.getElementById('js-dropdown-documentation-client')) {
        document.getElementById('js-dropdown-documentation-client').addEventListener('click', function (e) {
            this.classList.toggle('is-active');
            e.preventDefault();
        });
    }

    // handles SUMMARY automatically generated
    let ids = document.querySelectorAll('.container[id]:not([id=""])');
    if (ids.length > 1) {
        let summaryContainer = document.getElementById('summary');
        for (let i = 0; i < ids.length ; i++) {
            let element = document.createElement('li');
            element.innerHTML = '<a href="#' + ids[i].getAttribute('id') + '">' + ids[i].children[0].innerHTML + '</a>';
            summaryContainer.appendChild(element);
        }
    }

    // handles VERSION on release page
    if (document.getElementById('js-flexiness-ds-version')) {
        let frameworkVersion = document.getElementById('js-flexiness-ds-version');
        let vanillaVersion = document.getElementById('js-vanilla-version');
        let sliderVersion = document.getElementById('js-slider-version');
        let fillableFramework = document.querySelectorAll('[rel=framework]');
        let fillableVanilla = document.querySelectorAll('[rel=vanilla]');
        let fillableSlider = document.querySelectorAll('[rel=slider]');
        frameworkVersion.addEventListener('keyup', function(e) {
            var filledVersion = this.value;
            for (let i = 0 ; i < fillableFramework.length ; i++) {
                fillableFramework[i].innerText = filledVersion;
            }
        });
        vanillaVersion.addEventListener('keyup', function (e) {
            var filledVersion = this.value;
            for (let i = 0; i < fillableVanilla.length; i++) {
                fillableVanilla[i].innerText = filledVersion;
            }
        });
        sliderVersion.addEventListener('keyup', function (e) {
            var filledVersion = this.value;
            for (let i = 0; i < fillableSlider.length; i++) {
                fillableSlider[i].innerText = filledVersion;
            }
        });
    }

});
