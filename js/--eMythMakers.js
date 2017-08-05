$(document).ready(function () {

    // for faculty js
    var headerHeight=$("body").height();
    $('a[href^="#faculty1"],a[href^="#faculty2"],a[href^="#campus"],a[href^="#workshop"],a[href^="#student"],a[href^="#new-teacher"],a[href^="#new-student"]').on('click',function (e) {
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
            $('html,body').animate({
                scrollTop: a[i].offsetTop
            });
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
            $('html,body').animate({
                scrollTop: a[i].offsetTop
            });
        });
    })();

    /*down arrow scolling js*/
    (function() {
        var delay = false;
        $(window).keydown(function(event) {
            /* event.preventDefault(); */
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
            $('html,body').animate({
                scrollTop: a[i].offsetTop
            });
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
    //});


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
        var serviceReverse = $(".service-1 a , .service-2 a , .service-3 a , .service-4 a , .service-5 a , .service-6 a").removeClass("peacefull");
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
/*==================== End services page========================*/

    // for toogle classes
	var toggleMenu = function() {
		$('header').toggleClass('toggle');
		$('.content').toggleClass('push');
		$('.nav-menu').toggleClass('nav-push');
		$('.wraper').toggleClass('toggled');
		$('.button-lines').toggleClass('button-cross');
	};

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


	 //for moving active class in faculty page menu//
        $('#faculty-menu li').click(function(e){$('#faculty-menu li.active').removeClass('active');
        var $this=$(this);if(!$this.hasClass('active')){$this.addClass('active');}e.preventDefault();});
		
	

    /*=========== explore more js =================*/
    // for homepage1 explore-more js
    $("#homepage1 .FES-button").click(function(){
        $("#homepage1 .info h2").hide("slow");
        $(this).hide();
        $("#homepage1 .info p").show("slow");
        $("#homepage1 h1").show("slow");
    });

    $("#homepage1 h1").click(function(){
        $("#homepage1 .info h2").show("slow");
        $("#homepage1 .FES-button").show();
        $("#homepage1 .info p").hide();
        $(this).hide("slow");
    });
    // for homepage2 explore-more js
    $("#homepage2 .FES-button").click(function(){
        $("#homepage2 .info h2").hide("slow");
        $(this).hide();
        $("#homepage2 .info p").show("slow");
        $("#homepage2 h1").show("slow");
    });

    $("#homepage2 h1").click(function(){
        $("#homepage2 .info h2").show("slow");
        $("#homepage2 .FES-button").show();
        $("#homepage2 .info p").hide();
        $(this).hide("slow");
    });
    // for homepage3 explore-more js
    $("#homepage3 .FES-button").click(function(){
        $("#homepage3 .info h2").hide("slow");
        $(this).hide();
        $("#homepage3 .info p").show("slow");
        $("#homepage3 h1").show("slow");
    });

    $("#homepage3 h1").click(function(){
        $("#homepage3 .info h2").show("slow");
        $("#homepage3 .FES-button").show();
        $("#homepage3 .info p").hide();
        $(this).hide("slow");
    });
    // for homepage4 explore-more js
    $("#homepage4 .FES-button").click(function(){
        $("#homepage4 .info h2").hide("slow");
        $(this).hide();
        $("#homepage4 .info p").show("slow");
        $("#homepage4 h1").show("slow");
    });

    $("#homepage4 h1").click(function(){
        $("#homepage4 .info h2").show("slow");
        $("#homepage4 .FES-button").show();
        $("#homepage4 .info p").hide();
        $(this).hide("slow");
    });

    // for about1 explore-more js
    $("#about1 .FES-button").click(function(){
        $("#about1 .info h2").hide("slow");
        $(this).hide();
        $("#about1 .info p").show("slow");
        $("#about1 h1").show("slow");
    });

    $("#about1 h1").click(function(){
        $("#about1 .info h2").show("slow");
        $("#about1 .FES-button").show();
        $("#about1 .info p").hide();
        $(this).hide("slow");
    });
    // for about2 explore-more js
    $("#about2 .FES-button").click(function(){
        $("#about2 .info h2").hide("slow");
        $(this).hide();
        $("#about2 .info p").show("slow");
        $("#about2 h1").show("slow");
    });

    $("#about2 h1").click(function(){
        $("#about2 .info h2").show("slow");
        $("#about2 .FES-button").show();
        $("#about2 .info p").hide();
        $(this).hide("slow");
    });

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

		$(".div-arrow-2").click(function() {
			jQuery('html, body').animate({scrollTop: 0}, 1200);
			return false;
		});

		// notification marquee js

		$('.marquee').marquee({
			pauseOnHover: true,
			duration: 20000
		});

    /**
     * This part handles the highlighting functionality.
     * We use the scroll functionality again, some array creation and
     * manipulation, class adding and class removing, and conditional testing
     */
    var aChildren = $("#faculty-menu li").children(); // find the a children of the list items
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
                $("#faculty-menu ul li a[href='" + theID + "']").addClass("nav-active");
            } else {
                $("#faculty-menu ul li  a[href='" + theID + "']").removeClass("nav-active");
            }
        }

        if(windowPos + windowHeight == docHeight) {
            if (!$("#faculty-menu ul li:last-child a").hasClass("nav-active")) {
                var navActiveCurrent = $(".nav-active").attr("href");
                $("#faculty-menu ul li a[href='" + navActiveCurrent + "']").removeClass("nav-active");
                $("#faculty-menu ul li:last-child a").addClass("nav-active");
            }
        }
});