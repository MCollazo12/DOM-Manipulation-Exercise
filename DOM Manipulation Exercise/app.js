//1. Select the section with an id of container without using querySelector.
const container = document.getElementById('container');

//2. Select the section with an id of container using querySelector.
const section = document.querySelector('section');

//3. Select all of the list items with a class of “second”.
const second = document.getElementsByClassName('second');

//4. Select a list item with a class of third, but only the list item inside of the ol tag.
const third = document.querySelector('ol .third');

//5. Give the section with an id of container the text “Hello!”.
const newText = document.createElement('p')
newText.textContent = "Hello!";
section.prepend(newText);

//6. Add the class main to the div with a class of footer.
const footer = document.querySelector(".footer");
footer.classList.add('main');

//7. Remove the class main on the div with a class of footer.
footer.classList.remove('main');

//8. Create a new li element.
const newLi = document.createElement('li');

//9. Give the li the text “four”.
newLi.textContent = "four";

//10. Append the li to the ul element.
const ul = document.querySelector('ul');
ul.append(newLi);

//11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
const ol = document.querySelectorAll('ol li');
for (let i of ol) {
    i.style.backgroundColor = 'green';
}

//12. Remove the div with a class of footer
footer.remove();