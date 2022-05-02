const HAMBURGER = {
	sizeBurg: {
		 small: {
			  price: 5,
			  calories: 20
		 },
		 big: {
			  price: 10,
			  calories: 40
		 }
	},
	toppings: {
		 chees: {
			  price: 1,
			  calories: 20
		 },
		 salad: {
			  price: 2,
			  calories: 5
		 },
		 potato: {
			  price: 1.5,
			  calories: 10
		 }
	},
	supplements: {
		 seasoning: {
			  price: 1.5,
			  calories: 0
		 },
		 mayonnaise: {
			  price: 2,
			  calories: 5 
		 }
	}
}

const getSizes = () => Object.keys(HAMBURGER.sizeBurg);
const getToppings = () => Object.keys(HAMBURGER.toppings);
const getSupplements = () => Object.keys(HAMBURGER.supplements);

const toCapitalize = list => list.map(item => item[0].toUpperCase()+item.slice(1).toLowerCase());

class Hamburger {	

	get price(){
		let result = 0;
		for(let key in this){
			result += this[key].price;
		}
		return result.toFixed(2);
	}

	get calories(){
		let result = 0;
		for(let key in this){
			result += this[key].calories;
		}

		return result.toFixed(2);
	}

	get ingredients(){
		let names = [];
		for(let key in this){
			names.push(this[key].name);
		}

		return names;
	}

	result(){
		let size, topping, supplement;

		do {
			size = prompt(`${toCapitalize(getSizes()).join(` or `)} of HUMBURGER?`, getSizes()[0]);
			if(size)
				size = size.replaceAll(` `,``).toLowerCase();
		} while(!getSizes().includes(size));

		this.size = HAMBURGER.sizeBurg[size];
		this.size.name = size;

		do {
			topping = prompt(`${toCapitalize(getToppings()).join(` or `)} of HUMBURGER?`, getToppings()[0]);
			if(topping)
				topping = topping.replaceAll(` `,``).toLowerCase();
		} while(!getToppings().includes(topping));

		this.topping = HAMBURGER.toppings[topping];
		this.topping.name = topping;

		do {
			supplement = prompt(`${toCapitalize(getSupplements()).join(` or `)} of HUMBURGER?`, getSupplements()[0]);
			if(supplement)
				supplement = supplement.replaceAll(` `,``).toLowerCase();
		} while(!getSupplements().includes(supplement));

		this.supplement = HAMBURGER.supplements[supplement];
		this.supplement.name = supplement;

		console.log(this);

		return `🍔 Hamburger: ${this.ingredients.join(`, `)}. Price: $${this.price}. Calories: $${this.calories}.`;
	}

}


let newHamburger = new Hamburger();
console.log(newHamburger.result());