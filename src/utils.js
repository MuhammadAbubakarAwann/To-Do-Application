import bgImg from './images/bg2.png';

function addBgImage(el) {
    if (el) {
        el.style.backgroundImage = `url(${bgImg})`;
        el.style.backgroundSize = 'cover';

    }
}
export {
    addBgImage
}
