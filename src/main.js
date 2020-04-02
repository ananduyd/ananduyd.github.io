
/** Main.js */

$(window).load(function(){
         
    setTimeout(function(){
	               
	    $('.loading').velocity({
            opacity : 0.01,translateY: "-80px"}, {duration: 450,
	    	complete: function(){
                $('#background').velocity("fadeOut",{duration: 450}
            )}
	    })
          
    },800)
	
})
	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'src/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

$(document).ready(function() {

    //COUNTDOWN
	$(".countdown").countdown("2020/4/5", function(event) {
        $(this).text(event.strftime('%D days %Hh %Mm %Ss'));
    });

    $('.start-stop i').on('click', function() { 
        $('.start-stop i').removeClass('i-opacity');
        $(this).addClass('i-opacity');
    });

    //ISOTOPE (GRID)
	var $isotope1 = $('#mosaic').imagesLoaded( function() {
		var $grid = $('#mosaic').isotope({
    		packery: {
  				columnWidth:".mosaic-sizer",
  				rowHeight:".mosaic-sizer",
  				gutter:".gutter-sizer"
			},
      		layoutMode: 'fitRows',
     		  itemSelector:".mosaic-item",
      		percentPosition: true
    	});
		// bind filter button click
		$('.filters-button-group').on( 'click', 'button', function() {
		    var filterValue = $(this).attr('data-filter');
		  	$grid.isotope({ filter: filterValue });
		});
	});
	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
	    var $buttonGroup = $( buttonGroup );
	    $buttonGroup.on( 'click', 'button', function() {
	      $buttonGroup.find('.is-checked').removeClass('is-checked');
	      $( this ).addClass('is-checked');
	    });
	});

    //Check Mobs
    if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
       $("#main-content").addClass('nomobile');
    }

    //MORPH BUTTON
    (function() {
            var docElem = window.document.documentElement, didScroll, scrollPosition;

            // trick to prevent scrolling when opening/closing button
            function noScrollFn() {
                window.scrollTo( scrollPosition ? scrollPosition.x : 0, scrollPosition ? scrollPosition.y : 0 );
            }

            function noScroll() {
                window.removeEventListener( 'scroll', scrollHandler );
                window.addEventListener( 'scroll', noScrollFn );
            }

            function scrollFn() {
                window.addEventListener( 'scroll', scrollHandler );
            }

            function canScroll() {
                window.removeEventListener( 'scroll', noScrollFn );
                scrollFn();
            }

            function scrollHandler() {
                if( !didScroll ) {
                    didScroll = true;
                    setTimeout( function() { scrollPage(); }, 60 );
                }
            };

            function scrollPage() {
                scrollPosition = { x : window.pageXOffset || docElem.scrollLeft, y : window.pageYOffset || docElem.scrollTop };
                didScroll = false;
            };

            scrollFn();

            [].slice.call( document.querySelectorAll( '.morph-button' ) ).forEach( function( bttn ) {
                new UIMorphingButton( bttn, {
                    closeEl : '.icon-c',
                    onBeforeOpen : function() {
                        // don't allow to scroll
                        noScroll();
                    },
                    onAfterOpen : function() {
                        // can scroll again
                        canScroll();
                    },
                    onBeforeClose : function() {
                        // don't allow to scroll
                        noScroll();
                    },
                    onAfterClose : function() {
                        // can scroll again
                        canScroll();
                    }
                } );
            } );
    
    })();

    //OPEN CONTAINER
    (function() {
            var container = document.getElementById( 'main-content' ),
                trigger = container.querySelector( 'button.trigger' );

            function toggleContent() {
                if( classie.has( container, 'container--open' ) ) {
                    classie.remove( container, 'container--open' );
                    classie.remove( trigger, 'trigger--active' );
                    window.addEventListener( 'scroll', noscroll );
                }
                else {
                    classie.add( container, 'container--open' );
                    classie.add( trigger, 'trigger--active' );
                    window.removeEventListener( 'scroll', noscroll );
                }
            }

            function noscroll() {
            window.scrollTo( 0, 0 );
            }

            // reset scrolling position
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            // disable scrolling
            window.addEventListener( 'scroll', noscroll );

            trigger.addEventListener( 'click', toggleContent );
                
    })();

    
});