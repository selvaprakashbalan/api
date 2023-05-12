// var passvalue='';
// *****Insert the data to mysql*****
function createUser() {
  console.log("click");
  fetch("http://localhost:4000/insert", {
    method: "POST",
    body: JSON.stringify({
      name: document.getElementById("fname").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
    location.reload();
}

// *****Print the data to table*****
fetch('http://localhost:4000/getAll') 
.then(response => response.json())
.then(json => {
html =""
json.forEach(e => {
html += `<tr>
<td>${e.id}</td>
<td>${e.name}</td>
<td>${e.email}</td>
<td>${e.message}</td>
<td><button type="button" onclick="edit('${e.id}','${e.name}','${e.email}','${e.message}')">Edit</button><button type="button"  onclick="deleteuser(${e.id},${e.is_active})">Delete</button></td>
</tr>`
})
document.getElementsByTagName("tbody")[0].innerHTML = html
});
// *****Edit function*****
var submitbtn=document.getElementById("sub");
var addbtn=document.getElementById("adds");
function edit(id,name,email,message){
document.getElementById("fname").value= name;
document.getElementById("email").value=email;
document.getElementById("message").value=message;
passvalue=id;

submitbtn.style.display='none';
addbtn.style.display='block';

}
// *****Update the data*****
function add(){
fetch('http://localhost:4000/put',{  
method: 'put',
body: JSON.stringify({
id:passvalue,
name: document.getElementById("fname").value,
email: document.getElementById("email").value,
message: document.getElementById("message").value,
 }),
headers: {
'Content-type': 'application/json; charset=UTF-8'
},
})
location.reload();
}
// *****Delete*****
// function delete(id){
// // document.querySelectorAll("#table tbody tr")[id].style.display="none";
// // let deletedata= document.getElementsByTagName('tbody')[0];
// // console.log(deletedata);
// // if(id===document.getElementById("data"))
// fetch('http://localhost:3000/delete', {
// method: 'delete',
// body: JSON.stringify({
// id:id
// }),
// headers: {
// 'Content-type': 'application/json; charset=UTF-8',
// },
// })
// .then((response) => response.json())
// .then((json) => console.log(json));
//  }

 function deleteuser(id,is_active){
  fetch('http://localhost:4000/delete',{  
  method: 'put',
  body: JSON.stringify({
  id:id,
  is_active:0
   }),
  headers: {
  'Content-type': 'application/json; charset=UTF-8'
  },
  })
  location.reload();
  }
