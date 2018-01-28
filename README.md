# Bootstrap Size Display

A simple development utility for displaying the current [Bootstrap](https://getbootstrap.com/) class in the browser. Compatible from `v3.0.0`.

![bootstrap-size-display example](./example_screenshot.png)

## Install

Install it as a local dependency:
```bash
$ npm i --save-dev bootstrap-size-display

$ yarn add -D bootstrap-size-display
```
Or use the `unpkg` cdn:
```html
<script src="https://unpkg.com/bootstrap-size-display/dist/bsd.min.js"></script>
```



## Setup
Call `bsd` to add display on page load:
```html
    ...
    <script src="https://unpkg.com/bootstrap-size-display/dist/bsd.min.js"></script>
</head>
<body>
    ...    
    <script>
        bsd()
    </script>
    ...
``` 
Importing the module is only necessary when used as a local dependency.
```javascript
// CommonJS
var bsd = require('bootstrap-size-display');

// ES6 modules
import bsd from 'bootstrap-size-display';


bsd();
```

## Overriding default styles
Default styles are: 
```css
#bootstrap-size-display {
    position: fixed;
    font-size: 2rem;
    z-index: 1000000;
    bottom: .5rem;
    right: .5rem;
}
```
To override default styles there are two options:

1) Initiate with a javascript object to set inline style:
```javascript
bsd({
    fontSize: '20px',
    top: '5px', 
    left: '10px',
    color: 'purple';
});
```
2) Override styling in custom `css` (selector `#bootstrap-size-display`) using the `.override` class:
```css
#bootstrap-size-display.override {
    fontSize: 20px;
    top: 5px; 
    left: 10px;
    color: purple;
}
```
NOTE: Javascript initiation takes precedence over `css` rules.