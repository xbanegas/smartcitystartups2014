(function() {

	var i=0,
		header = $('header'),
		video = $('#bgvid'),
		slider = $('#top-slider');

    function vidSize() {
    	console.log('launched sizer ' + i);
    	var sliderHeight = slider.height(),
    		vidHeight = video.height(),
    		windowHeight = $(window).height(),
    		windowWidth = $(window).width(),
    		headerHeight = header.height();
    	
    	if (sliderHeight != vidHeight && windowWidth < 1300) {
    		console.log('first if triggered');
    		slider.height(windowHeight - headerHeight);
    		sliderHeight = slider.height();
    		$('#bgvid').height(sliderHeight);
    		$('.main-slider').height(slider.height());
    	} else if (sliderHeight != vidHeight && windowWidth >= 1300) {
    		console.log('second if triggered');
    		slider.height(windowHeight - headerHeight);
    		$('#bgvid').width('100%');
    		$('.main-slider').height(slider.height());
    	}

    	i++;
    };

    var sizeTime = setInterval(function(){ 
    	vidSize();
    	if (i>=10){ clearInterval( sizeTime ); }
    }, 1);

    $(window).resize(function(){vidSize();});

})();
