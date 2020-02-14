let fname, lname;
let table = document.getElementById("myTable");
let btn = document.getElementById("btnAdd");
let i;

function check(){
    if(btn.innerText === "ADD") {
        add();
    }
    else {
        update();
    }
}

function add() {
    fname = document.getElementById("firstname")
    lname = document.getElementById("lastname")

    let rowCount = table.rows.length,
        row = table.insertRow(rowCount),
        fnameCell = row.insertCell(0),
        lnameCell = row.insertCell(1),
        editCell = row.insertCell(2),
        deleteCell = row.insertCell(3);

    fnameCell.innerHTML = fname.value;
    lnameCell.innerHTML = lname.value;
    editCell.innerHTML = '<span onclick="updateRow(this)"><i class="fa fa-pencil" aria-hidden="true"></i></span>';
    deleteCell.innerHTML = '<span onclick="deleteTableRow(this)"><i class="fa fa-trash" aria-hidden="true"></i></span>';

    fname.value = '';
    lname.value = '';

}

function update() {
    let objCells = table.rows.item(i).cells;

    objCells.item(0).innerHTML = fname.value;
    objCells.item(1).innerHTML = lname.value;

    fname.value = '';
    lname.value = '';

    btn.innerText = "ADD";
}

function deleteTableRow(r) {
    i = r.parentNode.parentNode.rowIndex;
    table.deleteRow(i);
}

function updateRow(r) {

    btn.innerText = "UPDATE";

    i = r.parentNode.parentNode.rowIndex;
    let objCells = table.rows.item(i).cells;

    fname.value = objCells.item(0).innerHTML;
    lname.value = objCells.item(1).innerHTML;
}