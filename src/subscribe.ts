export const subscribe = async () => {

  if ('Notification' in window && navigator.serviceWorker) {
    Notification.requestPermission().then(permission => {
      console.log('Notification permission:', permission);
      if (permission === 'granted') {
        // User accepted the notification request
      }
    });
  }
  let sw = await navigator.serviceWorker.ready;
  console.log('Service Worker is ready', sw);
  console.log('Service Worker pushManager', sw.pushManager);
  
  let push = await sw.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: 'BCZ_db90I1N02Y99Hb3XSvj1GhWIxxDGAkyqzGTZWJLjiATWKQdns74otZFTfCPEimoHNxCgoCpvh5Tw5klQ2UQ'
  });
  return (JSON.stringify(push));
}