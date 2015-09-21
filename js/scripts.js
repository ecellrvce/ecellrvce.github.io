(function($) {
  "use strict";

    // Toggle menu
    $('.burger-menu').click(function() {
      $( ".navigation, nav" ).fadeToggle({
        left: "-270px"
      }, 3000, function() {
          
      });
    });
	
	// Tooltip menu
    $('.burger-menu').tooltip('hide');
    


})(jQuery);