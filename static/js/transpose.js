var origMatrix;
var row;
var col;

function getDimTranspose()
{
	row = document.getElementById("rowV").value;
	col = document.getElementById("colV").value;
	if(document.getElementById("rowV").value.length != 0 && document.getElementById("colV").value.length != 0)
	{
		display(row, col);
		addButton();
	}
}

function display(row, col)
{
	var matrixHeading = document.createElement("H3");
	var t = document.createTextNode("Original Matrix");
	matrixHeading.setAttribute("id", "matHeader");
	matrixHeading.appendChild(t);

	var tbl = document.createElement("table");
	tbl.setAttribute('id',"inputMatrix");

	for(var r = 0; r < row; r++)
	{
		var tblRow = document.createElement("tr");

		for(var c = 0; c < col; c++)
		{
			var tblCell = document.createElement("td");			
			var cellInput = document.createElement("input");

			cellInput.setAttribute('type',"number");
			cellInput.setAttribute('name',"matrixInputCell");
			cellInput.setAttribute('id', "cell_" + r + "_"+ c);
			tblCell.appendChild(cellInput);
			
			tblRow.appendChild(tblCell);
		}

		tbl.appendChild(tblRow);
	}
	document.getElementById("matrixInputRegion").appendChild(tbl);
}

function addButton()
{
	var b = document.createElement("button");

	b.setAttribute('type', "button");
	b.setAttribute('onclick', "transpose()");
	b.innerHTML = "Transpose Matrix";

	document.getElementById("matrixInputRegion").appendChild(b);
}

function transpose()
{
	origMatrix = new Array();

	for(var r = 0; r < row; r++)
	{
		var tempRow = new Array();
		for(var c = 0; c < col; c++)
		{
			tempRow[c] = document.getElementById("cell_" + r + "_" + c).value;
		}
		origMatrix[r] = tempRow;
	}
	displayOutput();
}

function displayOutput()
{
	var heading = document.createElement("H1");
	heading.innerHTML = "Solution";

	var tbl = document.createElement("table");

	for(var c = 0; c < col; c++)
	{
		var tRow = document.createElement("tr");
		for(var r = 0; r < row; r++)
		{
			var cell = document.createElement("td");
			cell.setAttribute('id', "solutionTable");
			var txt = document.createElement("P");
			txt.innerHTML = origMatrix[r][c].toString();
			txt.setAttribute('id', "outputText");
			cell.appendChild(txt);
			tRow.appendChild(cell);
		}
		tbl.appendChild(tRow);
	}

	tbl.setAttribute('id', "solutionTable");

	document.getElementById("resultArea").appendChild(heading);
	document.getElementById("resultArea").appendChild(tbl)
}