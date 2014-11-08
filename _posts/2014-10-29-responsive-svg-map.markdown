---
layout: post
title:  "Playing with Responsive SVG"
date:   2014-10-29 15:22:40
published: true
categories: svg
tags:
- svg
- responsive
- sass
- codepen
---

###### My mission, if I choose to accept it...
The task was to covert an old Flash map of the US into responsive SVG. I accepted the challenge... (well I had to because it's what they pay me for... but that's beside the point). The Flash map in question was built in the early 2000's. It was 700px fixed width and for obvious reasons.. didn't work on mobile. The guts of the map were also a complete pain to update as the data file backing the UI was based on XML and poorly architected at that.  

Quite honestly I haven't played with SVG all that much. Most of my clients or contracts tend to be for large corporations or enterprise size businesses. Using all the latest and greatest tools with said clients generally isn't an option. However with this project, the minimum browser support was generously set for IE9. After a little trial an error, I came up with the below solution. 

[Click here for the source code here on my Github... ](https://github.com/thomaswicker/jMap/ "Github LInk")

<p class="codepen-demo" data-theme-id="3524" data-slug-hash="cibur" data-default-tab="result" data-user="thomasjwicker" class='codepen'>See the Pen <a href='http://codepen.io/thomasjwicker/pen/cibur/'>Responsive SVG & SASS Map of the US</a> by Thomas Wicker (<a href='http://codepen.io/thomasjwicker'>@thomasjwicker</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

