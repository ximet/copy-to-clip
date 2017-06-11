(function() {
  var copyToClip = function(input) {
    var success = false;

    if (document.execCommand) {
      var item = document.createElement('input');
      item.value = input;
      item.style.display = 'none';
      document.body.appendChild(item);
      item.select();

      try {
        success = document.execCommand('copy');
      }
      catch (err) {
        console.log('Not Supported!')
      }

      document.body.removeChild(item);
    }

    return success;
  };

  (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    ? module.exports = copyToClip
    : window.copyToClip = copyToClip;
})();
