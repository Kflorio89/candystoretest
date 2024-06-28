function toggleFullscreen(element) {
    if (!document.fullscreenElement) {
        element.classList.add('fullscreen');
        element.requestFullscreen().catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen();
        element.classList.remove('fullscreen');
    }
}