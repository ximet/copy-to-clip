'use strict';
module.exports = function(input) {
  	let success = false;

    //check for support (http://caniuse.com/#feat=document-execcommand)
  	if (document.execCommand) {
    		const element = document.createElement('input');

    		element.value = input;
    		element.setAttribute('readonly', '');

    		document.body.appendChild(element);
    		element.select();

    		try {
    			   success = document.execCommand('copy');
    		}
        catch (err) {
            console.log('Not Supported in your browser!')
        }

    		document.body.removeChild(element);
  	}

  	return success;
};
