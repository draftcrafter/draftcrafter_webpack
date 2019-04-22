if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'vue'
import './js/index.js'
import './scss/main.scss'

import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = 'Hello';
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());