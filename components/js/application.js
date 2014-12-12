$(document).ready(function() {

  // jquery controling width of resume skills bars
  $('.adobe').css('width', '100%');
  $('.html').css('width', '100%');
  $('.haml').css('width', '85%');
  $('.css').css('width', '100%');
  $('.sass').css('width', '95%');
  $('.jquery').css('width', '70%');
  $('.javascript').css('width', '70%');
  $('.nodejs').css('width', '40%');
  $('.wordpress').css('width', '85%');
  $('.ui').css('width', '100%');
  $('.ux').css('width', '95%');
  $('.rwd').css('width', '85%');
  $('.mobile').css('width', '85%');
  $('.rapidproto').css('width', '95%');
  $('.commandline').css('width', '65%');
  $('.git').css('width', '85%');
  $('.zurb').css('width', '100%');
  $('.rails').css('width', '40%');
  $('.php').css('width', '50%');
  $('.angular').css('width', '60%');

  // styling nav header bottom borders per window.location
  var navHeader = $(".nav-header");

    if(window.location.href.indexOf("about") > -1) {
       $("#aboutBTN").addClass('current');
       navHeader.css("border-bottom-color", "#A06EAF");
    } else if(window.location.href.indexOf("portfolio") > -1) {
       $("#portfolioBTN").addClass('current');
       navHeader.css("border-bottom-color", "#85B95E");
    } else if(window.location.href.indexOf("photography") > -1) {
       $("#photographyBTN").addClass('current');
       navHeader.css("border-bottom-color", "#AA1F23");
    } else if(window.location.href.indexOf("resume") > -1) {
       $("#resumeBTN").addClass('current');
       navHeader.css("border-bottom-color", "#FDBE12");
    } else if(window.location.href.indexOf("links") > -1) {
       $("#linksBTN").addClass('current');
       navHeader.css("border-bottom-color", "#40b89f");
    } else if(window.location.href.indexOf("contact") > -1) {
       $("#contactBTN").addClass('current');
       navHeader.css("border-bottom-color", "#F1603F");
    } else {
       $("#homeBTN").addClass('current');
    }

    //stickynav
    var stickyNavTop = $('.main-header').offset().top;  
  
    var stickyNav = function(){  
      var scrollTop = $(window).scrollTop();  
             
      if (scrollTop > stickyNavTop) {   
          $('.main-header').addClass('sticky');  
      } else {  
          $('.main-header').removeClass('sticky');   
      }  
    };  
      
    stickyNav();  
      
    $(window).scroll(function() {  
        stickyNav();  
    });  
});
