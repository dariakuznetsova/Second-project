// Аккордеон
var acco = (function () {

    var init = function () {
        _setUpListners();
    };

    /*var arrow = function() {
        var acco__content = $('.acco__content');

        if (acco__content) {
            $('.acco__link').hover (function() {
                $(this).addClass('up');
                }, function() {
                 $(this).removeClass('up');
                });
            console.log('open')
        }else if(!acco__content){
            $('.acco__link').hover (function() {
                $(this).addClass('down');
                }, function() {
                $(this).removeClass('down');
                });
            console.log('close') 
            };
    };*/

    var _setUpListners = function ()  {
    
        $('a[href="#"]').on ('click', function(e) {
	       e.preventDefault();
		});

        $('.acco__link').on ('click', function() {
            $(this).next().slideToggle();
            arrow();
        });

        $('.label').on ('click', function(e) {
            if($(e).hasClass('label__radio')) {
                $(this).addClass('label__radio_click');   
            };
        });

};
	return {
  		init: init, 
  	};

})();

acco.init();

//Слайдер



var sl = function () {
    $( ".slider" ).slider({
        range: true
    });
    $( ".slider" ).slider( "option", "range", true );
};
sl();
