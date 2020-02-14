let fname = document.getElementById("firstname"),
    lname = document.getElementById("lastname"),
    btn = document.getElementById("btnAdd"),
    table = document.getElementById("myTable"),
    userArr = new Array(),
    countID = 0,
    i;

function createObj(fname, lname) {
    return userObj = {
        "id"   : countID++,
        "fname": fname,
        "lname": lname
    }
}

function check() {
    if(btn.innerText === "ADD") {
        add();
    }
    else {
        update();
    }
}

function add() {
    userArr.push(createObj(fname.value, lname.value));
    
    fname.value = '';
    lname.value = '';
}

function show() {
    for (const x of userArr) {

    const rowCount = table.rows.length;
    let row = table.insertRow(rowCount),
        fnameCell = row.insertCell(0),
        lnameCell = row.insertCell(1),
        editCell = row.insertCell(2),
        deleteCell = row.insertCell(3);

                    fnameCell.innerHTML = x.fname;
            lnameCell.innerHTML = x.lname;
            editCell.innerHTML = '<span onclick="updateRow(this)"><i class="fa fa-pencil" aria-hidden="true"></i></span>';
            deleteCell.innerHTML = '<span onclick="deleteTableRow(this)"><i class="fa fa-trash" aria-hidden="true"></i></span>';
        }
}

function update() {
    userArr[i-1].fname = fname.value;
    userArr[i-1].lname = lname.value;
    
    let objCells = table.rows.item(i).cells;

    objCells.item(0).innerHTML = userArr[i-1].fname;
    objCells.item(1).innerHTML = userArr[i-1].lname;

    fname.value = '';
    lname.value = '';

    btn.innerText = "ADD";
    
}

function updateRow(r) {

    btn.innerText = "UPDATE";

    i = r.parentNode.parentNode.rowIndex;
    let objCells = table.rows.item(i).cells;

    fname.value = objCells.item(0).innerHTML;
    lname.value = objCells.item(1).innerHTML;
}

function deleteTableRow(r) {
    i = r.parentNode.parentNode.rowIndex;
    table.deleteRow(i);
}
