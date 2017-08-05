$(document).ready(function () {
	

    // for smooth navigation on click
    var headerHeight=$("body").height();
    $('a[href^="#about1"],a[href^="#about2"],a[href^="#about3"],a[href^="#rules1"],a[href^="#rules2"],a[href^="#rules3"],a[href^="#pricing1"],a[href^="#pricing2"],a[href^="#pricing3"],a[href^="#counseling-service"],a[href^="#senior-service"],a[href^="#service1"],a[href^="#service2"],a[href^="#service3"],a[href^="#faculty1"], a[href^="#faculty2"],a[href^="#campus"],a[href^="#workshop"],a[href^="#student"],a[href^="#new-teacher"],a[href^="#new-student"]').on('click',function (e) {
        e.preventDefault();
        var target=this.hash;
        var $target=$(target);
        $('html, body').stop().animate({'scrollTop': $target.offset().top}, 600, 'swing', function(){window.location.hash=target;});
    });

    // for arrow-scrolling function
    (function() {
        var delay = false;

        $('.arrow').on('click', function(event) {
            event.preventDefault();
            if(delay) return;

            delay = true;
            setTimeout(function(){delay = false},1000)

            var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

            var a= document.getElementsByClassName('content');
            if(wd < 0) {
                for(var i = 0 ; i < a.length ; i++) {
                    var t = a[i].getClientRects()[0].top;
                    if(t >= 40) break;
                }
            }
            else {
                for(var i = a.length-1 ; i >= 0 ; i--) {
                    var t = a[i].getClientRects()[0].top;
                    if(t < -20) break;
                }
            }
            /* $('html,body').animate({
                scrollTop: a[i].offsetTop
            }); */
			$('html, body').animate({
                scrollTop: $( a[i] ).offset().top
            }, 1200);
        });
    })();

    // for mouse scrolling js
    (function() {
        var delay = false;
        $(document).on('mousewheel DOMMouseScroll', function(event) {
            event.preventDefault();
            if(delay) return;

            delay = true;
            setTimeout(function(){delay = false},1000)

            var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

            var a= document.getElementsByClassName('content');
            if(wd < 0) {
                for(var i = 0 ; i < a.length ; i++) {
                    var t = a[i].getClientRects()[0].top;
                    if(t >= 40) break;
                }
            }
            else {
                for(var i = a.length-1 ; i >= 0 ; i--) {
                    var t = a[i].getClientRects()[0].top;
                    if(t < -20) break;
                }
            }
            //$('html, body').clearQueue().animate({scrollTop: a[i].offset().top }, 1000);
            /* $('html,body').animate({
                scrollTop: a[i].offsetTop
            }); */
			$('html, body').animate({
                scrollTop: $( a[i] ).offset().top
            }, 1200);
        });
    })();

    /*down arrow scolling js*/
    (function() {
        var delay = false;
        $(window).keydown(function(event) {
            //event.preventDefault();
            if(delay) return;

            delay = true;
            setTimeout(function(){delay = false},1000)

            var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

            var a= document.getElementsByClassName('content');
            if (event.keyCode == 40) {
                for(var i = 0 ; i < a.length ; i++) {
                    var t = a[i].getClientRects()[0].top;
                    if(t >= 40) break;
                }
            }
            else if (event.keyCode == 38) {
                for(var i = a.length-1 ; i >= 0 ; i--) {
                    var t = a[i].getClientRects()[0].top;
                    if(t < -20) break;
                }
            }
            //$('html, body').clearQueue().animate({scrollTop: a[i].offset().top }, 1000);
            /* $('html,body').animate({
                scrollTop: a[i].offsetTop
            }); */
			$('html, body').animate({
                scrollTop: $( a[i] ).offset().top
            }, 1200);
        });
    })();

    //$(window).keydown(function(e) {
    //    e.preventDefault(); //prevent default arrow key behavior
    //
    //    var targetElement;
    //    //down
    //    if (e.keyCode == 40) {
    //        $targetElement =next('.content');
    //    }
    //    //up
    //    else if (e.keyCode == 38) {
    //        $targetElement =prev('.content');
    //    }
    //    //if (!$targetElement.length) {return;}
    //    //$('.active').removeClass('active');
    //    //$targetElement.addClass('active');
    //
    //    //scroll element into view
    //    $('html, body').clearQueue().animate({scrollTop: $targetElement.offset().top }, 1000);
    
// notification marquee js

		
	});


/*========================= Start faculty page js =============================*/
    //executive hover active js
    $(document).ready(function(){
        $(".executive1 a").addClass("peace");
    });
    $(".executive1").hover(function(){
        $(".executive2 a").removeClass("peace");
        $(".executive1 a").addClass("peace");
    });
    $(".executive2").hover(function(){
        $(".executive1 a").removeClass("peace");
        $(".executive2 a").addClass("peace");
    });

    //faculty member hover active js
    $(document).ready(function(){
        $(".faculty-member-3 a").addClass("peacefull");
    });

    $(".faculty-member-1").hover(function(){
        $(".faculty-member-2 a , .faculty-member-3 a,.faculty-member-4 a,.faculty-member-5 a,.faculty-member-6 a").removeClass("peacefull");
        $(".faculty-member-1 a").addClass("peacefull");
    });
    $(".faculty-member-2").hover(function(){
        $(".faculty-member-1 a , .faculty-member-3 a,.faculty-member-4 a,.faculty-member-5 a,.faculty-member-6 a").removeClass("peacefull");
        $(".faculty-member-2 a").addClass("peacefull");
    });
    $(".faculty-member-3").hover(function(){
        $(".faculty-member-1 a , .faculty-member-2 a,.faculty-member-4 a,.faculty-member-5 a,.faculty-member-6 a").removeClass("peacefull");
        $(".faculty-member-3 a").addClass("peacefull");
    });
    $(".faculty-member-4").hover(function(){
        $(".faculty-member-1 a , .faculty-member-2 a,.faculty-member-3 a,.faculty-member-5 a,.faculty-member-6 a").removeClass("peacefull");
        $(".faculty-member-4 a").addClass("peacefull");
    });
    $(".faculty-member-5").hover(function(){
        $(".faculty-member-1 a , .faculty-member-2 a,.faculty-member-3 a,.faculty-member-4 a,.faculty-member-6 a").removeClass("peacefull");
        $(".faculty-member-5 a").addClass("peacefull");
    });
    $(".faculty-member-6").hover(function(){
        $(".faculty-member-1 a , .faculty-member-2 a,.faculty-member-3 a,.faculty-member-4 a,.faculty-member-5 a").removeClass("peacefull");
        $(".faculty-member-6 a").addClass("peacefull");
    });

/*==================== End faculty page js========================*/


/*==================== Start gallery page js========================*/
    // campus member hover active js
    $(document).ready(function(){
        $(".campus.member-4 a").addClass("peacefull");
    });

    $(".campus.member-1").hover(function(){
        $(".campus.member-2 a , .campus.member-3 a , .campus.member-4 a , .campus.member-5 a , .campus.member-6 a , .campus.member-7 a , .campus.member-8 a , .campus.member-9 a").removeClass("peacefull");
        $(".campus.member-1 a").addClass("peacefull");
    });
    $(".campus.member-2").hover(function(){
        $(".campus.member-1 a , .campus.member-3 a , .campus.member-4 a , .campus.member-5 a , .campus.member-6 a , .campus.member-7 a , .campus.member-8 a , .campus.member-9 a").removeClass("peacefull");
        $(".campus.member-2 a").addClass("peacefull");
    });
    $(".campus.member-3").hover(function(){
        $(".campus.member-1 a , .campus.member-2 a , .campus.member-4 a , .campus.member-5 a , .campus.member-6 a , .campus.member-7 a , .campus.member-8 a , .campus.member-9 a").removeClass("peacefull");
        $(".campus.member-3 a").addClass("peacefull");
    });
    $(".campus.member-4").hover(function(){
        $(".campus.member-1 a , .campus.member-2 a , .campus.member-3 a , .campus.member-5 a , .campus.member-6 a , .campus.member-7 a , .campus.member-8 a , .campus.member-9 a").removeClass("peacefull");
        $(".campus.member-4 a").addClass("peacefull");
    });
    $(".campus.member-5").hover(function(){
        $(".campus.member-1 a , .campus.member-2 a , .campus.member-3 a , .campus.member-4 a , .campus.member-6 a , .campus.member-7 a , .campus.member-8 a , .campus.member-9 a").removeClass("peacefull");
        $(".campus.member-5 a").addClass("peacefull");
    });
    $(".campus.member-6").hover(function(){
        $(".campus.member-1 a , .campus.member-2 a , .campus.member-3 a , .campus.member-4 a , .campus.member-5 a , .campus.member-7 a , .campus.member-8 a , .campus.member-9 a").removeClass("peacefull");
        $(".campus.member-6 a").addClass("peacefull");
    });
    $(".campus.member-7").hover(function(){
        $(".campus.member-1 a , .campus.member-2 a , .campus.member-3 a , .campus.member-4 a , .campus.member-5 a , .campus.member-6 a , .campus.member-8 a , .campus.member-9 a").removeClass("peacefull");
        $(".campus.member-7 a").addClass("peacefull");
    });
    $(".campus.member-8").hover(function(){
        $(".campus.member-1 a , .campus.member-2 a , .campus.member-3 a , .campus.member-4 a , .campus.member-5 a , .campus.member-6 a , .campus.member-7 a , .campus.member-9 a").removeClass("peacefull");
        $(".campus.member-8 a").addClass("peacefull");
    });
    $(".campus.member-9").hover(function(){
        $(".campus.member-1 a , .campus.member-2 a , .campus.member-3 a , .campus.member-4 a , .campus.member-5 a , .campus.member-6 a , .campus.member-7 a , .campus.member-8 a").removeClass("peacefull");
        $(".campus.member-9 a").addClass("peacefull");
    });


	// workshop member hover active js
    $(document).ready(function(){
        $(".workshop.member-4 a").addClass("peacefull");
    });

    $(".workshop.member-1").hover(function(){
        $(".workshop.member-2 a , .workshop.member-3 a , .workshop.member-4 a , .workshop.member-5 a , .workshop.member-6 a , .workshop.member-7 a , .workshop.member-8 a , .workshop.member-9 a").removeClass("peacefull");
        $(".workshop.member-1 a").addClass("peacefull");
    });
    $(".workshop.member-2").hover(function(){
        $(".workshop.member-1 a , .workshop.member-3 a , .workshop.member-4 a , .workshop.member-5 a , .workshop.member-6 a , .workshop.member-7 a , .workshop.member-8 a , .workshop.member-9 a").removeClass("peacefull");
        $(".workshop.member-2 a").addClass("peacefull");
    });
    $(".workshop.member-3").hover(function(){
        $(".workshop.member-1 a , .workshop.member-2 a , .workshop.member-4 a , .workshop.member-5 a , .workshop.member-6 a , .workshop.member-7 a , .workshop.member-8 a , .workshop.member-9 a").removeClass("peacefull");
        $(".workshop.member-3 a").addClass("peacefull");
    });
    $(".workshop.member-4").hover(function(){
        $(".workshop.member-1 a , .workshop.member-2 a , .workshop.member-3 a , .workshop.member-5 a , .workshop.member-6 a , .workshop.member-7 a , .workshop.member-8 a , .workshop.member-9 a").removeClass("peacefull");
        $(".workshop.member-4 a").addClass("peacefull");
    });
    $(".workshop.member-5").hover(function(){
        $(".workshop.member-1 a , .workshop.member-2 a , .workshop.member-3 a , .workshop.member-4 a , .workshop.member-6 a , .workshop.member-7 a , .workshop.member-8 a , .workshop.member-9 a").removeClass("peacefull");
        $(".workshop.member-5 a").addClass("peacefull");
    });
    $(".workshop.member-6").hover(function(){
        $(".workshop.member-1 a , .workshop.member-2 a , .workshop.member-3 a , .workshop.member-4 a , .workshop.member-5 a , .workshop.member-7 a , .workshop.member-8 a , .workshop.member-9 a").removeClass("peacefull");
        $(".workshop.member-6 a").addClass("peacefull");
    });
    $(".workshop.member-7").hover(function(){
        $(".workshop.member-1 a , .workshop.member-2 a , .workshop.member-3 a , .workshop.member-4 a , .workshop.member-5 a , .workshop.member-6 a , .workshop.member-8 a , .workshop.member-9 a").removeClass("peacefull");
        $(".workshop.member-7 a").addClass("peacefull");
    });
    $(".workshop.member-8").hover(function(){
        $(".workshop.member-1 a , .workshop.member-2 a , .workshop.member-3 a , .workshop.member-4 a , .workshop.member-5 a , .workshop.member-6 a , .workshop.member-7 a , .workshop.member-9 a").removeClass("peacefull");
        $(".workshop.member-8 a").addClass("peacefull");
    });
    $(".workshop.member-9").hover(function(){
        $(".workshop.member-1 a , .workshop.member-2 a , .workshop.member-3 a , .workshop.member-4 a , .workshop.member-5 a , .workshop.member-6 a , .workshop.member-7 a , .workshop.member-8 a").removeClass("peacefull");
        $(".workshop.member-9 a").addClass("peacefull");
    });


	// student member hover active js
    $(document).ready(function(){
        $(".student.member-4 a").addClass("peacefull");
    });

    $(".student.member-1").hover(function(){
        $(".student.member-2 a , .student.member-3 a , .student.member-4 a , .student.member-5 a , .student.member-6 a , .student.member-7 a , .student.member-8 a , .student.member-9 a").removeClass("peacefull");
        $(".student.member-1 a").addClass("peacefull");
    });
    $(".student.member-2").hover(function(){
        $(".student.member-1 a , .student.member-3 a , .student.member-4 a , .student.member-5 a , .student.member-6 a , .student.member-7 a , .student.member-8 a , .student.member-9 a").removeClass("peacefull");
        $(".student.member-2 a").addClass("peacefull");
    });
    $(".student.member-3").hover(function(){
        $(".student.member-1 a , .student.member-2 a , .student.member-4 a , .student.member-5 a , .student.member-6 a , .student.member-7 a , .student.member-8 a , .student.member-9 a").removeClass("peacefull");
        $(".student.member-3 a").addClass("peacefull");
    });
    $(".student.member-4").hover(function(){
        $(".student.member-1 a , .student.member-2 a , .student.member-3 a , .student.member-5 a , .student.member-6 a , .student.member-7 a , .student.member-8 a , .student.member-9 a").removeClass("peacefull");
        $(".student.member-4 a").addClass("peacefull");
    });
    $(".student.member-5").hover(function(){
        $(".student.member-1 a , .student.member-2 a , .student.member-3 a , .student.member-4 a , .student.member-6 a , .student.member-7 a , .student.member-8 a , .student.member-9 a").removeClass("peacefull");
        $(".student.member-5 a").addClass("peacefull");
    });
    $(".student.member-6").hover(function(){
        $(".student.member-1 a , .student.member-2 a , .student.member-3 a , .student.member-4 a , .student.member-5 a , .student.member-7 a , .student.member-8 a , .student.member-9 a").removeClass("peacefull");
        $(".student.member-6 a").addClass("peacefull");
    });
    $(".student.member-7").hover(function(){
        $(".student.member-1 a , .student.member-2 a , .student.member-3 a , .student.member-4 a , .student.member-5 a , .student.member-6 a , .student.member-8 a , .student.member-9 a").removeClass("peacefull");
        $(".student.member-7 a").addClass("peacefull");
    });
    $(".student.member-8").hover(function(){
        $(".student.member-1 a , .student.member-2 a , .student.member-3 a , .student.member-4 a , .student.member-5 a , .student.member-6 a , .student.member-7 a , .student.member-9 a").removeClass("peacefull");
        $(".student.member-8 a").addClass("peacefull");
    });
    $(".student.member-9").hover(function(){
        $(".student.member-1 a , .student.member-2 a , .student.member-3 a , .student.member-4 a , .student.member-5 a , .student.member-6 a , .student.member-7 a , .student.member-8 a").removeClass("peacefull");
        $(".student.member-9 a").addClass("peacefull");
    });


/*==================== End gallery page========================*/
/*==================== Start services page========================*/
    function serviceHover(){
        $(".service-1 a , .service-2 a , .service-3 a , .service-4 a , .service-5 a , .service-6 a").removeClass("peacefull");
    }
    $(".service-3 a").addClass("peacefull");

    $(".service-1").hover(function(){
        serviceHover();
        $(".service-1 a").addClass("peacefull");
    });
    $(".service-2").hover(function(){
        serviceHover();
        $(".service-2 a").addClass("peacefull");
    });
    $(".service-3").hover(function(){
        serviceHover();
        $(".service-3 a").addClass("peacefull");
    });
    $(".service-4").hover(function(){
        serviceHover();
        $(".service-4 a").addClass("peacefull");
    });
    $(".service-5").hover(function(){
        serviceHover();
        $(".service-5 a").addClass("peacefull");
    });
    $(".service-6").hover(function(){
        serviceHover();
        $(".service-6 a").addClass("peacefull");
    });

    /* senior-services page */
    function seniorServiceHover(){
        var serviceReverse = $(".senior-service-1 a , .senior-service-2 a , .senior-service-3 a , .senior-service-4 a").removeClass("peacefull");
    }
    $(".senior-service-3 a").addClass("peacefull");

    $(".senior-service-1").hover(function(){
        seniorServiceHover();
        $(".senior-service-1 a").addClass("peacefull");
    });
    $(".senior-service-2").hover(function(){
        seniorServiceHover();
        $(".senior-service-2 a").addClass("peacefull");
    });
    $(".senior-service-3").hover(function(){
        seniorServiceHover();
        $(".senior-service-3 a").addClass("peacefull");
    });
    $(".senior-service-4").hover(function(){
        seniorServiceHover();
        $(".senior-service-4 a").addClass("peacefull");
    });

    /* counseling-services page */
    function counsellingServiceHover(){
       $(".counseling-service-1 a , .counseling-service-2 a , .counseling-service-3 a , .counseling-service-4 a").removeClass("peacefull");
    }
    $(".counseling-service-3 a").addClass("peacefull");

    $(".counseling-service-1").hover(function(){
        counsellingServiceHover();
        $(".counseling-service-1 a").addClass("peacefull");
    });
    $(".counseling-service-2").hover(function(){
        counsellingServiceHover();
        $(".counseling-service-2 a").addClass("peacefull");
    });
    $(".counseling-service-3").hover(function(){
        counsellingServiceHover();
        $(".counseling-service-3 a").addClass("peacefull");
    });
    $(".counseling-service-4").hover(function(){
        counsellingServiceHover();
        $(".counseling-service-4 a").addClass("peacefull");
    });
/*==================== End services page========================*/

/*==================== Start pricing page========================*/
    /* pricing1 hover effect js */
    function pricing1(){
        $(".pricingOne-1 a , .pricingOne-2 a , .pricingOne-3 a , .pricingOne-4 a, .pricingOne-5 a, .pricingOne-6 a, .pricingOne-7 a, .pricingOne-8 a, .pricingOne-9 a").removeClass("peacefull");
    }
    $(".pricingOne-3 a").addClass("peacefull");

    $(".pricingOne-1").hover(function(){
        pricing1();
        $(".pricingOne-1 a").addClass("peacefull");
    });
    $(".pricingOne-2").hover(function(){
        pricing1();
        $(".pricingOne-2 a").addClass("peacefull");
    });
    $(".pricingOne-3").hover(function(){
        pricing1();
        $(".pricingOne-3 a").addClass("peacefull");
    });
    $(".pricingOne-4").hover(function(){
        pricing1();
        $(".pricingOne-4 a").addClass("peacefull");
    });
    $(".pricingOne-5").hover(function(){
        pricing1();
        $(".pricingOne-5 a").addClass("peacefull");
    });
    $(".pricingOne-6").hover(function(){
        pricing1();
        $(".pricingOne-6 a").addClass("peacefull");
    });
    $(".pricingOne-7").hover(function(){
        pricing1();
        $(".pricingOne-7 a").addClass("peacefull");
    });
    $(".pricingOne-8").hover(function(){
        pricing1();
        $(".pricingOne-8 a").addClass("peacefull");
    });
    $(".pricingOne-9").hover(function(){
        pricing1();
        $(".pricingOne-9 a").addClass("peacefull");
    });

    /* pricing2 hover effect js */
    function pricing2(){
        $(".pricingTwo-1 a , .pricingTwo-2 a , .pricingTwo-3 a , .pricingTwo-4 a").removeClass("peacefull");
    }
    $(".pricingTwo-3 a").addClass("peacefull");

    $(".pricingTwo-1").hover(function(){
        pricing2();
        $(".pricingTwo-1 a").addClass("peacefull");
    });
    $(".pricingTwo-2").hover(function(){
        pricing2();
        $(".pricingTwo-2 a").addClass("peacefull");
    });
    $(".pricingTwo-3").hover(function(){
        pricing2();
        $(".pricingTwo-3 a").addClass("peacefull");
    });
    $(".pricingTwo-4").hover(function(){
        pricing2();
        $(".pricingTwo-4 a").addClass("peacefull");
    });

    /* pricing3 hover effect js */
    function pricing3(){
        $(".pricingThree-1 a , .pricingThree-2 a , .pricingThree-3 a , .pricingThree-4 a").removeClass("peacefull");
    }
    $(".pricingThree-3 a").addClass("peacefull");

    $(".pricingThree-1").hover(function(){
        pricing3();
        $(".pricingThree-1 a").addClass("peacefull");
    });
    $(".pricingThree-2").hover(function(){
        pricing3();
        $(".pricingThree-2 a").addClass("peacefull");
    });
    $(".pricingThree-3").hover(function(){
        pricing3();
        $(".pricingThree-3 a").addClass("peacefull");
    });
    $(".pricingThree-4").hover(function(){
        pricing3();
        $(".pricingThree-4 a").addClass("peacefull");
    });
/*==================== End pricing page========================*/

    // for toogle classes
	var toggleMenu = function() {
		$('header').toggleClass('toggle');
		$('.content').toggleClass('push');
		$('.nav-menu').toggleClass('nav-push');
		$('.wraper').toggleClass('toggled');
		$('.button-lines').toggleClass('button-cross');
	};
	
	//for top explore more button click effect in homepage
    $(".btn-explore-more-top").click(function() {
        $('html, body').animate({
            scrollTop: $('.content2').offset().top
        }, 1200);
        return false;
    });
	//for top explore more button click effect in about page
    $(".btn-explore-more-about").click(function() {
        $('html, body').animate({
            scrollTop: $('.about2').offset().top
        }, 1200);
        return false;
    });

//for top explore more button click effect in contact page
$("#FES-button-contact").click(function() {
    $('html, body').animate({
        scrollTop: $('#contact2').offset().top
    }, 1200);
    return false;
});
	
	//Nav
	$('.button-lines').click(function() {
		toggleMenu();
	});
    // nav li- dropdown yamm-fw
	$('.dropdown.yamm-fw').click(function() {
		$('body').toggleClass('dropdown-overlay');
	});


    // .nav-menu .navbar-brand-text
    $(window).scroll(function () {
        if ($(this).scrollTop() > 120) {
            $('.nav-menu .navbar-brand ').css({
                'top' : '-200px'
            });
        } else {
            $('.nav-menu .navbar-brand ').css({
                'top' : '-15px'
            });
        }
    });

    // .nav-menu .navbar-brand-text
    $(window).scroll(function () {
        if ($(this).scrollTop() > 120) {
            $('.nav-menu .navbar-brand-text').css({
                'opacity' : '1',
                'right' : '35px'
            });
        } else {
            $('.nav-menu .navbar-brand-text').css({
                'opacity' : '0',
                'right' : '-200px'
            });
        }
    });

/*=========== explore more js =================*/

//$("#homepage1 h1").click(function(){
//    $("#homepage1 .info h2").show("slow");
//    $("#homepage1 .FES-button").show();
//    $("#homepage1 .info p").hide();
//    $(this).hide("slow");
//});
// for homepage2 explore-more js
$("#content2 .FES-button").click(function(){
    $("#content2 .info h2").hide();
    $(this).hide();
    $("#content2 .info p").fadeIn(2000);
    $("#content2 h1").fadeIn(2000);
});

$("#content2 h1").click(function(){
    $("#content2 .info h2").fadeIn(2000);
    $("#content2 .FES-button").fadeIn(2000);
    $("#content2 .info p").hide();
    $(this).hide();
});
// for homepage3 explore-more js
$("#content3 .FES-button").click(function(){
    $("#content3 .info h2").hide();
    $(this).hide();
    $("#content3 .info p").fadeIn(2000);
    $("#content3 h1").fadeIn(2000);
});

$("#content3 h1").click(function(){
    $("#content3 .info h2").fadeIn(2000);
    $("#content3 .FES-button").fadeIn(2000);
    $("#content3 .info p").hide();
    $(this).hide();
});
// for homepage4 explore-more js
$("#content4 .FES-button").click(function(){
    $("#content4 .info h2").hide();
    $(this).hide();
    $("#content4 .info p").fadeIn(2000);
    $("#content4 h1").fadeIn(2000);
});

$("#content4 h1").click(function(){
    $("#content4 .info h2").fadeIn(2000);
    $("#content4 .FES-button").fadeIn(2000);
    $("#content4 .info p").hide();
    $(this).hide();
});


// for about2 explore-more js
$("#about2 .FES-button").click(function(){
    $("#about2 .info h2").hide();
    $(this).hide();
    $("#about2 .info p").fadeIn(2000);
    $("#about2 h1").fadeIn(2000);
});

$("#about2 h1").click(function(){
    $("#about2 .info h2").fadeIn(2000);
    $("#about2 .FES-button").fadeIn(2000);
    $("#about2 .info p").hide();
    $(this).hide();
});

// for about3 explore-more js
$("#about3 .FES-button").click(function(){
    $("#about3 .info h2").hide();
    $(this).hide();
    $("#about3 .info p").fadeIn(2000);
    $("#about3 h1").fadeIn(2000);
});

$("#about3 h1").click(function(){
    $("#about3 .info h2").fadeIn(2000);
    $("#about3 .FES-button").fadeIn(2000);
    $("#about3 .info p").hide();
    $(this).hide();
});



//for changing bottom arrow to upper arrow
		$(window).scroll(function() {
			if ($(document).height() <= ($(window).height() + $(window).scrollTop())) {
		//		  $('#div-arrow').replaceWith('<div class="region">'+replaced+'</div>');
				$(".div-arrow").hide().css("transform","rotate(180deg)");
				$(".div-arrow-2").show().css("transform","rotate(180deg)");

			}else{
				$(".div-arrow").show().css("transform","rotate(0deg)");
				$(".div-arrow-2").hide().css("transform","rotate(0deg)");
			}
		});

		$(window).scroll(function() {
			if ($(document).height() <= ($(window).height() + $(window).scrollTop())) {
		//		  $('#div-arrow').replaceWith('<div class="region">'+replaced+'</div>');
				$(".gallery-arrow a").hide();
				$(" .gallery-arrow-2 a").show();
				$(".gallery-arrow").css("z-index","100");
				$(" .gallery-arrow-2").css("z-index","101");

			}else{
				$(".gallery-arrow a").show();
				$(".gallery-arrow-2 a").hide();
				$(".gallery-arrow").css("z-index","101");
				$(".gallery-arrow-2").css("z-index","100");
			}
		});

                $(".div-arrow-2, .gallery-arrow-2 a").click(function() {
                jQuery('html, body').animate({scrollTop: 0}, 1200);
                return false;
            });

/** for moving active class in menu */
var aChildren = $(".yamm li").children(); // find the a children of the list items
var aArray = []; // create the empty aArray
for (var i=0; i < aChildren.length; i++) {
    var aChild = aChildren[i];
    var ahref = $(aChild).attr('href');
    aArray.push(ahref);
} // this for loop fills the aArray with attribute href values

$(window).scroll(function(){
    var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
    var windowHeight = $(window).height(); // get the height of the window
    var docHeight = $(document).height();

    for (var i=0; i < aArray.length; i++) {
        var theID = aArray[i];
        var divPos = $(theID).offset().top; // get the offset of the div from the top of page
        var divHeight = $(theID).height(); // get the height of the div in question
        if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
            $(".yamm ul li a[href='" + theID + "']").addClass("nav-active");
        } else {
            $(".yamm ul li  a[href='" + theID + "']").removeClass("nav-active");
        }
    }

    if(windowPos + windowHeight == docHeight) {
        if (!$(".yamm ul li:last-child a").hasClass("nav-active")) {
            var navActiveCurrent = $(".nav-active").attr("href");
            $(".yamm ul li a[href='" + navActiveCurrent + "']").removeClass("nav-active");
            $(".yamm ul li:last-child a").addClass("nav-active");
        }
    }
});

/*to stop navigation tab on click*/
$(".disabled").click(function (e) {
    e.preventDefault();
    return false;
});
$('.content-left div.disabled > a[data-toggle=tab]').on('click', function(e) {
    //alert('firing');
    e.stopImmediatePropagation();
});

