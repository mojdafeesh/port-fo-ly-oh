//add smoothscroll
// on animation page fix footer to bottom
// show active tab
// float menu with waypoints.js

$(function () {
	
	var filterList = {
	
		init: function () {
		
			// MixItUp plugin
			// http://mixitup.io
			$('#portfoliolist').mixitup({
				targetSelector: '.portfolio',
				filterSelector: '.filter',
				effects: ['fade'],
				easing: 'snap',
				// call the hover effect
				onMixEnd: filterList.hoverEffect()
			});				
		
		},
		
		hoverEffect: function () {
		
			// Simple parallax effect
			$('#portfoliolist .portfolio').hover(
				function () {
					$(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
					$(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');				
				},
				function () {
					$(this).find('.label').stop().animate({bottom: -60}, 200, 'easeInQuad');
					$(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');								
				}		
			);				
		
		}

	};
	
	// Run the show!
	filterList.init();
    
    //waypoint offset
    var waypoint = new Waypoint({
      element: document.getElementById('main-container'),
      handler: function(direction) {
          
      },
      offset: 50 
    })
    
    
    //Nav Active
    $('nav li a').click(function() {
        $('nav li a').removeClass('active');
        $(this).addClass('active');
    });
	
});		


 
        
