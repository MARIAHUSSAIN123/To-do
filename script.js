let taskInput=document.getElementById("taskInput");
let addBtn=document.getElementById("addBtn");
let taskList=document.getElementById("taskList");
addBtn.onclick=function() {
    let task=taskInput.value;
    if(task===""){
        alert("please enter a task!");
        return
    }
    let li=document.createElement("li");
    li.innerText=task;
    let deleteBtn=document.createElement("button");
    deleteBtn.innerText="Delete";
    deleteBtn.onclick=function(){
        li.remove();
    };
    taskList.appendChild(li)
    li.appendChild(deleteBtn);
    taskInput.value=""
}