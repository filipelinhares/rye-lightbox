#Rye Lightbox

##What?
Rye Lightbox is a plugin to  [Rye.JS](http://www.ryejs.com).

##What's Rye?
Rye is a lightweight javascript library for DOM manipulation and events with support for all modern browsers, including IE9+. It has support for touch events/gestures, an event emitter, isolated DOM events and more.

##How use?

Make download of [Ryejs](http://ryejs.com/dist/rye-0.1.0.min.js) and [Rye Lightbox](http://filipelinhares.github.io/rye-lightbox/src/ryelightbox.min.js), and include in your page;

###Initialization.

You need create your lightbox element.
```
<div class="lighbox">
	//Content here. Text, images...
</div>
```
Inside this element create your close button:

```
<div class="lightbox">
	<span class="close-button">X</span>
</div>
```
*You can put a image like a live [example](http://filipelinhares.github.io/rye-lightbox)*

##Now the javascript time.
First you need call the plugin using `Rye.require()`

`var Lightbox = Rye.require('lightbox');`

Now Lightbox has a method `init` with all configurations you need to use the plugin.

`Lightbox.init('call-button', '#lightbox-element', '.close-button', overlay)`

###call-button
A css selector of your element that activate the lightbox.

###lightbox-element
A  css selector of your lightbox element.

###closed-button
A css selector of your close button.

###overlay
Set true or false, for use or not overlay in lightbox.

##Full code example.

*[index.html]*
```
<div class="lightbox">
	My Awesome lightbox
    <span class="close-button">X</span>
</div>

<button class="active">Show Lightbox</button>
```
---
*[script.js]*
```
var Lightbox = Rye.require('lightbox');

Lightbox.init('.active', '.lightbox', '.close-button', true);
```
##Style

You decide this, all style of your lightbox is your choice, background color, box shadow, close button position.
