var acco = (function () {

    var init = function () {
        arrow(),
        _setUpListners();
    };

    var arrow = function() {
        if ($('acco__content').css('display') !== 'none') {
            $('.acco__link:hover:after').css('@include sprite($arrow-up);');
            console.log('открыто');
        }else{
            console.log('закрыто');
        };
    };

    var _setUpListners = function ()  {
    
        $('a[href="#"]').on ('click', function(e) {
	       e.preventDefault();
		});

        $('.acco__link').on ('click', function() {
            $(this).next().slideToggle();
            console.log('hey');
        });

     };

	return {
  		init: init, 
  	};

})();

acco.init();
