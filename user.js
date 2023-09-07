// ==UserScript==
// @name         Custom Crosschair for fps
// @description  crosschair for fps game to improve game experience
// @version      0.0.1
// @match        https://ev.io/*
// @match        https://krunker.io/*
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', function() {
        try {
            var d = document.createElement('div');
            d.style.cssText = 'width:8px;height:8px;background-color:#f00;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:9999999999999999999999999999999;border-radius:4px';
            document.body.appendChild(d);
        } catch (e) { }

        // Create an img element
const img = document.createElement('img');

// Set the src attribute to your new image URL
img.src = 'https://i.ibb.co/nsRHsgB/33-333306-crosshairs-clipart-crosshair-sticker-png-removebg-preview.png';

// Set the width and height of the image
img.style.width = '150px';
img.style.height = '150px';

// Center the image horizontally and vertically
img.style.position = 'fixed';
img.style.top = '50%';
img.style.left = '50%';
img.style.transform = 'translate(-50%, -50%)';
img.style.zIndex = '999999999';

// Append the image to the body of the document
document.body.appendChild(img);

    });
})();
