module.exports = function(input) {
  	let success = false;

  	if (document.execCommand) {
        const item = document.createElement('input');

    	  item.value = input;
    	  item.setAttribute('readonly', '');
        item.style.position = 'absolute';
        item.style.left = '-1000px';
        item.style.fontSize = '14px';
    	  document.body.appendChild(item);
    	  item.select();

    	  try {
    	      success = document.execCommand('copy');
    	  }
        catch (err) {
            console.log('Not Supported in your browser!')
        }

    	  document.body.removeChild(item);
  	}

  	return success;
};
