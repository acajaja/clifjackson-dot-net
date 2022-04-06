$(document).ready(function(){
    // Handle the Journey link on the home page
    $('#journey_btn').click(function() {
        var $this = this;
        $('div.content').animate({ opacity: 0 }, 1500);
        $('#experience_landing_bg').delay(500).animate({ opacity: 0 }, 1500, function() {
            location.href = $($this).attr('href');
        });
        return false;
    });

    // hide content images initially
    $('#content img').hide();
    $(window).bind('load', function() {
            // on page load, fade in the images
            $('#content img').fadeIn();
    });

    //Full screen BG image for splash
    resizeBG();

    $(window).resize(function(){//Resizes BG on window resize
		resizeBG();
	});
	
	$('.expander').toggle(function(){
		var object = $(this);
		
		object.find('.top').addClass('active');
		object.find('.expanded').slideDown();
	}, function(){
		var object = $(this);
		
		object.find('.top').removeClass('active');
		object.find('.expanded').slideUp();
	});
	// open lightbox based on rel
	$('.open-lightbox').live('click', function(){
		var lightbox = $(this).attr('rel');
		$('#'+lightbox).lightbox_me({
			centered: true
		});
		return false;
	});
	
	if($('.slideshow')){
		$('.slideshow').cycle({ 
	        fx: 'fade', 
	        startingSlide: 1,  // start on the slide that was in the markup 
	        timeout:  0, 
	        speed:    300, 
	        prev:    '.prev', 
	        next:    '.next',
			height:	 'auto',
			fit:	'1',
	    }); 
	}

	// open works box
	$('a.open-works-box').live('click', function(){
		if($(this).next('span').hasClass('active')){
			$(this).next('span').removeClass('active');
		}else{
			$(this).next('span').addClass('active');
		}
		var worksbox = $(this).attr('rel');
		$('.works-box.' + worksbox).slideToggle();
		return false;
	});
	
	// open share popup
	$('a.sharer').toggle(function(){
		$(this).parent().find('.shared').show();
		
		return false;
	}, function(){
		$(this).parent().find('.shared').hide();
		
		return false;
	});
	
	$('a.emailer').live('click', function(){
		$('.shared').hide();
		$('.email').show();
	});
	
	$('a.cancel').live('click', function(){
		$('.shared').show();
		$('.email').hide();
	});
	
	
	//Twitter feed for activity page
	if($('body').attr('id') == 'activity'){
		$.getJSON("http://twitter.com/statuses/user_timeline/mathafmodern.json?callback=?", function(data) {
			$(".latest .column:eq(0) p.text:").html(addLinks(data[0].text));
			$(".latest .column:eq(0) p.date:").html(data[0].created_at);
			$(".latest .column:eq(1) p.text").html(addLinks(data[1].text));
			$(".latest .column:eq(1) p.date").html(data[1].created_at);
		});
	}
	
	$(".submit").live('click', function(e){
			e.preventDefault();
			
			var valid = '';
			var isr = ' is required.';
			var youremail = $("#email_input").val();
			var yourname = $("#name_input").val();
			var recemail = $("#rec_email_input").val();
			var recname = $("#rec_name_input").val();
			var message = $("#message_input").val();
		
			if (!youremail.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
				valid += '\n'+'Your email'+isr;
			}
			if (yourname.length<1) {
				valid += '\n'+'Your name'+isr;
			}
			if (!recemail.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
				valid += '\n'+'Recipients email'+isr;
			}
			if (recname.length<1) {
				valid += '\n'+'Recipients name'+isr;
			}
			if (valid!='') {
				alert(valid);
			}
			else {
				alert('sending');
				
				//Uncomment this to send
				/*$.ajax({
					type: "POST",
					url: mailer.php,
					data: $('#email_form').serialize(),
					cache: false,
					success: function(html){
						//success code goes here
						alert('success');
					}
				});*/		
			}
			return false;
		});
	
		$('.category-box a').hover(function(){
			$(this).next('span').addClass('roll');
		}, function(){
			$(this).next('span').removeClass('roll');
		});
		
		if($('.work-slideshow')){
			$('.work-slideshow').cycle({ 
				fx: 'fade', 
				startingSlide: 1,  // start on the slide that was in the markup 
				timeout:  0, 
				speed:    300, 
				prev:    '.prev', 
				next:    '.next',
				height:	 'auto',
				fit:	'1',
			}); 
		}
	
}); // doc ready


//Add links into twitter feed
function addLinks(tweet){
	return tweet
				.replace(/http:\/\/\S+/g, '<a href="$&" target="_blank">$&</a>')
				.replace(/\s(@)(\w+)/g, '@<a href="http://twitter.com/$2" target="_blank">$2</a>')
				.replace(/(^|\s)@(\w+)/g,'$1<a href="http://twitter.com/$2">@$2</a>');
}

function resizeBG(){
		var wWidth = $(window).width();
		var wHeight = $(window).height();
		var wRatio = wHeight / wWidth;
		var iRatio = 784 / 1216;		

		if (iRatio > wRatio) {
			var nHeight = (wWidth / 1216) * 784;
			var nWidth = wWidth;
		}
		else {
			var nWidth = (wHeight / 784) * 1216;
			var nHeight = wHeight;
		}
			
		nTop = 0 - ((nHeight - wHeight) / 2);
		nLeft = 0 - ((nWidth - wWidth) / 2);

		
		$('.bg').css({
			height: nHeight,
			width: nWidth
		}).css({
			top: 0,
			left: nLeft
		});
}
