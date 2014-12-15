---
layout: post
title:  "Potion - A SASS/AngularJS Framework"
date:   2014-12-02 12:30:20
published: true
categories: posts-opensource
tags:
- potion
- frameworks
- opensource
---


<div class="post-img-right img-md">
	<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 73.462 75.958" enable-background="new 0 0 73.462 75.958" xml:space="preserve">
    <g>
      <path fill="none" stroke="#717375" stroke-width="4" stroke-miterlimit="10" d="M7.121,57.755
        c-1.597,4.139-2.523,12.74,8.063,12.737H56.29c0,0,15.716,0.628,9.18-15.037l-1.223-2.34L46.12,25.996V7.774H26.626v17.798
        L9.367,53.178C9.367,53.178,8.193,54.976,7.121,57.755z"/>
      <path fill="#717375" d="M48.047,8.569H25.163c-1.049,0-1.907-0.858-1.907-1.907v0c0-1.049,0.858-1.907,1.907-1.907h22.884
        c1.049,0,1.907,0.858,1.907,1.907v0C49.954,7.711,49.096,8.569,48.047,8.569z"/>
      <path fill="#6ABD45" d="M55.959,65.144l-36.143,0.051c0,0-10.087,0.742-5.049-9.8l14.791-24.399l15.89,4.15l13.014,19.508
        c0,0,4.294,6.557,0.207,9.725C58.668,64.379,57.398,65.144,55.959,65.144z"/>
      <circle fill="#FFFFFF" cx="44.271" cy="53.269" r="3.062"/>
      <circle fill="#FFFFFF" cx="30.815" cy="44.139" r="1.553"/>
      <circle fill="#FFFFFF" cx="29.262" cy="55.443" r="2.174"/>
    </g>
  </svg>
</div>

Finally... FINALLY! Over the last month, I had a small window to wrap up something I have been chipping away at for over a year, my own custom SASS/AngularJS framework. I've been working on it for over a year in my _'free time'_ and I use that word with great emphasis on the word _time_. Between client projects, open source, the day job and most importantly my family... time is really a valuable commodity for me. Potion is a culmination of years building client projects from ground up, repeatedly finding code snippets for small modules and rewriting code over and over. 

I've used other frameworks like [Zurb Foundation](http://foundation.zurb.com "Zurb Foundation"), [Bootstrap](http://getbootstrap.com "Bootstrap") and [PureCSS](http://purecss.io "PureCSS").. however none of them really delivered exactly what I was looking for. Some included a lot of extra fluff that just bloated the code and some simply did not align with my preferred coding standards and best practices. So what's the solution? Well write my own framework of course!

At it's core, Potion is built on top of SASS and makes heavy use of a modular approach to it's architecture. All components can stand alone on their own and all of them can be injected via Angular into any page. This makes for a very light, speedy and customizable framework to use underneath any project or app. 

This framework is certainly still in it's infancy but I plan to curate and grow it over the upcoming months. Check it out on my [ Github ](https://github.com/thomaswicker/potion-css "Github"), or you can install it and try it out for yourself through Bower and command line.

<code>
  bower install potion
</code> 
