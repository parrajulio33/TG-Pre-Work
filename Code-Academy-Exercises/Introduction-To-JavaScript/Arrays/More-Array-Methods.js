const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// Remove the first item from the array
groceryList.shift();

// add the first item popcorn
groceryList.unshift('popcorn');
//console.log(groceryList);

// pick up list
groceryList.slice(1,4);
console.log(groceryList.slice(1, 4));
console.log(groceryList);

//Find index of the element
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);
