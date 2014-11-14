(function() {

    function vidSize() {
    	var sliderHeight = $('#top-slider').height(),
    		vidHeight = $('#bgvid').height();
    	
    	if (sliderHeight != vidHeight) { 
    		$('#top-slider').height(vidHeight) 
    	};
    };

    setInterval(function(){vidSize()}, 1);

})();
