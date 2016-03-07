/*! jQuery v1.7.2 jquery.com | jquery.org/license */

$(document).ready(pageReady);
    function pageReady() {

    	$(".hidden").hide();
    	$(".read-less").hide();

        $(".click-target").click(readMore);
        function readMore() {
        	event.preventDefault();
        	$(".click-target").hide();
        	$(".hidden").slideDown();
        	$(".read-less").show();
        }

         $(".read-less").click(readLess);
        function readLess() {
        	event.preventDefault();
        	$(".read-less").hide();
        	$(".hidden").slideUp();
        	$(".click-target").show();
        }
     
    }

