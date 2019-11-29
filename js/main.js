// Meta Information
var title = "{{title}}";
var description = "{{description}}";
var keywords = "{{keywords}}";
var author = "{{author}}";

// About you
var name = "{{name}}";
var positioncount = 0;
var position_text = "{{position}}";
var position = [];
var aboutme = "{{aboutme}}";
var address = "{{address}}";

// Portfolio
var portfolio_count = 0;
var portfolio_title = [];

// Social Media
var social_counts = 0;
var social = [];
var social_links = [];

$(window).bind('beforeunload', function(){
  return 'Are you sure you want to leave?';
});

$(document).ready(function() {
	

	$('.form-control').keyup(function() {
		var a = $('#view').html();
		$('textarea#indexdothtml').val($('textarea.front').val() + a + $('textarea.end').val());
	});
	var txt = $("textarea[name=works]");
	txt.val("Chatbox\nDRRMO\nMini-Facebook");
	
	//$('textarea[name=works]').val("Chatbox");

	$('#view2 section.you').after(add2());
	$('#view2 #displays-portfolio').append(addWork2("Chatbox"));
	$('#view2 #displays-portfolio').append(addWork2("DRRMO"));
	$('#view2 #displays-portfolio').append(addWork2("Mini-Facebook"));

	$('#view section.you').after(add1());
	$('#view #displays-portfolio').append(addWork("Chatbox"));
	$('#view #displays-portfolio').append(addWork("DRRMO"));
	$('#view #displays-portfolio').append(addWork("Mini-Facebook"));

	var a = $('#view').html();
	$('textarea#indexdothtml').val($('textarea.front').val() + a + $('textarea.end').val());
	
	/**
	timeoutPortfolio();
	**/

	// This website! hehe~
	$('.slide .panel-body').hide();
	$('.two').hide();
	$('.three').hide();

	$('a.down').click(function() {
		$('.one').fadeIn('slow', function() {
			$(this).remove();
		});
		$('.two').delay(200).fadeIn().delay(1000).fadeIn('slow', function() {
			$(this).remove();
		});
		$('.three').delay(1500).fadeIn();
	});

	$('.panel-heading a').click(function() {
		$(this).parent('.panel-heading').siblings('.panel-body').slideToggle();

		if($(this).find('i.fas').attr('class') == "fas fa-plus-square") {
			$(this).find('i.fas').attr("class", "fas fa-minus-square");
		} else if($(this).find('i.fas').attr('class') == "fas fa-minus-square") {
			$(this).find('i.fas').attr("class", "fas fa-plus-square");
		}
	});
	$('input.contacts').keyup(function() {
		if($.trim($(this).val()) == '') {
			if($(this).length) {
				$('section.contactus').hide();
			}
		} else {
			$('section.contactus').show();
		}
	});

	$('textarea[name=works]').keyup(function() {
		// Remove all value
		portfolio_title = [];
		portfolio_count = 0;

		var lines = $(this).val().split(/\n/);
		for (var i = 0; i < lines.length; i++) {
		  	// only push this line if it contains a non whitespace character.
		  	if (/\S/.test(lines[i])) {
		  		portfolio_title.push($.trim(lines[i]));
		  	}
		  	portfolio_count++;
		}
		if($.trim($(this).val()) == '') {
			if($(this).length) {
				$('section.portfolio').remove();
			}
		} else {
			$('section.portfolio').remove();

			$('#view section.you').after(add1());
			$('#view2 section.you').after(add2());

			$('.putPortfolio').fadeIn('slow', function() {
				$(this).remove();
			});
			$('#view #displays-portfolio').html("");
			$('#view2 #displays-portfolio').html("");
			for(var x = 0; x < portfolio_count; x++) {
				if($.trim(portfolio_title[x]) == '') {
					portfolio_count--;
				} else {
					$('#view #displays-portfolio').append(addWork(portfolio_title[x]));
					$('#view2 #displays-portfolio').append(addWork2(portfolio_title[x]));
				}
			}
		}
	});

	/**
	/////////////////// Meta ///////////////////
	// Title
	$('input[name=title]').change(function() {
		if($.trim($('input[name=title]').val()) == '') {
			if($('input[name=title]').length) {
				warning("danger", "Please put title!", "putTitle");
			}
		} else {
			$('.putTitle').fadeIn('slow', function() {
				$(this).remove();
			});
			for(var s = 0; s < 2; s++) {
				$('#view .navbar-brand').text($('input[name=title]').val());
				var replaced = $("textarea#indexdothtml").text().replace(title,$('input[name=title]').val());
				$("textarea#indexdothtml").text(replaced);
			}
			title = $('input[name=title]').val();
		}
	});

	// Description
	$('input[name=description]').change(function() {
		if($.trim($('input[name=description]').val()) == '') {
			if($('input[name=description]').length) {
				warning("danger", "Please put description!", "putDescription");
			}
		} else {
			$('.putDescription').fadeIn('slow', function() {
				$(this).remove();
			});
			var replaced = $("textarea#indexdothtml").text().replace(description,$('input[name=description]').val());
			$("textarea#indexdothtml").text(replaced);
			description = $('input[name=description]').val();
		}
	});

	// Keywords
	$('input[name=keywords]').change(function() {
		if($.trim($('input[name=keywords]').val()) == '') {
			if($('input[name=keywords]').length) {
				warning("danger", "Please put keywords!", "putKeywords");
			}
		} else {
			$('.putKeywords').fadeIn('slow', function() {
				$(this).remove();
			});
			var replaced = $("textarea#indexdothtml").text().replace(keywords,$('input[name=keywords]').val());
			$("textarea#indexdothtml").text(replaced);
			keywords = $('input[name=keywords]').val();
		}
	});


	// Author
	$('input[name=author]').change(function() {
		if($.trim($('input[name=author]').val()) == '') {
			if($('input[name=author]').length) {
				warning("danger", "Please put author!", "putAuthor");
			}
		} else {
			$('.putAuthor').fadeIn('slow', function() {
				$(this).remove();
			});
			var replaced = $("textarea#indexdothtml").text().replace(author,$('input[name=author]').val());
			$("textarea#indexdothtml").text(replaced);
			author = $('input[name=author]').val();
		}
	});

	

	/////////////////// About you ///////////////////
	// Name
	$('input[name=full_name]').change(function() {
		if($.trim($('input[name=full_name]').val()) == '') {
			if($('input[name=full_name]').length) {
				warning("danger", "Please put name!", "putName");
			}
		} else {
			$('.putName').fadeIn('slow', function() {
				$(this).remove();
			});
			$('span.name').text($('input[name=full_name]').val());
			var replaced = $("textarea#indexdothtml").text().replace(name,$('input[name=full_name]').val());
			$("textarea#indexdothtml").text(replaced);
			name = $('input[name=full_name]').val();
		}
	});

	// Position
	$('textarea[name=position]').change(function() {
		// Remove all value
		position = [];
		positioncount = 0;

		var lines = $('textarea[name=position]').val().split(/\n/);
		for (var i = 0; i < lines.length; i++) {
		  	// only push this line if it contains a non whitespace character.
		  	if (/\S/.test(lines[i])) {
		  		position.push($.trim(lines[i]));
		  	}
		  	positioncount++;
		}
		if($.trim($('textarea[name=position]').val()) == '') {
			if($('textarea[name=position]').length) {
				warning("danger", "Please put position!", "putPosition");
			}
		} else {
			$('.putPosition').fadeIn('slow', function() {
				$(this).remove();
			});
			$('span.position').text("");
			var t = "";
			for(var x = 0; x < positioncount; x++) {
				if($.trim(position[x]) == '') {
					positioncount--;
				} else {
					t = t + position[x] + " ";

					$('span.position').append(t);
					var replaced = $("textarea#indexdothtml").text().replace(position_text, t);
					$("textarea#indexdothtml").text(replaced);
					position_text = t;
				}
			}
		}
	});

	$('input[class=form-control]').change(function() {
		timeoutPortfolio();
	});
	**/
});

function warning(alert, text, type) {
	var x = '<div class="alert alert-dismissible alert-'+alert+' '+type+'">';
		x = x +'<button type="button" class="close" data-dismiss="alert">×</button>';
		x = x +'<strong>Error!</strong> '+text;
		x = x +'</div>';
	if($('.alerts').hasClass('.'+type)) {
		
	} else {
		$('.alerts').prepend(x).hide().fadeIn(1000);
	}
}

function addWork(title) {
	var x = '<div class="col-lg-4">';
		x = x + '<div style="padding: 10px;">';
			x = x + '<img src="img/works.png">';
			x = x + '<span class="works-title">'+title+'</div>';
			x = x + '<span class="works-desc"></div>';
		x = x + '</div>';
	x = x + '</div>';
	return x;
}

function addWork2(title) {
	var x = '<div class="col-lg-4">';
		x = x + '<div style="padding: 10px;">';
			x = x + '<img src="img/works.png">';
			x = x + '<span class="works-title">'+title+'</div>';
			x = x + '<span class="works-desc"></div>';
		x = x + '</div>';
	x = x + '</div>';
	return x;
}

function add1() {
	var x = '<section class="portfolio">';
		x = x +'<div class="container">';
			x = x + '<span class="title">Portfolio</span>';
			x = x + '<div id="displays-portfolio">';
			x = x + '</div>';
			x = x + '<div class="clearfix"></div>';
		x = x + '</div>';
	x = x + '</section>';
	return x;
}

function add2() {
	var x = '<section class="portfolio">';
		x = x +'<div class="container-fluid">';
			x = x + '<span class="title">Portfolio</span>';
			x = x + '<div id="displays-portfolio">';
			x = x + '</div>';
			x = x + '<div class="clearfix"></div>';
		x = x + '</div>';
	x = x + '</section>';
	return x;
}
