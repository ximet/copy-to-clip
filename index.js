(function() {
  var copyToClip = function(input) {
    var success = false;

    if (navigator.clipboard) {
      navigator.clipboard.readText()
        .then(text => {
          success = text;
        })
    }
    else if (document.execCommand) {
      var el = document.createElement('input');
      el.value = input;
      el.style.display = 'none';
      document.body.appendChild(el);
      el.select();

      el.selectionStart = 0;
      el.selectionEnd = input.length;

      try {
        success = document.execCommand('copy');
      }
      catch (err) {
        console.error('Not Supported!')
      }

      document.body.removeChild(el);
    }

    return success;
  };

  (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    ? module.exports = copyToClip
    : window.copyToClip = copyToClip;
})();
