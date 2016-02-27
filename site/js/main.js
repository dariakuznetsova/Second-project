
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

        $('.catalogue__link_one').on ('click', function() {
            $(this).children('.sprite__block').addClass('sprite__block_one-hover');
            $('.sprite__block').removeClass('sprite__block_two-hover sprite__block_three-hover');
            $('.content__goods').removeClass('content__goods_page3');
            $('.content__goods_item').removeClass('content__goods_item-page1 content__goods_item-page3').addClass('content__goods_item-page2');
            $('.goods__photo').removeClass('goods__photo_page1 goods__photo_page3').addClass('goods__photo_page2');
            $('.mark').addClass('mark_page2');
            $('.goods__info').removeClass('goods__info_page1 goods__info_page3').addClass('goods__info_page2');
            $('.goods__title').show()
            $('.goods__title').removeClass('goods__title_page3');
            $('.goods__title_page1').css({'display':'none'});
            $('.goods__table').css({'display':'none'});
            $('.goods__text').show();
            $('.mark').show();
            $('.goods__photo_main').show();
            $('.goods__photo_list').show();
            $('.goods__stars_list').show();
            $('.goods__stars_list').removeClass('goods__stars_list_page3');
            $('.goods__buy-info').removeClass('goods__buy-info_page1 goods__buy-info_page3').addClass('goods__buy-info_page2');
            $('.goods__price').removeClass('goods__price_page1 goods__price_page3').addClass('goods__price_page2');
            $('.price__span').removeClass('price__span_page1');
            $('.rouble-sign').removeClass('rouble-sign_page1');
            $('.goods__basket').removeClass('goods__basket_page1 goods__basket_page3').addClass('goods__basket_page2');
            $('.goods__available').removeClass('goods__available_page1 goods__available_page3').addClass('goods__available_page2');
        });

        $('.catalogue__link_two').on ('click', function() {
            $(this).children('.sprite__block').addClass('sprite__block_two-hover');
            $('.sprite__block').removeClass('sprite__block_one-hover sprite__block_three-hover');
            $('.content__goods').addClass('content__goods_page3');
            $('.content__goods_item').removeClass('content__goods_item-page1 content__goods_item-page2').addClass('content__goods_item-page3');
            $('.goods__photo').removeClass('goods__photo_page1 goods__photo_page2').addClass('goods__photo_page3');
            $('.mark').removeClass('mark_page2');
            $('.goods__photo_main').show();
            $('.goods__photo_list').show();
            $('.goods__info').removeClass('goods__info_page1 goods__info_page2').addClass('goods__info_page3');
            $('.goods__title').show()
            $('.goods__title').addClass('goods__title_page3');
            $('.goods__title_page1').css({'display':'none'});
            $('.goods__text').css({'display':'none'});
            $('.mark').css({'display':'none'});
            $('.goods__table').show();
            $('.goods__stars_list').show();
            $('.goods__stars_list').addClass('goods__stars_list_page3');
            $('.goods__buy-info').removeClass('goods__buy-info_page1 goods__buy-info_page2').addClass('goods__buy-info_page3');
            $('.goods__price').removeClass('goods__price_page1 goods__price_page2').addClass('goods__price_page3');
            $('.price__span').removeClass('price__span_page1');
            $('.rouble-sign').removeClass('rouble-sign_page1');
            $('.goods__basket').removeClass('goods__basket_page1 goods__basket_page2').addClass('goods__basket_page3');
            $('.goods__available').removeClass('goods__available_page1 goods__available_page2').addClass('goods__available_page3');
        });

        $('.catalogue__link_three').on ('click', function() {
            $(this).children('.sprite__block').addClass('sprite__block_three-hover');
            $('.sprite__block').removeClass('sprite__block_two-hover sprite__block_one-hover');
            $('.content__goods').removeClass('content__goods_page3');
            $('.goods__photo_main').css({'display':'none'});
            $('.goods__photo_list').css({'display':'none'});
            $('.content__goods_item').removeClass('content__goods_item-page2 content__goods_item-page3').addClass('content__goods_item-page1');
            $('.goods__photo').removeClass('goods__photo_page2 goods__photo_page3').addClass('goods__photo_page1');
            $('.mark').removeClass('mark_page2');
            $('.goods__info').removeClass('goods__info_page2 goods__info_page3').addClass('goods__info_page1');
            $('.goods__title').css({'display':'none'});
            $('.goods__title_page1').show();
            $('.goods__text').css({'display':'none'});
            $('.mark').show();
            $('.goods__table').css({'display':'none'});
            $('.goods__stars_list').css({'display':'none'});
            $('.goods__buy-info').removeClass('goods__buy-info_page2 goods__buy-info_page3').addClass('goods__buy-info_page1');
            $('.goods__price').removeClass('goods__price_page2 goods__price_page3').addClass('goods__price_page1');
            $('.price__span').addClass('price__span_page1');
            $('.rouble-sign').addClass('rouble-sign_page1');
            $('.goods__basket').removeClass('goods__basket_page2 goods__basket_page3').addClass('goods__basket_page1');
            $('.goods__available').removeClass('goods__available_page2 goods__available_page3').addClass('goods__available_page1');
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