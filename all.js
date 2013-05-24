$(document).ready(function(e) {
    if ($('#content').length != 0) {
	
        var currentIndex = 0, slides = $('#content > div');
        $(slides[currentIndex]).css('left','0%');
        function slide() {
            var current, next;
            current = $(slides[currentIndex]);
            currentIndex++;
            if(currentIndex === slides.length){
                currentIndex = 0;   
            }
            next = $(slides[currentIndex]);
            next.css('left','100%');
            next.css('z-index',parseInt(current.css('z-index'), 10)+1);
            next.animate({left: '0%'}, 1000);
        }        
        var s = window.setInterval(slide, 2000);        
        }
		

    x = document.getElementById("control").childNodes;
	y = document.getElementById("main").childNodes;
    for (var i = 0; i < x.length; i++) {
        x[i].addEventListener("click", function (event) {
			var a= event.target.id;
			var b = $("ul > li.active").attr("id");
			switch (b)
  {
  case 'home_panel':
   $('#content').hide();
    break;
  case 'about_panel':
    $('#about').hide();
    break;
  case 'portfolio_panel':
    $('#portfolio').hide();
    break;
  case 'snippets_panel':
    $('#snippets').hide();
    break;
  case 'contacts_panel':
    $('#contact').hide();
    break;
  }
  
switch (a)
  {
  case 'home_panel':
   $('#content').show();
    break;
  case 'about_panel':
    $('#about').show();
    break;
  case 'portfolio_panel':
    $('#portfolio').show();
    break;
  case 'snippets_panel':
    $('#snippets').show();
    break;
  case 'contact_panel':
    $('#contact').show();
    break;
  }
			
				$('ul>li.active').removeClass('active');
				$('#'+a).addClass('active');
			
			
        }, false);
    }

		}); 