var acco = (function () {

	var init = function () {
        _setUpListners();
    };

     var _setUpListners = function ()  {

     	$('a[href="#"]').on ('click', function(e) {
			e.preventDefault();
			console.log('hey');
		});

     };

	return {
  		init: init, 
  	};

})();

acco.init();
