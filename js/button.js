function startLoading() {
    var button = document.querySelector('.loading-button');
    button.classList.add('loading');

    // Simulating a task that takes 3 seconds
    setTimeout(function() {
        button.classList.remove('loading');
    }, 3000);
}
