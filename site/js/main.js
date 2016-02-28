
// Аккордеон
var acco = (function () {

    var init = function () {
        _setUpListners();
    };

    var _setUpListners = function ()  {
        
        $('a[href="#"]').on ('click', function(e) {
	       e.preventDefault();
		});

        $('.acco__link').on ('click', function() {         
            if ($(this).hasClass('up')){
                $(this).removeClass('up').addClass('down');
                $(this).addClass('acco__link_hover');
            }else if($(this).hasClass('down')){
                $(this).removeClass('down').addClass('up');
                $(this).removeClass('acco__link_hover');
            };
            $(this).next().stop().slideToggle();
        });

       $('.acco__link').hover (
            function() {
                if ($(this).next('.acco__content').css('display') == 'none') {
                        $(this).removeClass('up');
                        $(this).addClass('down');
                        $(this).addClass('acco__link_hover');
                    }else if($(this).next('.acco__content').css('display') == 'block'){
                        $(this).removeClass('acco__link_hover');
                        $(this).removeClass('down');
                        $(this).addClass('up');
                    }; 
            },
            function () {
                $(this).removeClass('up');
                $(this).removeClass('down');
                $(this).removeClass('acco__link_hover'); 
            }); 
    };

   
	return {
  		init: init, 
  	};

})();


// Чекбоксы и reset
var inputs = (function () {

    $('.acco__content-link').on('click', function () {
        var reset = $(this).parent().siblings().children('.label').children('.checked_elem1');
        $(reset).removeAttr('checked');
    });  

});

if($('.sidebar__acco-form')) {
    acco.init();
    inputs();   
};



// Слайдер
$(function() {
    $("#slider").slider({
      range: true,
      min: 0,
      max: 30000,
      values: [0,30000],
      stop: function(event, ui) {
        $("#from").val($("#slider").slider("values",0));
        $("#to").val($("#slider").slider("values",1));
      },  
      slide: function( event, ui ) {
        $("#from").val($("#slider").slider("values",0));
        $("#to").val($("#slider").slider("values",1));
      }
    });

    $("#from").change(function(){
        var value1=$("#from").val();
        var value2=$("#to").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("#from").val(value1);
        };
    $("#slider").slider("values",0,value1);    
    });

});


//Смена состояний
var main_menu = (function () {

    var init = function () {
        _setUpListners();
    };

    var _setUpListners = function ()  {
        
        var content = $('.content');

        $('.catalogue__link_one').on ('click', function() {
            //$(this).children('.sprite__block').removeClass('sprite__block_one').addClass('sprite__block_one-hover');
            content.removeClass('content-page2 content-page3').addClass('content-page1');
        });

        $('.catalogue__link_two').on ('click', function() {
            //$(this).children('.sprite__block').removeClass('sprite__block_two').addClass('sprite__block_two-hover');
            content.removeClass('content-page1 content-page3').addClass('content-page2');
        });
        $('.catalogue__link_three').on ('click', function() {
            //$(this).children('.sprite__block').removeClass('sprite__block_three').addClass('sprite__block_three-hover');
            content.removeClass('content-page1 content-page2').addClass('content-page3');
        });
       
    };

   
    return {
        init: init, 
    };

})();

main_menu.init();



$(document).ready(function() {
    $('.select2').select2();
    minimumResultsForSearch: Infinity
});




var slider2 = (function () {

    var init = function () {
        _setUpListners();
    };

    var _setUpListners = function ()  {

        $('.goods__photo_small').on('click', function() {

            var item1 = $(this).parent().prev().children('img'),
                item2 = $(this).parent().prev().children('img').attr('src'),
                item3 = $(this).children('img').attr('src');

            $(item1).fadeOut(300, function () {
               $(item1).attr('src', item3).fadeIn(300); 
            });
        
        });
    };

    return {
        init: init, 
    };

})();

if($('.goods__photo_small')) {
    slider2.init();   
};