// Get references to DOM elements
const inputContainer = document.getElementById('input-container');
const inputBtns = document.getElementById('input-btns');
const noFoundImg = document.getElementById('no-found-img');

// Create Name Element
const nameElement = document.createElement('input');
nameElement.setAttribute("type", "text");
nameElement.className = "mx-2 p-1";
nameElement.placeholder = "Enter Name...";
inputContainer.insertAdjacentElement('beforeend', nameElement);

// Create label for Name
const namelable = document.createElement('label');
namelable.innerText = 'Name:';
inputContainer.insertAdjacentElement('afterbegin', namelable);

// Create Age Element
const ageElement = document.createElement('input');
ageElement.setAttribute("type", "number");
ageElement.className = "mx-2 p-1"
ageElement.placeholder = "Enter Age...";
inputContainer.insertAdjacentElement('beforeend', ageElement);

// Create label for Age
const agelable = document.createElement('label');
agelable.innerText = 'Age: ';
nameElement.insertAdjacentElement('afterend', agelable);

// Create Qualification Element
const qualificationElement = document.createElement('input');
qualificationElement.setAttribute("type", "text");
qualificationElement.className = "mx-2 p-1";
qualificationElement.placeholder = "Enter Qualification...";
inputContainer.insertAdjacentElement('beforeend', qualificationElement);

// Create label for Qualification
const qualificationlabel = document.createElement('label');
qualificationlabel.innerText = 'Qualification:';
ageElement.insertAdjacentElement('afterend', qualificationlabel);

// Create "Add" button
const addBtn = document.createElement('button');
addBtn.innerText = "Add";
addBtn.className = "btn btn-success me-3";
inputBtns.insertAdjacentElement('beforeend', addBtn);

// Create "Reset" button
const resetBtn = document.createElement('button');
resetBtn.innerText = "Reset";
resetBtn.setAttribute('onClick', 'resetInput();');
resetBtn.className = "btn btn-secondary me-3";
inputBtns.insertAdjacentElement('beforeend', resetBtn);

// Get references to table elements
const table = document.querySelector('table');
const tBody = document.querySelector('tbody');
var count = 0;

// Add event listener for "Add" button
addBtn.addEventListener('click', () => {
    noFoundImg.style = "display: none";
    table.style = "display: table";

    // Get input values
    const nameValue = nameElement.value;
    const ageValue = ageElement.value;
    const qualificationValue = qualificationElement.value;

    // Create table row and cells
    const tr = document.createElement('tr');
    const cntTd = document.createElement('td');
    const nameTd = document.createElement('td');
    const ageTd = document.createElement('td');
    const qualificationTd = document.createElement('td');

    // Update counter and cell values
    count++;
    cntTd.innerText = count;
    nameTd.innerText = nameValue.toUpperCase();
    ageTd.innerText = ageValue;
    qualificationTd.innerText = qualificationValue.toUpperCase();

    // Append cells to row and row to table body
    tr.append(cntTd, nameTd, ageTd, qualificationTd);
    tBody.append(tr);
});

// Function to reset input fields
function resetInput() {
    nameElement.value = '';
    ageElement.value = '';
    qualificationElement.value = '';
}
