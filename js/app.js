(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	})

	var gems = [
	{
		name: "Dodecahedron",
		price: 2.00,
		description: '. . .',
		canPurchase: true,
		soldOut: false
	},
	{
		name: "Diamond",
		price: 3.95,
		description: '. . .',
		canPurchase: true,
		soldOut: false
	},
	{
		name: "Ruby",
		price: 2.95,
		description: '. . .',
		canPurchase: true,
		soldOut: false
	}
	];


})();