let isClose = true;
const active = 'active';

function onMenu() {
    const items = document.querySelector('.header .nav .items');

    if(isClose) {
        items.classList.add(active);
        isClose = false;
    } else {
        items.classList.remove(active);
        isClose = true;
    }
}

function onModalOpen() {
    const modal = document.querySelector('.modal');
    modal.classList.add(active);
}

function onModalClose() {
    const modal = document.querySelector('.modal');
    modal.classList.remove(active);
    const modalVideo = document.querySelector('.modal video');
    stopVideo(modalVideo);
}

function stopVideo(video){
    video.pause();
    video.currentTime = 0;
}

function loader() {
    const loader = document.querySelector('#loader');
    loader.parentNode.removeChild(loader);
}

// page load
window.onload = function () {
    loader();
}
