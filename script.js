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
}


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
<td><button type="button" onclick="edit('${e.name}','${e.email}','${e.message}')">Edit</button></td>
<td><button type="button">Delete</button></td>
</tr>`
})
document.getElementsByTagName("tbody")[0].innerHTML = html
});
    function edit(name,email,message) {
        document.getElementById("fname").value = name;
        document.getElementById("email").value = email;
        document.getElementById("message").value = message;
    }
    function add(){
        fetch("http://localhost:4000/put",{
        method: "PUT",
        body: JSON.stringify({
          name:document.getElementById("fname").value ,
          email:document.getElementById("email").value ,
          message:document.getElementById("message").value 
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
    

}
