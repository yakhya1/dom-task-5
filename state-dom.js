const list = document.getElementById("list");
const button = document.querySelector(".add");
const input = document.getElementById("input");
const removeButton = document.createElement("button");
const checkBox = document.createElement("input");
checkBox.type = "checkbox";
checkBox.style = "width 10px";
const arr = [
  {
    name: "Поступить в интукод",
    done: false,
  },
  { 
    name: "Окончить интукод",
    done: false 
  },
  { 
    name: "Не дать сгореть гарантии", 
    done: false 
  },
  { 
    name: "Заработать кучу денег", 
    done: false 
  },
  { 
    name: "Втирать людям что деньги это не главное", 
    done: false 
  },
];

function render(arr) {
  list.textContent = "";
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");
    li.textContent = arr[i].name;
   
    const removeButton = document.createElement("button");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
   
    li.append(removeButton);
    li.prepend(checkBox);
  
    removeButton.textContent = "x";
    removeButton.addEventListener("click", (e) => {
      remove([i]);
    });

    list.append(li);
  }
}

render(arr);

function remove(num) {
  arr.splice(num, 1);
  return render(arr);
}

function addTo(newTask) {
     if (input.value.trim() === "") {
          return null;
        }
        
  newTask = input.value;
  arr.push({ name: newTask, done: false });

  render(arr);
}
// запущить адд в ул
button.addEventListener("click", (e) => {
  e.preventDefault();
  addTo();
  input.value = "";
});

function todoCheck(id) {
     
      if( arr[id].done === true){
          arr[id].done = false
      }else {
        arr[id].done = true
      }
     
}
 