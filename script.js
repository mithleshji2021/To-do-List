const item = document.querySelector("#item");
const toDoBox = document.querySelector(".to-do-box");


item.addEventListener("keyup",function(event){
    
    if( event.key =="Enter"){
        if(this.value.length > 0){
            addToDo(this.value);
            
        }
        this.value = "";

    }
})



const addToDo = (item)=>{
    const listItem = document.createElement("li");
    listItem.style.backgroundColor = "lightblue";
    listItem.style.color = "black";
    listItem.style.justifyContent = "space-between";
    listItem.style.paddingTop = "6px";
    listItem.style.paddingBottom = "6px";
    listItem.style.paddingLeft = "15px";
    listItem.style.paddingRight = "15px";
    listItem.style.fontSize = "20px";
    listItem.style.display ="flex";
    listItem.style.alignItems ="center";
    
    
    
    listItem.innerHTML = `
    ${item} 
    <i class="fa-solid fa-xmark"></i>
    `;

    toDoBox.appendChild(listItem);

    listItem.querySelector("i").addEventListener("click",
        function(){
            listItem.remove();
        }
    )

    
}

