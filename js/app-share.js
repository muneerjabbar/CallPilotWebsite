(function () {
  // Placeholder Play Store listing — update when published
  var PLAY_STORE =
    'https://play.google.com/store/apps/details?id=com.callpilot.callpilot';
  var ua = navigator.userAgent || navigator.vendor || '';
  var isIos =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var isAndroid = /android/i.test(ua);

  var statusEl = document.getElementById('status');
  var iosEl = document.getElementById('ios-soon');
  var playBtn = document.getElementById('play-btn');

  if (isIos) {
    statusEl.classList.add('hidden');
    iosEl.classList.remove('hidden');
    return;
  }

  if (isAndroid) {
    statusEl.textContent = 'Taking you to Google Play…';
    window.location.replace(PLAY_STORE);
    return;
  }

  statusEl.textContent = 'Available now on Android.... iOS is coming soon, Stay Tuned !!!';
  playBtn.classList.remove('hidden');
})();
