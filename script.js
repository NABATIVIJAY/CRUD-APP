//!initial values
var selectedrow = null;

//!form submit logic
function onFormSubmit() {
//   e.preventDefault();
  var formData = readFormData();
  insertNewRecord(formData)
  //console.log(formData)
//   if(selectedRow == null){
        
//   }
}

//!get method(Retriving the data)
function readFormData(){
    var FormData={};
    FormData["productCode"] = document.getElementById("productCode").value;
    FormData["product"] = document.getElementById("product").value;
    FormData["qty"] = document.getElementById("qty").value;
    FormData["productCode"] = document.getElementById("productCode").value;
}


//!insert the data (Post method)
function insertNewRecord(data) {
    var table = document
      .getElementById("storeList")
      .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productCode;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.product;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.qty;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.perPrice;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = "<button>Edit</button><button>Delete</button>";
  }

  //!edit and update the data (Update method)
//editing the data(get)
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("product").value = selectedRow.cells[1].innerHTML;
    document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
    document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
  }



//!edit and update the data (Update method)
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.perPrice;
  }

//!deleting the data (delete method)


//!reseting the values in form