var tbody = document.querySelector('#tbody');
var accbtn = document.querySelector('#accbtn');
var addaccbtn = document.querySelector('#addaccbtn');
var eddebtn = document.querySelector('#eddebtn');
var accountsView = document.querySelector('#accountsView');
var addView = document.querySelector('#addView');
var savebtn = document.querySelector('#save');
var addId = document.querySelector('#addId');
var addName = document.querySelector('#addName');
var addSum = document.querySelector('#addSum');
var addCard = document.querySelector('#addCard');
var eddeView = document.querySelector('#eddeView');
var editbody = document.querySelector('#editbody');
var eaddId = document.querySelector('#eaddId');
var eaddName = document.querySelector('#eaddName');
var eaddSum = document.querySelector('#eaddSum');
var eaddCard = document.querySelector('#eaddCard');
var editView = document.querySelector('#editView');
var editbtn = document.querySelector('#editbtn');
var id;

var db = [
  {
    id : 1,
    name: "Ana",
    sum: 50000,
    cCard: "Visa"
  },
  {
    id : 2,
    name: "Milos",
    sum: 30000,
    cCard: "Master"
  }
];

accbtn.addEventListener('click', showAccounts);
addaccbtn.addEventListener('click', addAcount);
savebtn.addEventListener('click', saveAccount);
eddebtn.addEventListener('click', eddeAccount);
editbtn.addEventListener('click', changeAccount);


createTable();


function createTable() {
  text = "";
  for (var i = 0; i < db.length; i++) {
    text += "<tr>";
    text += "<td>"+db[i].id+"</td>"
    text += "<td>"+db[i].name+"</td>"
    text += "<td>"+db[i].sum+"</td>"
    text += "<td>"+db[i].cCard+"</td>"
    text += "</tr>";
  }
  tbody.innerHTML = text;
}
function createEdit() {
  text = "";
  for (var i = 0; i < db.length; i++) {
    text += "<tr>";
    text += "<td>"+db[i].id+"</td>";
    text += "<td>"+db[i].name+"</td>";
    text += "<td>"+db[i].sum+"</td>";
    text += "<td>"+db[i].cCard+"</td>";
    text += "<td><button data-id='"+i+"' class='btn btn-warning edit'>Edit</button></td>";
    text += "<td><button id='"+i+"'class='btn btn-danger delete'>Delete</button></td>";
    text += "</tr>";
  }
  editbody.innerHTML = text;
  var deletebtns = document.querySelectorAll('.delete');
  var editbtns = document.querySelectorAll('.edit');
  for (var i = 0; i < deletebtns.length; i++) {
    deletebtns[i].addEventListener('click', deleteAccount);
    editbtns[i].addEventListener('click', editAccount)
  }
}

function deleteAccount() {
  var id = this.id;
  db.splice(id,1);
  createTable();
  showAccounts();
}

function editAccount() {
  id = this.getAttribute("data-id");
  eaddId.value = db[id].id;
  eaddName.value = db[id].name;
  eaddSum.value = db[id].sum;
  eaddCard.value = db[id].cCard;


  addView.style.display = "none";
  accountsView.style.display = "none";
  eddeView.style.display = "none";
  editView.style.display = "block";
}

function changeAccount() {
  var accId = eaddId.value;
  var accName = eaddName.value;
  var accSum = eaddSum.value;
  var accCard = eaddCard.value;

  db[id] = {
    id : accId,
    name : accName,
    sum : accSum,
    cCard : accCard
  };
  createTable();
  showAccounts();
}

function addAcount() {
  addView.style.display = "block";
  accountsView.style.display = "none";
  eddeView.style.display = "none";
  editView.style.display = "none";
}
function showAccounts() {
  addView.style.display = "none";
  accountsView.style.display = "block";
  eddeView.style.display = "none";
  editView.style.display = "none";
}
function saveAccount() {
  id = addId.value;
  name = addName.value;
  sum = addSum.value;
  card = addCard.value;

  newAccount = {
    id : id,
    name: name,
    sum: sum,
    cCard: card
  }
  db.push(newAccount);
  createTable();
  accountsView.style.display = "block";
  addView.style.display = "none";
  eddeView.style.display = "none";
  editView.style.display = "none";
}
function eddeAccount() {
  createEdit();
  accountsView.style.display = "none";
  addView.style.display = "none";
  eddeView.style.display = "block";
  editView.style.display = "none";
}
