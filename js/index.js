var arrHead = new Array();	// array for header.
arrHead = ['Product Name', 'Cost per unit', 'Number of products'];

// first create TABLE structure with the headers. 
function createTable() {
    var prodTable = document.createElement('table');
    prodTable.setAttribute('id', 'prodTable'); // table id.

    var tr = prodTable.insertRow(-1);
    for (var h = 0; h < arrHead.length; h++) {
        var th = document.createElement('th'); // create table headers
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }

    var div = document.getElementById('cont');
    div.appendChild(prodTable);  // add the TABLE to the container.
}

// now, add a new to the TABLE.
function addRow() {
    var empTab = document.getElementById('prodTable');

    var rowCnt = empTab.rows.length;   // table row count.

    if (rowCnt == 1)
        addCalculateBtn();
    var tr = empTab.insertRow(rowCnt); // the table row.
    tr = empTab.insertRow(rowCnt);


    var td = document.createElement('td');
    td = tr.insertCell(0);
    var ele = document.createElement('input');
    ele.setAttribute('type', 'text');
    ele.setAttribute('value', '');

    td.appendChild(ele);

    td = document.createElement('td');
    td = tr.insertCell(1);
    ele = document.createElement('input');
    ele.setAttribute('type', 'number');
    ele.setAttribute('value', '');

    td.appendChild(ele);

    td = document.createElement('td');
    td = tr.insertCell(2);
    ele = document.createElement('input');
    ele.setAttribute('type', 'number');
    ele.setAttribute('value', '');

    td.appendChild(ele);

}

function addCalculateBtn() {
    var btnDiv = document.getElementById("calculateBtn");
    var button = document.createElement('input');

    // set input attributes.
    button.setAttribute('type', 'button');
    button.setAttribute('id', 'calBtn');
    button.setAttribute('value', 'Calculate Total');

    // add button's 'onclick' event.
    button.setAttribute('onclick', 'calculateTotal()');
    button.style = "display:inline;";


    btnDiv.appendChild(button);

    var label = document.createElement('h6');
    label.innerText = "Total Bill: ";
    label.style = "display:inline; margin-left:50%;";

    btnDiv.appendChild(label);

    var totalBill = document.createElement('p');
    totalBill.setAttribute('id', 'totalBill');
    totalBill.style = "display:inline;";
    btnDiv.appendChild(totalBill);


}

// function to extract and calculate total bill.
function calculateTotal() {
    var myTab = document.getElementById('prodTable');
    var total = 0;

    // loop through each row of the table.
    for (row = 1; row < myTab.rows.length - 1; row++) {
        // loop through each cell in a row.
        for (c = 0; c < myTab.rows[row].cells.length; c++) {
            var element = myTab.rows.item(row);
            if (c == 1) {
                total = total + (element.cells[c].childNodes[0].value * element.cells[c + 1].childNodes[0].value);
                c++;
            }
        }
    }
    // The Total bill.
    document.getElementById('totalBill').innerHTML = total;
}