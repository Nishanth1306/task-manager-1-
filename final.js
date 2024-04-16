var table = document.getElementById("row");
table.style.backgroundColor="blue";
table.style.textAlign="center";
table.style.padding="20px";
table.style.paddingRight="20px";
table.style.paddingBottom="20px";
table.style.width="1000px";

var dt=document.getElementById("data-table");
dt.style.width="auto";
dt.style.width="700px";

var ad=document.getElementById("addtask");
ad.style.paddingLeft="80px"
ad.style.fontSize="15px"
ad.style.color="blue"





var start=document.getElementById("start");
start.style.width="100px";
start.style.height="30px";
start.style.borderRadius="12px";
start.style.color="black";
start.style.backgroundColor="green";
start.style.cursor="pointer";

var start1=document.getElementById("start1");
start1.style.width="100px";
start1.style.height="30px";

start1.style.borderRadius="12px";
start1.style.color="black";
start1.style.backgroundColor="Yellow";
start1.style.cursor="pointer";

var start2=document.getElementById("start2");
start2.style.width="100px";
start2.style.height="30px";

start2.style.borderRadius="12px";
start2.style.color="black";
start2.style.backgroundColor="red";
start2.style.cursor="pointer";

var time=document.getElementById("timedisplay");
time.style.fontSize="75px";
time.style.color="red";


var contain=document.getElementById("timer");
contain.style.textAlign="center";
contain.style.alignContent="center";
contain.style.backgroundColor="teal"      
contain.style.border="5px solid aqua";
contain.style.animationDirection=""
contain.style.height="400px";
contain.style.width="400px"
contain.style.borderRadius="50%";
contain.style.marginLeft="200px";
contain.style.marginTop="200px";



var coltable = document.getElementById("col");
coltable.style.backgroundColor="grey";
coltable.style.textAlign="center";
coltable.style.padding="100px";


var pos = document.getElementById("box");
pos.style.display="flex";
pos.style.position="relative";
pos.style.left="50px";
pos.style.width="900px";


var dropdown = document.getElementById("dropdown");
  dropdown.style.position = "relative";
  dropdown.style.left = "550px";
  dropdown.style.padding="20px";
  dropdown.style.width="170px";
  dropdown.style.marginTop="80px";
  dropdown.style.color="red";


  

  const data = [
    { task: 'Meeting', description:'Client Meeting', duration: '00:50:43' },
    { task: 'Project - abc', description:'Developing - xyz', duration: '01:42:02' },
    { task: 'Personal Break', description:'-', duration: '00:22:15' },
    { task: 'Meeting', description:'Daily Scrum', duration: '00:32:28' }
  ];


function displayData(data) {
    const tableBody = document.getElementById('col');
    tableBody.innerHTML = ''; 

    data.forEach(ele => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${ele.task}</td>
            <td>${ele.description}</td>
            <td>${ele.duration}</td>
            <button id ="yes">Delete</button>
            <button id="edit">Edit</button>
        `;
        tableBody.appendChild(row);
    });
;}
displayData(data); 

//Filter code;

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("newcol");
  filter = input.value.toUpperCase();
  table = document.getElementById("col");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var select = document.getElementById("tasklist");
  select.addEventListener("change", function() {
    var selectedValue = select.value.toUpperCase();
    var rows = document.querySelectorAll("#col tr");
    rows.forEach(function(row) {
      var taskCell = row.querySelector("td:first-child");
      if (taskCell) {
        var taskText = taskCell.textContent.toUpperCase();
        if (taskText.indexOf(selectedValue) > -1) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      }
    });
  });
});



document.getElementById("addtask").addEventListener("submit", function(event){
  event.preventDefault();
  let task1 = document.getElementById('fname').value;
  let description1 = document.getElementById('lname').value;
  let duration1 = document.getElementById('duration').value;
  
  let newdata = {
    task: task1,
    description: description1,
    duration: duration1
  };

  console.log(newdata);
  data.push(newdata);
  console.log(data);

  displayData(data); 

});


const timeDisplay = document.getElementById("timedisplay");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("start1");
const resetBtn = document.getElementById("start2");

let startTime = 0;
let runningTime = 0;
let currentTime = 0;
let intervalId;
let paused = true;
let hours=0;
let minutes=0;
let seconds=0;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  if (paused) {
    paused = false;
    startTime = Date.now() - runningTime;
    intervalId = setInterval(updateTime, 1000);
    toggleButtons(true);
  }
}
function pauseTimer() {
  clearInterval(intervalId);
  paused = true;
  toggleButtons(false);
}
function resetTimer() {
  paused = true;
  clearInterval(intervalId);
  startTime = Date.now(); 
  runningTime = 0;
  updateTime();
  toggleButtons(false);
}
function updateTime() {
  runningTime = Date.now() - startTime;
  let seconds = Math.floor((runningTime / 1000) % 60);
  let minutes = Math.floor((runningTime / (1000 * 60)) % 60);
  let hours = Math.floor((runningTime / (1000 * 60 * 60)) % 24);

  seconds = pad(seconds);
  minutes = pad(minutes);
  hours = pad(hours);

  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

function pad(unit) {
  return unit < 10 ? "0" + unit : unit;
}

function toggleButtons(running) {
  startBtn.disabled = running;
  pauseBtn.disabled = !running;
  resetBtn.disabled = running;
}

