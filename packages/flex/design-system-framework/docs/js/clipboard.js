let sendToClipboard = function(stringToSendToClipboard) {
  const el = document.createElement('textarea');
  el.value = stringToSendToClipboard;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

export { sendToClipboard };
