var budget = document.getElementById('form-budget--amount');
var expenseAmount = document.getElementById('form-expense--amount');
var expenseName = document.getElementById('form-expense--name');

var calBtn = document.getElementById('cal-btn');
var addExpenseBtn = document.getElementById('addExpense-btn');

var totalBudget = 0;
var totalExpense = 0;
var balance = 0;

calBtn.addEventListener('click', calculate);
addExpenseBtn.addEventListener('click', expense);

function calculate() {

    if (budget.value === '') {
        budget.value = 0;
    }

    totalBudget += parseInt(budget.value);
    balance = totalBudget - totalExpense;

    document.getElementById('total-budget').textContent = `$ ${totalBudget}`;
    document.getElementById('total-balance').textContent = `$ ${balance}`;

    budget.value = 0;
};

function expense() {
    totalExpense += parseInt(expenseAmount.value);

    document.getElementById('total-expense').textContent = `$ ${totalExpense}`;

    calculate();
    addList();

    expenseAmount.value = 0;
    expenseName.value = '';
};

/***********************************************************************/

var expensesList = document.getElementById('item-list');

function addList() {
    var liExpenseTitle = document.createTextNode(expenseName.value);
    var liExpenseValue = document.createTextNode(expenseAmount.value);

    var newLi = document.createElement('li');
    newLi.className = 'expenses-list--child';

    var newChildName = document.createElement('span');
    newChildName.className = 'child--name';
    newChildName.appendChild(liExpenseTitle);

    var newChildAmount = document.createElement('span');
    newChildAmount.className = 'child--amount';
    newChildAmount.appendChild(liExpenseValue);

    var newDelBtn = document.createElement('img');
    newDelBtn.className = 'del-btn';
    newDelBtn.src = 'icon/trash-solid.svg';

    newLi.appendChild(newChildName);
    newLi.appendChild(newChildAmount);
    newLi.appendChild(newDelBtn);


    expensesList.appendChild(newLi);
}

expensesList.addEventListener('click', remove);
function remove(e) {
    e.preventDefault();
    if (e.target.classList.contains('del-btn')) {
        var delTarget = e.target.parentElement;
        expensesList.removeChild(delTarget);
    }
};