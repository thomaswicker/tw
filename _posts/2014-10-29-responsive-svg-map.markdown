---
layout: post
title:  "Playing with Responsive SVG for a map of the US"
date:   2014-10-29 15:22:40
published: true
categories: svg responsive sass codepen
tags:
- svg
- responsive
- sass
- codepen
---

###### My mission, if I chose to accept it...
The task was to covert an old Flash map of the US into responsive SVG. I accepted the challenge... (well I had to because it's what they pay me for but that's beside the point). The Flash map was built in the early 2000's and was used to display a list of Client X's school's by state. It 700px fixed width and for obvious reasons.. didn't work on mobile. It was also a complete pain to update as the data file was based on XML and was poorly architected.  

<p class="codepen-demo" data-height="725" data-theme-id="3524" data-slug-hash="cibur" data-default-tab="result" data-user="thomasjwicker" class='codepen'>See the Pen <a href='http://codepen.io/thomasjwicker/pen/cibur/'>Responsive SVG & SASS Map of the US</a> by Thomas Wicker (<a href='http://codepen.io/thomasjwicker'>@thomasjwicker</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>
  
<p class="margin top lg">Quite honestly I haven't played with SVG all that much. Most of my clients or contracts tend to be for large corporations or enterprise size businesses. Using all the latest and greatest tools with said clients generally isn't an option. However with this project the minimum browser support was generously set for IE9 so I was able to dip my toes in. I've used SVG for some simple image or icon replacement on various sites, but that's pretty much the extent of it. I certainly had not played much with responsive SVG. I started off with firing up Illustrator and cranking out indivdual SVGs for each state in anticipation of absolutely positioning each state on a canvas and stitching them all together.</p>

Knowing that one of SVGs strong suits is responsiveness, I thought this would just be an afterthought... I was wrong. Upon sizing the window up and down, the states would respond correctly but it would create a gap between them as I got to smaller sizes. Setting the top, right, bottom left styles to percentage didn't work. I tried a couple of methods using jQuery to calculate the size of each SVG and keep them stitched together when sizing, that didn't work. After hours of reading through blog posts and Stack Overflow, nothing was solving my problem. I decided to export the whole US map as one SVG and try to attack it from that direction, that worked!


