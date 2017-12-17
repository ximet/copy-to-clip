# copy-to-clip
[![Build Status](https://travis-ci.org/ximet/copyToClipboard.svg?branch=master)](https://travis-ci.org/ximet/copyToClipboard)
[![npm version](https://badge.fury.io/js/copy-to-clip.svg)](https://www.npmjs.com/package/copy-to-clip) 

Copy text to the clipboard

## Comparison

- This module: **0,4 kB** in new version!
- [`clipboard.js`](https://github.com/zenorocha/clipboard.js): 3.4 kB
- [`copy-text-to-clipboard`](https://github.com/sindresorhus/copy-text-to-clipboard): 0.6 kB, but not supported in browser usages


## Simple usage

```js
button.addEventListener('click', () => {
	copy('Copy smth...');
});
```

## Usage in browser

```html
<script src="./index.js"></script>
<script>
	button.addEventListener('click', () => {
		copyToClip(getUnicorns(i));
	});
</script>
```

## License

MIT © [Dmitry Bardt](https://github.com/ximet)
