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
