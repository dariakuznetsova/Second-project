
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

    var init = function () {
        _setUpListners();
    };

    var _setUpListners = function ()  {
        var checkbox = $('.label__checkbox'),
            radio = $('.label__radio'),
            reset = $('.acco__content-link');

        $(checkbox).on('click', function() {
            if ($(this).hasClass('label__checkbox')) {
                $(this).removeClass('label__checkbox');
                $(this).addClass('label__checkbox_click');    
            }else{
                $(this).removeClass('label__checkbox_click');
                $(this).addClass('label__checkbox');
            };
        });

        $(radio).on('click', function() {
            if ($(this).hasClass('label__radio')) {
                $(this).removeClass('label__radio');
                $(this).addClass('label__radio_click');    
            }else{
                $(this).removeClass('label__radio_click');
                $(this).addClass('label__radio');
            };
        });

        $(reset).on('click', function () {
            $(this).parent().siblings().children('.label').removeClass('label__checkbox_click');
            $(this).parent().siblings().children('.label').addClass('label__checkbox');
        });  
    };

    return {
        init: init, 
    };

})();

if($('.sidebar__acco-form')) {
    acco.init();
    inputs.init();   
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
/*var main_menu = (function () {

    var init = function () {
        _setUpListners();
    };

    var _setUpListners = function ()  {

        $('.catalogue__link_one').on ('click', function() {         
            $('.class').removeClass('class1 class2 class3');
        });

       
    };

   
    return {
        init: init, 
    };

})();*/