'use strict';

/****************** Decleration ***************** */
let container = document.getElementById('table');
let table = document.createElement('table');
container.appendChild(table);

let donerName = '';
let amount = '';
let arrOftableHEad=[];
let max=0;
let min=0;



/***************constracter function************ */
function Donation(name,amount){
    this.name=name;
    this.amount=amount;
     this.min = 18;
     this.max=30;
    
    Donation.alldonation.push(this);
}

Donation.alldonation=[];


/************ Get form ********* */

let form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    donerName = event.target.name.value;

    amount= event.target.amount.value;

    getFromLs();
    new Donation(donerName,amount).render();
    saveToLs();
    
    // console.log(donerName)

})


/***************table functions**************** */

function tableHead (){

let headRow= document.createElement('th');
table.appendChild(headRow);

arrOftableHEad=['Doner Name','Doner Age','Amount'];

let th =null;
for(let i=0 ; i<arrOftableHEad.length; i++){
    th = document.createElement('th');
    headRow.appendChild(th);
    th.textContent= arrOftableHEad[i];
}

}

tableHead();

Donation.prototype.render = function(){
    let dataRow=document.createElement('tr');
    table.appendChild(dataRow);


    let td1 = document.createElement('td');
    dataRow.appendChild(td1);
    td1.textContent=this.name;

    let td2 = document.createElement('td')
    dataRow.appendChild(td2);
    td2.textContent=this.age = randomValue(this.min , this.max);;


    let td3=document.createElement('td');
    dataRow.appendChild(td3);
    td3.textContent=this.amount;

}

function allContent(){

    getFromLs();
    for (let i=0 ; i <Donation.alldonation.length ; i++)
    Donation.alldonation[i].render();
}

allContent();

/************functin for random age************* */

function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}



/****************local storage**********8 */

function saveToLs(){

    localStorage.setItem('donation',JSON.stringify(Donation.alldonation));
}


function getFromLs(){

     let data = JSON.parse(localStorage.getItem('donation'));
     if (data){

        Donation.alldonation=[];
        for (let i=0; i<data.length;i++){ // reinstnsiation
           let reIns= new Donation(data[i].name,data[i].amount);

           console.log(reIns);      
          }
     }
}

