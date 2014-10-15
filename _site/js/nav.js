$(function() {
  var loc = window.location.href;
	switch (loc) {

	case '{{ site.baseurl }}/':
	    $('#homeBTN').addClass('active-page')
	    break;

	case '{{ site.baseurl }}/about/':
	    $('#aboutBTN').addClass('active-page')
	    break;

	case '{{ site.baseurl }}/portfolio/':
	    $('#portfolioBTN').addClass('active-page')
	    break;

	case '{{ site.baseurl }}/photography/':
	    $('#photographyBTN').addClass('active-page')
	    break;

	case '{{ site.baseurl }}/resume/':
	    $('#resumeBTN').addClass('active-page')
	    break;

	case '{{ site.baseurl }}/contact/':
	    $('#contactBTN').addClass('active-page')
	    break;
	}
});