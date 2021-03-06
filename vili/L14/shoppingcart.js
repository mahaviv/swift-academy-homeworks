var shoppingCart = [
    {
        name: "apple",
        type: "fruit",
        quantity: 5
	},
    {
        name: "banana",
        type: "fruit",
        quantity: 2
	},
    {
        name: "potato",
        type: "vegetable",
        quantity: 10
	},
    {
        name: "cheese",
        type: "diry",
        quantity: 1
	},
    {
        name: "yogurt",
        type: "diry",
        quantity: 3
	},
    {
        name: "steak",
        type: "meat",
        quantity: 1
	},
    {
        name: "ice cream",
        type: "sweet",
        quantity: 1
	},
    {
        name: "bounty",
        type: "sweet",
        quantity: 3
	}
];



(function () {
    "use strict";

    // This function accepts a shopping cart list and returns the overall quantity of all the items in it

    var total = 0;

    function quantity(shoppingCart) {
        for (var i = 0; i < shoppingCart.length; i++) {
            total += shoppingCart[i].quantity;
        }
        return total;
    }

    // This function accepts a shopping cart list and returns the quantity of the fruit and vegetable items in it
    var result = 0;

    function veganQuantity(shoppingCart) {
        for (var i = 0; i < shoppingCart.length; i++) {
            if (shoppingCart[i].type == "fruit" || shoppingCart[i].type == "vegetable")
                result += shoppingCart[i].quantity;

        }
        return result;
    }
})();
console.log('overall', quantity(shoppingCart)); // should return 26
console.log('vegan', veganQuantity(shoppingCart)); // should return 17