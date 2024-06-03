// listen to push events
self.addEventListener('push', function(event) {
  // transform stringified payload to object
  const data = JSON.parse(event.data.text());
  console.log('Push received...', data);

  //show notification on the user's device
  event.waitUntil(self.registration.showNotification(data.notification.title, {
    body: data.notification.body,
    icon: '/icon.png',
    data: data.notification.data,
  }))
});

self.addEventListener('notificationclick', function(event) {
  // check this console log in service-worker console in the browser
  console.log('Notification click Received.', event);

  // close the notification on click
  event.notification.close();

  // open the link in the notification
  event.waitUntil(
    clients.openWindow(event.notification.data.link)
  );
});