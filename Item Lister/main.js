var newItem = document.getElementById('item-box');
var btnSubmit = document.getElementById('btn-submit');
var itemList = document.querySelector('#item-list');

// Add new Item to List
btnSubmit.addEventListener('click', addItem);
function addItem(e) {
    e.preventDefault();

    // new Input - create textNode to add into new list item
    var userInput = document.createTextNode(newItem.value);

    if (newItem.value === "") {
        newItem.className = 'place-holder--red';
        newItem.placeholder = "Please, enter the content!!!";
    }

    else {
        //remove class name of newItem & change placeholder
        newItem.classList.remove('place-holder--red');
        newItem.placeholder = 'Add new item here';

        //new li 
        var newLi = document.createElement('li');
        newLi.className = "item-list__children";

        //item-list__children__content
        var newLiContent = document.createElement('div');
        newLiContent.appendChild(userInput);
        newLiContent.className = 'item-list__children__content'

        // Delete Btn
        var newDeleteBtn = document.createElement('div');
        var deleteBtn_content = document.createTextNode('X');
        newDeleteBtn.appendChild(deleteBtn_content);
        newDeleteBtn.className = 'btn-delete';

        // add item-list__children__content & btn-delelte to item-list__children
        newLi.appendChild(newLiContent);
        newLi.appendChild(newDeleteBtn);

        // finally - add full item-list__children to item-list
        itemList.appendChild(newLi);


    }

};

itemList.addEventListener('click', removeItem);

function removeItem(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn-delete')) {
        var delTarget = e.target.parentElement;
        itemList.removeChild(delTarget);
    }
}
