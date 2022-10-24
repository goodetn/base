import generateJokes from './generateJoke';
import '../styles/main.scss';
import colorBrand from './assets/colorBrand.png';

const colorBrandEl = document.getElementById('colorBrandEl');
colorBrandEl.src = colorBrand;

console.log(generateJokes());