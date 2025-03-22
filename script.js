function toggleMenu() {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}

//change the background video when click on gallery image
function changeVideo(name) {
    const bgVideoList = document.querySelectorAll('.bg-video');
    const trailers = document.querySelectorAll('.trailer');
    const models = document.querySelectorAll('.model');

    //javascript higher order array function for each 
    //this is easier to do data mapping
    bgVideoList.forEach(video => {
        video.classList.remove('active');
        if(video.classList.contains(name)) {
            video.classList.add('active');
        }
    })

    //mapping model name change
    models.forEach(model => {
        model.classList.remove('active');
        if(model.classList.contains(name)) {
            model.classList.add('active');
        }
    })

    //mapping trailer video change
    trailers.forEach(model => {
        model.classList.remove('active');
        if(model.classList.contains(name)) {
            model.classList.add('active');
        }
    })
}

//change the play and pause button onclick
function toggleplay() {
    const play = document.querySelector('.play');
    const pause = document.querySelector('.pause');
    play.classList.toggle('active');
    pause.classList.toggle('active');
}

//video play and pause
function pauseVideo() {
    const bgVideoList = document.querySelectorAll('.bg-video');
    bgVideoList.forEach(video => {
        video.pause();
    });

    toggleplay();
}

function playVideo() {
    const bgVideoList = document.querySelectorAll('.bg-video');
    bgVideoList.forEach(video => {
        video.play();
    });

    toggleplay();
}

