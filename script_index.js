window.onload = function() {
    const table = document.querySelector('table');
    const rows = document.querySelectorAll('tr');
    const rowsArray = Array.from(rows);

    table.addEventListener('click', (event) => {
        const rowIndex = rowsArray.findIndex(row => row.contains(event.target));
        const columns = Array.from(rowsArray[rowIndex].querySelectorAll('td')); // make an array
        const columnIndex = columns.findIndex(column => column == event.target);
        console.log(rowIndex, columnIndex);
        switch_elems(rowIndex, columnIndex);
    })
}
// User selects a square of the grid,
// Algorithm checks if the blank is to the right, to the left, in top or on the bottom
// If it is true that the blank is beside the selected square "SWITCH THEM"
// IF it is false that the square is beside it do nothing

function switch_elems(i, j) {
    const table = document.querySelector('table'); // This Selects the Table
    const val1 = table.rows[i].cells[j].innerHTML;
    const vallCol = table.columns.cells[]
    let k = j + 1;
    let numRows = table.rows.length; // not used, but this gets num rows
    if (k > table.rows[i].cells.length - 1) {
        k = 0;
    }
    const val2 = table.rows[i].cells[k].innerHTML;

    table.rows[i].cells[j].innerHTML = val2.toString();
    table.rows[i].cells[k].innerHTML = val1.toString();
}

