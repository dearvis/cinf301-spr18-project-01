/*
 * See https://stackoverflow.com/questions/45656949/how-to-return-the-row-and-column-index-of-a-table-cell-by-clicking
 * which includes a Jquery solution too.
 */
window.onload = function() {
    const table = document.querySelector('table');   // Selects the Table Class
    const rows = document.querySelectorAll('tr');    // Selects the tr Class
    const rowsArray = Array.from(rows);              // Array from the rows in the table


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
    const val1 = table.rows[i].cells[j].innerHTML; // Cell that is clicked on


        var tr = document.getElementById("blank").parentNode.rowIndex;
        var td = document.getElementById("blank").cellIndex;
    window.alert(tr + "," + td);



   // const empty = document.getElementById("blank");
    let y;
    let k = j + 1;   // J is the value to the right of the clicked area
    let numRows = table.rows.length; // not used, but this gets num rows , The answer is 3

    if (k > table.rows[i].cells.length - 1) {
        k = 1;
    }
    if (val1 == empty) {
        const val2 = table.rows[i].cells[k].innerHTML;
        table.rows[i].cells[j].innerHTML = val2.toString(); // Slot You Clicked on (Should sty the same)
        table.rows[i].cells[k].innerHTML = val1.toString();  // New Slot that will replace slot you clicked
    }
    if (val1 !== empty) {
    window.alert(empty);
    }


   // window.alert("Blank cell Coordinates: " + k + ", " + j);

}

function valid_click(i,j) {
    // Allow User to click a slot,
    // Check to the right of blank
    // const val2 = table.rows[x].cells[y].innerHTML;
    // var elgible_x;
    // var elgible_y;
    // (Right) Check to see if I_blank == I_elgible && j_blank == j_elgible + 1
    // (Left) Check to see if I-Blank == I_elgible && J_blank ==J_elgible - 1
    // (Top) Check to see if I_blank == I_elgible - 1 && J_blank == J_elgible
    // (Bottom) Check to see if I_blank == I_elgible + 1 && J_blank == J_elgible

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