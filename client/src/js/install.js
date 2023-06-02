const butInstall = document.getElementById('buttonInstall');


window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  window.deferredPrompt = event;
});

butInstall.addEventListener('click', async () => {
  let deferredPrompt = window.deferredPrompt;
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    console.log(result.outcome);

    if (result.outcome === 'dismissed') {
      console.log('User cancelled installation');
    } else {
      console.log('User installed the PWA');
    }

    deferredPrompt = null;
  }
});

window.addEventListener('appinstalled', (event) => {
  console.log('PWA installed successfully');
});
