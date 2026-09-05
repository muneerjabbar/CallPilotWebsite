(function () {
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

  if (playBtn) {
    playBtn.href = PLAY_STORE;
  }

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

  statusEl.textContent =
    'CallPilot is available on Google Play. iOS is coming soon — stay tuned!';
  playBtn.classList.remove('hidden');
})();
