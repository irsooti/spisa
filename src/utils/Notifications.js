/* eslint-disable no-undef */
export function enableNotification() {
  document.addEventListener('DOMContentLoaded', () => {
    if (!Notification) {
      alert(
        'Desktop notifications not available in your browser. Try Chromium.',
      );
      return;
    }

    if (Notification.permission !== 'granted') Notification.requestPermission();
  });
}

export function notify(title, icon, body) {
  if (Notification.permission !== 'granted') Notification.requestPermission();
  const notification = new Notification(title, {
    icon,
    body,
  });

  notification.onclick = () => {
    window.open('http://stackoverflow.com/a/13328397/1269037');
  };
}
