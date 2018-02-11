/*
 * See https://stackoverflow.com/questions/45656949/how-to-return-the-row-and-column-index-of-a-table-cell-by-clicking
 * which includes a Jquery solution too.
 */
window.onload = function() {
    const table = document.querySelector('table');   // Selects the Table Class
    const rows = document.querySelectorAll('tr');    // Selects the tr Class
    const rowsArray = Array.from(rows);              // Array from the rows in the table


    table.addEventListener('click', (event) => {
        const rowIndex = rowsArray.findIndex(row => row.contains(document.getElementById("blank")));
    const columns = Array.from(rowsArray[rowIndex].querySelectorAll('td'));
    const columnIndex = columns.findIndex(column => column == document.getElementById("blank"));
    console.log(rowIndex, columnIndex);
    switch_elems(rowIndex, columnIndex);
})
}

function switch_elems(i, j) {

    const table = document.querySelector('table');
    const val1 = table.rows[i].cells[j].innerHTML;

    let k = i + 1;   // J is the value to the right of the clicked area
    let numRows = table.rows.length; // not used, but this gets num rows , The answer is 3

    if (k > table.rows[i].cells.length - 1) {
        k = 1;
    }
    const val2 = table.rows[k].cells[j].innerHTML;

    table.rows[i].cells[j].innerHTML = val2.toString(); // Slot You Clicked on (Should sty the same)
    table.rows[k].cells[j].innerHTML = val1.toString();  // New Slot that will replace slot you clicked
    window.alert("Blank cell Coordinates: " + i + ", " + j);

}

function valid_click(i,j,v,h){
    // const table = document.querySelector('table');
    // const clickedCell = table.rows[i].cells[j].innerHTML;
    //
    // const blank = table.rows[v].cells[h].innerHTML;
    //  blank_x = i - 1;
    //  blank_y = i + 1;
    //  clicked_x = i;
    //  clicked_y = j;
    // let numRows = table.rows.length;
//Right of Blank (J=j-1, i=i)

    //Left of Blank
    //Top of Blank
    //Bottom of Blank

    // Allow User to click a slot
    // Check to the right,
    // the left,
    // on top,
    // on bottom
    // If the blank is on the top or bottom return true, else return false
}

function puzzle_solver(i,j){
    // const table = document.querySelector('table');   // Selects the Table Class
    // const rows = document.querySelectorAll('tr');    // Selects the tr Class
    // const rowsArray = Array.from(rows);
    // const emptySlot = table.getElementsByClassName(' ');
    // const rowIndex = rowsArray.findIndex(row => row.contains(emptySlot));
    // const columns = Array.from(rowsArray[rowIndex].querySelectorAll('td'));
    // const columnIndex = columns.findIndex(column => column == emptySlot);
    /////////////////////////////////////////////////


    // How to set emptySlot equal to the blank??

    // If Blank is on the top Row

    //If Blank is on the Middle Row

    //If Blank is on the Last Row
}