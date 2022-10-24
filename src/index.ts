import generateJokes from './generateJoke';
import './styles/main.scss';
import colorBrand from './assets/colorBrand.png';

const colorBrandEl = document.getElementById('colorBrandEl');
(colorBrandEl as HTMLImageElement).src = colorBrand;

const jokeBtn = document.getElementById('jokeBtn');

jokeBtn?.addEventListener('click', generateJokes);

generateJokes();