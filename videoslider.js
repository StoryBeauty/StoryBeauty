document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".video-slide");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;

    function playVideo(index) {
        videos.forEach(video => video.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        videos[index].classList.add("active");
        dots[index].classList.add("active");

        videos[index].play();

        videos[index].onended = function () {
            currentIndex = (index + 1) % videos.length;
            playVideo(currentIndex);
        };
    }

    function goToVideo(index) {
        currentIndex = index;
        playVideo(index);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => goToVideo(index));
    });

    playVideo(currentIndex);
});
