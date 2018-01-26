
function bsd(customStyles) {
    document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
            let el = document.createElement('div');
            el.id = 'bootstrap-size-display';
            el.className = 'override';

            el.innerHTML = `
                <div class="bsd-xs visible-xs visible-xs-block hidden-sm-up d-xs-block d-sm-none">xs</div>
                <div class="bsd-sm visible-sm visible-sm-block hidden-md-up hidden-xs-down d-none d-sm-block d-md-none">sm</div>
                <div class="bsd-md visible-md visible-md-block hidden-lg-up hidden-sm-down d-none d-md-block d-lg-none">md</div>
                <div class="bsd-lg visible-lg visible-lg-block hidden-xl-up hidden-md-down d-none d-lg-block d-xl-none">lg</div>
                <div class="bsd-xl visible-xl hidden-xs hidden-sm hidden-md hidden-lg visible-xl-block hidden-lg-down d-none d-xl-block">xl</div>
            `;

            let style = document.createElement('style');
            style.innerHTML = `
                #bootstrap-size-display {
                    position: fixed;
                    font-size: 2rem;
                    z-index: 1000000;
                    bottom: .5rem;
                    right: .5rem;
                }
            `;

            if (customStyles && typeof customStyles === 'object') {
                Object.keys(customStyles).forEach((key) => {
                    el.style[key] = customStyles[key];
                });
            }

            document.body.appendChild(el);
            document.body.appendChild(style);
        }
    };
}

bsd();

module.exports = bsd;
