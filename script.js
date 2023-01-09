let someArray = [];

var key = 8;


//render 
function render(key){someArray = someArray.filter(person => person.id != key);
document.getElementById('ptasks').innerHTML = someArray.map(user => 
    `<div class="row">
    <div class="col-sm-6 col-lg-5">
      <div class="card border-success col-md-11 col-lg-12">
<div class="card-body">
<p class="card-text text-center h4">${user.task}&nbsp;</p>
<p class="card-text text-center">${user.date}</p>
</div>
      </div>
    &nbsp;</div>
    <div class="col-sm-2 col-lg-2 col-md-6">
      <div class="row">
        <button type="button" class="btn btn-sm btn-primary mb-2" onclick = 'del(${user.id})'>Delete&nbsp;</button>
      &nbsp;</div>
      <div class="row">
        <button type="button" class="btn btn-sm btn-primary" onclick = 'com(${user.id})'>Complete&nbsp;</button>
&nbsp;</div>
&nbsp;</div>
  </div>`
).join('')

                 }

                 
function getValue() {

let object = {id: Date.now(), task: 'l', date: 'k'}


object.task =document.getElementById("todo").value;
var d = new Date();
var formatted = ('0' + d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth()+1)).slice(-2) + '/' + d.getFullYear();
object.date = formatted

someArray.push(object); 
render();
document.getElementById("todo").value = '';
console.log(someArray) 


}

//delete 
function del(k){
  render(k);
 //console.log(k);
}

function validation(){
  var todoitem = document.getElementById("todo").value;
  if(todoitem=="" || todoitem==null){
    alert("enter a value");
    return false;
} else getValue();
}

//complete
function com(key){
  let someArray2 = someArray;
  someArray2 = someArray2.filter(person => person.id == key);
  

  

  var element = document.getElementById("ctasks");
  
  
  //create elements 
var div1 = document.createElement("div");
var div2 = document.createElement("div");
var div3 = document.createElement("div");
var div4 = document.createElement("div");
var p1 = document.createElement("p");
var p2 = document.createElement("p");

// define content and class 
var n1 = document.createTextNode(someArray2[0].task);
var n2 = document.createTextNode(someArray2[0].date);
p1.appendChild(n1);
p2.appendChild(n2);
div1.className = "row";
div2.className = "col-sm-6 col-lg-5 mb-2";
div3.className = "card border-success col-md-11 col-lg-12";
div4.className = "card-body";
p1.className = "card-text text-center h4";
p2.className = "card-text text-center h6";

// appendChild()
element.appendChild(div1);
div1.appendChild(div2);
div2.appendChild(div3);
div3.appendChild(div4);
div4.appendChild(p1);
div4.appendChild(p2);

  
  

  
render(key);
  console.log(someArray2[0].task)
         }





