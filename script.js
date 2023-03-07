let userinput= document.getElementById('userInput');
let addUseruser= document.getElementById('addUser');
let btntext= addUseruser.innerText;
let userInfo = document.getElementById('userInfo');

let allUsers= [];
let editId= null;

let strToObj= localStorage.getItem('name');
allUsers= JSON.parse(strToObj);
showUser();

addUseruser.onclick=()=>{
        //insert
        const name= userinput.value;
    if(editId!=null){
        //edit
        allUsers.splice(editId,1,{'name': name})
        editId=null;
    }else{
        allUsers.push({'name': name})
    }

    saveUser(allUsers)
    userinput.value='';
    showUser();
    addUseruser.innerText=btntext;
}

function saveUser(allUsers){
   let stringUsers= JSON.stringify(allUsers);
    localStorage.setItem('name', stringUsers)
}

function showUser(){
    let statement = ''
    allUsers.map((user,i)=>{
        statement+=`<tr>
        <th scope="row">${i+1}</th>
        <td>${user.name}</td>
        <td><i class="btn fa fa-edit btn-info"  onclick='editUser(${i})' style="font-size:24px"></i> <i class="btn material-icons btn-danger" onclick='deleteUser(${i})'>&#xe872;</i></td>
      </tr>`
    });
    userInfo.innerHTML=statement;

}

function editUser(id){
editId=id;
userinput.value=allUsers[id].name;
addUseruser.innerHTML='save'

}

function deleteUser(id){
    console.log(allUsers);
   allUsers.splice(id,1)
   saveUser(allUsers);
   showUser();

}