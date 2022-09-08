const butInstall = document.getElementById('buttonInstall');


window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.addEventListener('click', () => {
        event.prompt();
    });

});


window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
});


