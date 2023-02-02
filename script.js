//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

// let count = 3;

// function greenButton(obj){
//   var tableRow = obj.parentNode.parentNode;
//   var content = tableRow.nextElementSibling;
//   if(content.style.display === "block"){
//     content.style.display = "none";
//   } else {
//     content.style.display = "block";
//   }
// }

// function addStudent() {
//   var table = document.getElementById("myTable");
//   if(table.rows.length > 20) {
//     alert("Adding new student failed!");
//     return;
//   }


// var row = table.insertRow(-1);
// var cell1 = row.insertCell(0);
// var cell2 = row.insertCell(1);
// var cell3 = row.insertCell(2);
// var cell4 = row.insertCell(3);
// var cell5 = row.insertCell(4);
// var cell6 = row.insertCell(5);
// var cell7 = row.insertCell(6);
// var cell8 = row.insertCell(7);
// var cell9 = row.insertCell(8);
// var cell10 = row.insertCell(9);

// count++;

// cell1.innerHTML =
// "<input type='checkbox' onclick='yellowcolor(this)' /> <br /><br /><img src='down.png' width='25px' onclick='greenButton(this)'/>";
// cell2.innerHTML = "Student" + count;
// cell3.innerHTML = "Teacher" +count;
// cell4.innerHTML = "Approved";
// cell5.innerHTML = "Fall";
// cell6.innerHTML = "TA";
// cell7.innerHTML = "45679";
// cell8.innerHTML = "100%";
// cell9.innerHTML = "<button id='deletebtn' style='display:none;' onclick='deleteRow(this)'>Delete</button>";
// cell10.innerHTML = "<button id= 'editbtn' style='display: none;' onclick='editRow(this)'>Edit</button>";
// alert("Record Added Successfully!!");
// var addRow = table.insertRow(-1);
// var celldetail = addRow.insertCell(0);
// celldetail.innerHTML = "<tr class='dropDownTextArea' style='display:none;'> <td colspan='8'> Advisor:<br /><br /> Award Details<br /> Summer 1-2014(TA)<br /> Budget Number: <br /> Tuition Number: <br /> Comments:<br /><br /><br /> Award Status:<br /><br /><br /></td></tr>";
// }

// function deleteRow(obj) {
//   obj.parentNode.parentNode.remove();
//   alert("Record Deleted Successfully!!");
//   count--;
// }
// function editRow(obj){
//   alert("Edit the details....");
// }

// function yellowcolor(obj){
//   var tableRow = obj.parentNode.parentNode;
//   tableRow.style.backgroundColor = obj.checked ? "yellow" : "white";
//   if(tableRow.cells[8].childNodes[0].nodeName == "#text") {
//     tableRow.cells[8].childNodes[1].style.display = obj.checked
//     ? "block"
//     : "none";
//     tableRow.cells[9].childNodes[1].style.display = obj.checked
//     ? "block"
//     : "none";
//   } else {
//     tableRow.cells[8].childNodes[0].style.display = obj.checked
//     ? "block"
//     : "none";
//     tableRow.cells[9].childNodes[0].style.display = obj.checked
//     ? "block"
//     : "none";
//   }

//   changeButtonColor();
// }
// function changeButtonColor(){
//   var rows = document.getElementsByTagName("input");
//   var is_checked = false;

//   for(let i = 0; i < rows.length; i++){
//     if(rows[i].type == "checkbox"){
//       is_checked = rows[i].checked;
//       if(is_checked) {
//         break;
//       }
//     }
//   }
//   var btn = document.getElementById("button");
//   btn.style.backgroundColor = is_checked ? "orange" : "gray";
//   btn.style.backgroundColor = is_checked
//   ? (btn.disabled = false)
//   : (btn.disabled = true);
// }
let count = 3;

function greenButton(obj) {
  var tableRow = obj.parentNode.parentNode;
  var content = tableRow.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

function addStudent() {
  var table = document.getElementById("myTable");
  if (table.rows.length > 20) {
    alert("Adding new Student failed");
    return;
  }

  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);
  var cell10 = row.insertCell(9);


  count++;

  cell1.innerHTML =
    "<input type='checkbox' onclick='yellowcolor(this)' /><br /><br /><img src='down.png' width='25px' onclick='greenButton(this)'/>";
  cell2.innerHTML = "Student " + count;
  cell3.innerHTML = "Teacher " + count;
  cell4.innerHTML = "Approved ";
  cell5.innerHTML = "Fall";
  cell6.innerHTML = "TA";
  cell7.innerHTML = "45679";
  cell8.innerHTML = "100%";
  cell9.innerHTML =
    "<button id= 'deletebtn' style='display: none;' onclick='deleteRow(this)'>Delete</button>";
  cell10.innerHTML =
    "<button id= 'editbtn' style='display: none;' onclick='editRow(this)'>Edit</button>";
  alert("Record Added Successfully!!");
  var addRow = table.insertRow(-1);
  var celldetail = addRow.insertCell(0);
  celldetail.innerHTML =
    "<tr class='dropDownTextArea' style='display:none;'> <td colspan='8'> Advisor:<br /><br /> Award Details<br /> Summer 1-2014(TA)<br /> Budget Number: <br /> Tuition Number: <br /> Comments:<br /><br /><br /> Award Status:<br /><br /><br /></td></tr>";
}

function deleteRow(obj) {
  obj.parentNode.parentNode.remove();
  alert("Record Deleted Successfully!!");
  count--;
}

function editRow(obj) {
  alert("Edit the details...");
}

function yellowcolor(obj) {
  var tableRow = obj.parentNode.parentNode;
  tableRow.style.backgroundColor = obj.checked ? "yellow" : "white";
  if (tableRow.cells[8].childNodes[0].nodeName == "#text") {
    tableRow.cells[8].childNodes[1].style.display = obj.checked
      ? "block"
      : "none";
    tableRow.cells[9].childNodes[1].style.display = obj.checked
      ? "block"
      : "none";
  } else {
    tableRow.cells[8].childNodes[0].style.display = obj.checked
      ? "block"
      : "none";
    tableRow.cells[9].childNodes[0].style.display = obj.checked
      ? "block"
      : "none";
  }

  changeButtonColor();
}

function changeButtonColor() {
  var rows = document.getElementsByTagName("input");
  var is_checked = false;

  for (let i = 0; i < rows.length; i++) {
    if (rows[i].type == "checkbox") {
      is_checked = rows[i].checked;
      if (is_checked) {
        break;
      }
    }
  }
  var btn = document.getElementById("button");
  btn.style.backgroundColor = is_checked ? "orange" : "gray";
  btn.style.backgroundColor = is_checked
    ? (btn.disabled = false)
    : (btn.disabled = true);
}
