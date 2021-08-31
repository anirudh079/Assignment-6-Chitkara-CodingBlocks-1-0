const itemInput = document.getElementById('additem');
const add = document.getElementById('addbutton');
const list = document.getElementById('list');

let createNewInp = function(newtask){
    let li = document.createElement('li');
    let editInput=document.createElement("input");
    let editButton=document.createElement("button");
	let deleteButton=document.createElement("button");
    let upButton=document.createElement("button");
    let downButton=document.createElement("button");

    editInput.value=newtask;
    editInput.disabled="true";
    editInput.type="text";
    editInput.className="editinput";
    
	editButton.className="fas fa-edit";
    
	deleteButton.className="fas fa-trash-alt";
    
    upButton.className="fas fa-sort-up";
    
    downButton.className="fas fa-sort-down";

    li.append(editInput);
    li.append(editButton);
    li.append(deleteButton);
    li.append(upButton);
    li.append(downButton);
    list.append(li);

    upButton.addEventListener('click',(e)=>{
        if(e.target.parentElement.previousElementSibling!=null){
        let y = e.target.parentElement.firstChild.value;
        let x = e.target.parentElement.previousElementSibling.firstChild.value;

        e.target.parentElement.previousElementSibling.firstChild.value=y;
        e.target.parentElement.firstChild.value=x;
       }
    })
    
    downButton.addEventListener('click',(e)=>{
        if(e.target.parentElement.nextElementSibling!=null){
        var y = e.target.parentElement.firstChild.value;
        var x = e.target.parentElement.nextElementSibling.firstChild.value;

        e.target.parentElement.nextElementSibling.firstChild.value=y;
        e.target.parentElement.firstChild.value=x;
        }
    })
    

    deleteButton.addEventListener('click',(e)=>{
        var x = e.target.parentElement;
        x.remove();
    })
    editButton.addEventListener('click',(e)=>{
        var div = e.target.previousElementSibling;
        if(div.disabled == true){
            div.disabled = !div.disabled;
         }
         else{
            div.disabled = !div.disabled;
         }
    })
}

add.addEventListener('click', () => {
    createNewInp(itemInput.value);
	itemInput.value="";
});
