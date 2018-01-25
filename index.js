document.onreadystatechange = function () {
    if (document.readyState == 'complete') {
        onCompleteLoad({ color: 'blue' });
    }
}

function onCompleteLoad(customStyles) {
    var el = document.createElement('div');
    el.id = 'bootstrap-size-display';
    el.class = 'override';

    el.innerHTML = `
        <div class="xs visible-xs-block d-xs-block d-sm-none">xs</div>
        <div class="sm visible-sm-block d-none d-sm-block d-md-none">sm</div>
        <div class="md visible-md-block d-none d-md-block d-lg-none">md</div>
        <div class="lg visible-lg-block d-none d-lg-block d-xl-none">lg</div>
        <div class="xl visible-xl-block d-none d-xl-block d-xxl-none">xl</div>
        <div class="xxl visible-xxl-block d-none d-xxl-block">xxl</div>`;

    var style = document.createElement('style');
    style.innerHTML = `
        #bootstrap-size-display {
            position: fixed;
            font-size: 50px;
            line-height: 50px;
            text-align: left;
            z-index: 1000000;
            bottom: 8px;
            right: 8px;
        }

        #bootstrap-size-display>*:not(.xs) {
            display: none;
        }`;

    if (customStyles && typeof customStyles === 'object') {
        Object.keys(customStyles).forEach(function (key) {
            el.style[key] = customStyles[key];
        })
    }

    document.body.appendChild(el)
    document.body.appendChild(style)
};