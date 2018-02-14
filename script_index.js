
/*
 * See https://stackoverflow.com/questions/45656949/how-to-return-the-row-and-column-index-of-a-table-cell-by-clicking
 * which includes a Jquery solution too.
 */
let x = document.getElementById("blank").parentNode.rowIndex;
let y = document.getElementById("blank").cellIndex;

window.onload = function() {
    const table = document.querySelector('table');   // Selects the Table Class
    const rows = document.querySelectorAll('tr');    // Selects the tr Class
    const rowsArray = Array.from(rows);              // Array from the rows in the table
    document.getElementById("p2").innerHTML = "Blank value is Initially: " + x + ", " + y;

    table.addEventListener('click', (event) => {
        const rowIndex = rowsArray.findIndex(row => row.contains(event.target));
        const columns = Array.from(rowsArray[rowIndex].querySelectorAll('td'));
        const columnIndex = columns.findIndex(column => column == event.target);
        console.log(rowIndex, columnIndex);
        switch_elems(rowIndex, columnIndex);

    })
};

function switch_elems(i, j) {
    const table = document.querySelector('table');
    if(valid_click(i,j) === false)
    {
        document.getElementById("p1").innerHTML = "Invalid| " + "Blank Value(x,y):" + x + "," + y + "| Clicked Value(x,y):" + i + "," + j;
        return;
    }

    //Vertical
    //Top
    if(i === (x - 1) && j === y && valid_click(i,j) === true)
    {
        let empty_val = table.rows[i].cells[j].innerHTML; // new spot clicked is moving too  (B)
        let clicked_val = table.rows[x].cells[y].innerHTML; // E
        table.rows[i].cells[j].innerHTML = clicked_val.toString();
        table.rows[x].cells[y].innerHTML = empty_val.toString();
        x = x - 1;
         document.getElementById("p1").innerHTML = "Valid| " + "Blank Value(x,y):" + x + "," + y + "| Clicked Value(x,y):" + i + "," + j;
        return;
    }

    //Bottom
    if(i === (x + 1) && j === y && valid_click(i,j) === true)
    {
        let empty_val = table.rows[i].cells[j].innerHTML; // new spot clicked is moving too  (B)
        let clicked_val = table.rows[x].cells[y].innerHTML; // E
        table.rows[i].cells[j].innerHTML = clicked_val.toString();
        table.rows[x].cells[y].innerHTML = empty_val.toString();
        x = x + 1;
        document.getElementById("p1").innerHTML = "Valid| " + "Blank Value(x,y):" + x + "," + y + "| Clicked Value(x,y):" + i + "," + j;
        return;
    }

    //Horizontal
    //Left
    if(i === x && j === (y - 1) && valid_click(i,j) === true)
    {
        let empty_val = table.rows[i].cells[j].innerHTML; // new spot clicked is moving too  (B)
        let clicked_val = table.rows[x].cells[y].innerHTML; // E
        table.rows[i].cells[j].innerHTML = clicked_val.toString();
        table.rows[x].cells[y].innerHTML = empty_val.toString();
        y = y - 1;
        document.getElementById("p1").innerHTML = "Valid| " + "Blank Value(x,y):" + x + "," + y + "| Clicked Value(x,y):" + i + "," + j;
        return;
    }
    //Right
    if(i === x && j === (y + 1) && valid_click(i,j) === true)
    {
        let empty_val = table.rows[i].cells[j].innerHTML; // new spot clicked is moving too  (Coordinates for NEW empty)
        let clicked_val = table.rows[x].cells[y].innerHTML; // Coordinates for new
        table.rows[i].cells[j].innerHTML = clicked_val.toString();
        table.rows[x].cells[y].innerHTML = empty_val.toString();
        y = y + 1;
        document.getElementById("p1").innerHTML = "Valid| " + "Blank Value(x,y):" + x + "," + y + "| Clicked Value(x,y):" + i + "," + j;
    }
    // window.alert("Blank cell Coordinates: " + k + ", " + j);
}

function valid_click(i,j) {

    // (Right) Check to see if selected cell is to the right of the blank one
    if(i === x && j === (y + 1)) {return true;}

    // (Left) Check to see if selected cell is to the left of the blank one
    if(i === x && j === (y - 1)) {return true;}

    // (Top) Check to see if selected cell is on top of the blank one
    if(i === (x - 1) && j === y ){return true;}

    // (Bottom) Check to see if selected cell is under the blank one
    if(i === (x + 1) && j === y) {return true;}

    return false;
}

function scramble(){
    const table = document.querySelector('table');   // Selects the Table Class
    document.getElementById("p1").innerHTML = "Scrambling";
    let firstCheck = false;
    let temp1;
    let temp2;

    for (var i = table.rows.length - 1; i > 0; i--) {
        for (var j = table.rows.length - 1; j > 0; j--) {
            var m =Math.floor(Math.random() * (2));
            var n = Math.floor(Math.random() * (2));
           // window.alert("random Num 1,Num 2" + m + ", " +n);
            var temp = table.rows[i].cells[j].innerHTML;
            table.rows[i].cells[j].innerHTML = table.rows[m].cells[n].innerHTML.toString();
            table.rows[m].cells[n].innerHTML = temp.toString();

        }
    }
}

