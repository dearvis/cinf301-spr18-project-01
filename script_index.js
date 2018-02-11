/*
 * See https://stackoverflow.com/questions/45656949/how-to-return-the-row-and-column-index-of-a-table-cell-by-clicking
 * which includes a Jquery solution too.
 */
window.onload = function() {
    const table = document.querySelector('table');   // Selects the Table Class
    const rows = document.querySelectorAll('tr');    // Selects the tr Class
    const rowsArray = Array.from(rows);              // Array from the rows in the table
// What I need is for the User to Click a square beside or on top of empty square and it moves into the Empty Square
// Also Need to make a Scramble Button

    table.addEventListener('click', (event) => {
        const rowIndex = rowsArray.findIndex(row => row.contains(event.target));
    const columns = Array.from(rowsArray[rowIndex].querySelectorAll('td'));
    const columnIndex = columns.findIndex(column => column == event.target);
    console.log(rowIndex, columnIndex)
    switch_elems(rowIndex, columnIndex);
})
}

function switch_elems(i, j) {

    const table = document.querySelector('table');
    const val1 = table.rows[i].cells[j].innerHTML;

    let k = j + 1;   // J is the value to the right of the clicked area
    let numRows = table.rows.length; // not used, but this gets num rows , The answer is 3

    if (k > table.rows[i].cells.length - 1) {
        k = 1;
    }
    const val2 = table.rows[i].cells[k].innerHTML;

    table.rows[i].cells[j].innerHTML = val2.toString();
    table.rows[i].cells[k].innerHTML = val1.toString();

    const rows = document.querySelectorAll('tr');    // Selects the tr Class
    const rowsArrayBlank = Array.from(rows);
    const emptySlot = table.getElementsByClassName(' ');
    const rowIndexBlank = rowsArrayBlank.findIndex(row => row.contains(emptySlot));
    const columnsBlank = Array.from(rowsArrayBlank[rowIndexBlank].querySelectorAll('td'));
    const columnIndexBlank = columnsBlank.findIndex(column => column == emptySlot);
    window.alert("Empty Slot(i,j):" + rowIndexBlank + ", " + columnIndexBlank);



}

function valid_click(i,j){
    // Locate where the empty block is
        // Make variable empty and find i and j coordinates of it on the grid
        //




    // See if the user clicked on one of the blocks that can swap with the empty
    // If they did returns true
    // If they didn't return false
}

function puzzle_solver(i,j){
    const table = document.querySelector('table');   // Selects the Table Class
    const rows = document.querySelectorAll('tr');    // Selects the tr Class
    const rowsArray = Array.from(rows);
    const emptySlot = table.getElementsByClassName(' ');
    const rowIndex = rowsArray.findIndex(row => row.contains(emptySlot));
    const columns = Array.from(rowsArray[rowIndex].querySelectorAll('td'));
    const columnIndex = columns.findIndex(column => column == emptySlot);
    /////////////////////////////////////////////////


    // How to set emptySlot equal to the blank??

    // If Blank is on the top Row

    //If Blank is on the Middle Row

    //If Blank is on the Last Row
}