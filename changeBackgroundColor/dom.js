// ACCESSING ELEMENTS
/*

----------- METHODS THAT RETURN A SINGLE ELEMENT NODE:
 	getElementById('id') 

- Select an individual element given the value of its id attribute. HTML must have an id attribute in order for it to be selectable

 	querySelector('css selector')

 -Uses CSS selector syntax that would select one or more elements. Return only the first of the matching elements

 --getElementById is the quickest and most efficient way to access an element because no two elements can share the same value for their id attribute.

 --querySelector is a more recent addition to the DOM, not supported in older browsers. Flexible b/c its paremeter is a css selector.

----------- METHODS THAT RETURN ONE OR MORE ELEMENTS (AS A NODELIST):

	getElementsByClassName('class');
	getElementsByTagName('tagName');
	querySelectorAll('css selector')
 */
var list = document.querySelectorAll('li');

var childBackground = [];
for(var i = 0; i < list.length; i++){
	childBackground.push(window.getComputedStyle(list[i]).getPropertyValue('background-color'));
}

for(let i = 0; i < list.length; i++){
	var listItem = list[i];
	listItem.addEventListener('click', function(){
		document.body.style.backgroundColor = "" + childBackground[i] + "";
	});
}