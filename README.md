# jquery.lazyload plugin
Lightweight jQuery plugin for lazy loading images and other content.

## Example

```js
$('img.lazyLoad').lazyload({
	onload: function(el, imgUrl) {
		$(this).addClass('loaded');
	},
	onerror: function(e) {

	}
});
```

## Options

### onload
Event fires when element loads

### onerror
Event fires if element failes to load

### dataAttribute
If element is not an image, select the data-attribute that contains the image-url. Defaults: ```img```.

## Lazyload visible content
You can lazyload images that are currently inview and prevent unwanted bandwidth usage, by combining the jquery.inview plugin.

## Custom loading

```js
var ll = new lazyload({
    // options
});

ll.preload('url');

ll.preloadElement(el);
```

[Visit jquery.inview plugin on GitHub](https://github.com/protonet/jquery.inview)

#### Javascript

```js```
$(document).off('inview.blog.lazyload').on('inview.blog.lazyload', '#main .entry img', function(e, visible) {
	if(visible) {
		$(this).lazyload({
			onload: function(el, imgUrl) {
				$(el).addClass('loaded');
			}
		});
	}
});
```

#### CSS

```css```
#main .entry img {
	opacity: 0;
	-webkit-transition: all 150ms ease-in;
	-moz-transition: all 150ms ease-in;
	-ms-transition: all 150ms ease-in;
	-o-transition: all 150ms ease-in;
	transition: all 150ms ease-in;
}

#main .entry img.loaded {
	opacity: 1;
}
```

## Users

Thanks to all who contribute or use the small plugin :)

- http://www.annijor.no
- http://www.holla.dk

## The MIT License (MIT)

Copyright (c) 2016 Simon Sessingø / Pecee

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
