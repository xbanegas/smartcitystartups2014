(function() {

	var i=0;

    function vidSize() {
    	// console.log('launched sizer ' + i);
    	var sliderHeight = $('#top-slider').height(),
    		vidHeight = $('#bgvid').height();
    	
    	if (sliderHeight != vidHeight) { 
    		$('#top-slider').height(vidHeight);
    	};

    	i++;
    };

    var sizeTime = setInterval(function(){ 
    	vidSize();
    	if (i>=10){ clearInterval( sizeTime ); }
    }, 1);

    $(window).resize(function(){vidSize();});

})();
