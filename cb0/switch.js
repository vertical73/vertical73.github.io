// switch.js

const main = document.getElementById('main');

if (main) {
    main.addEventListener('click', function(e) {

        // Find the channel containing the clicked element
        const channel = e.target.closest('.model');

        if (!channel) return;

        // Is this channel already displaying its label?
        const alreadyVisible = channel.classList.contains('show-info');

        // Hide any currently displayed label
        main.querySelectorAll('.model.show-info')
            .forEach(el => el.classList.remove('show-info'));

        // If it wasn't already visible, display it
        if (!alreadyVisible) {
            channel.classList.add('show-info');
        }
    });
}

// Display a temporary label
let activeModel = null;
let hideTimer = null;

function showInfo(channel) {
    if (hideTimer) {
        clearTimeout(hideTimer);
    }

    if (activeModel) {
        activeModel.classList.remove('show-info');
    }

    channel.classList.remove('intro-label');
    channel.classList.remove('show-info');

    // Restart the CSS animation
    void channel.offsetWidth;

    channel.classList.add('show-info');
    activeModel = channel;

    hideTimer = setTimeout(function() {
        channel.classList.remove('show-info');
        activeModel = null;
        hideTimer = null;
    }, 2600);
}


// Original click/tap handling, with timed labels
main.addEventListener('click', function(e) {
    const channel = e.target.closest('.model');
    if (!channel) return;

    showInfo(channel);
});