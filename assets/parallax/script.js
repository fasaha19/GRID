jQuery(function($){
    
    $(window).on('load', function() {
        // PARALLAX FUNCTIN CALL
        $(".parallax-object").paralmax();
    });
  
});
/* ========================================================================= */
/* http://www.jksakura.com/paralmax */
/**
 * Paralmax is a JQuery responsive parallax plugin for multiple uses, including full size section background image, page parallax elements and more based on different use cases. With many built-in settings, users can set parallax speed, resize background image to full size or not, disable it below specific screen size, offset of the parallax element from it's center. The advantage of Paralmax is that it only adds parallax effet to elements, but not changes their style/looking, so users can easily customise/style any elements with pure HTML or CSS (position, size, image, background, content, etc).
 * @author Jake Zhong
----------------------  
-------------| |   / /
     | |     | |  / /
     | |     | | / /
     | |     | |/ /
     | |     | |\ \
     | |     | | \ \
     | |     | |  \ \
-----  |     | |   \ \
-----------------------
**/
/* ========================================================================= */	
jQuery.fn.extend({paralmax:function(){var t;return $(window).width(),t=$(window).height(),$(this).each(function(){function e(){s()?$(i).data("speed")||0===$(i).data("speed")?d.speed=$(i).data("speed"):d.speed=.5:d.speed=0}function a(){var e,a,r=i;!0===d.resizable&&($(window).width()>d.breakpoint?(e=parseInt($(r).parent().outerHeight()),a=parseInt($(r).parent().offset().top)>parseInt(t)?parseInt(t*d.speed):parseInt($(r).parent().offset().top)*d.speed,$(r).height(e+a)):$(r).height(e))}function r(){var t=i,e=$("html").scrollTop(),a=$("body").scrollTop(),r=(e>a?e:a)-d.start,n=parseInt(r*d.speed)+d.offset;$(t).css({webkitTransform:"translate3d(0, "+n+"px, 0)",MozTransform:"translate3d(0, "+n+"px, 0)",msTransform:"translateY("+n+"px)",OTransform:"translate3d(0, "+n+"px, 0)",transform:"translate3d(0, "+n+"px, 0)"})}function n(){if(!s()){var t=i;$(t).css({webkitTransform:"translate3d(0, 0, 0)",MozTransform:"translate3d(0, 0, 0)",msTransform:"translateY(0)",OTransform:"translate3d(0, 0, 0)",transform:"translate3d(0, 0, 0)"})}}function s(){return $(window).width()>d.breakpoint}var o,i=this,d={start:(o=$(i).offset()).top,stop:o.top+$(i).outerHeight(),speed:0,resizable:!!$(i).data("resize")&&$(i).data("resize"),breakpoint:$(i).data("breakpoint")?$(i).data("breakpoint"):0,offset:$(i).data("offset")?$(i).data("offset")*$(i).outerHeight():0};e(),a(),n(),s()&&r(),$(window).bind("scroll",function(){s()&&r()}),$(window).bind("resize",function(){e(),a(),n()})})}});