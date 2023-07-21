const inputBox = document.getElementById("input-place");
const listContainer = document.getElementById("list");
/* creating a function to add task */
function addtask() {
    if(inputBox.value == ''){
        alert("You must write something"); /* To show an appropriate message if text bar is empty */
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        /* creating delete button for tasks */
       
        let span = document.createElement("Span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
        
       
        /* delete button created */
    }
    inputBox.value = "";
    saveData();

}
 

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);

/* Below function will save the task incase user closes or refresh the browser */

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

/* Below function will display the saved data */

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}




/* Below code will allow to add the task just by hitting enter key instead of clicking add button */
inputBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addtask();
    }
});


showTask();

