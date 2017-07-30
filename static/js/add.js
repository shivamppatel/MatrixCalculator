var matrix1;
var matrix2;
var matrixOutput;
var row1;
var col1;
var row2;
var col2;

function getDimAdd()
{
	var a = document.getElementById('colV1').value;
	var b = document.getElementById('colV2').value;
	var c = document.getElementById('rowV1').value;
	var d = document.getElementById('rowV2').value;

	if(a != 0)
	{
		if(a == b && a == c && a == d)
		{
			col1 = a;
			col2 = b;
			row1 = c;
			row2 = d;
			displayMatrix(c, a, 1);
			displayMatrix(d, b, 2);
			addButton();

		}
		else
		{
			alert("The dimensions of the two matrices are not compatible. Please, try again.");
		}
	}
}

function displayMatrix(row, col, matrixNum)
{
	var matrixHeading = document.createElement("H3");
	var t = document.createTextNode("Matrix " + matrixNum);
	matrixHeading.setAttribute("id", "formText");
	matrixHeading.appendChild(t);

	document.getElementById("matrix" + matrixNum).appendChild(matrixHeading);

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
			cellInput.setAttribute('id', "cell_" + matrixNum + "_" + r + "_"+ c);
			tblCell.appendChild(cellInput);
			
			tblRow.appendChild(tblCell);
		}

		tbl.appendChild(tblRow);
	}
	document.getElementById("matrix" + matrixNum).appendChild(tbl);
}

function addButton()
{
	var b = document.createElement("button");

	b.setAttribute('type', "button");
	b.setAttribute('onclick', "addMatrices()");
	b.innerHTML = "Add Matrices";

	document.getElementById("buttonRegion").appendChild(b);
}

function addMatrices()
{
	matrix1 = createMatrix(1);
	matrix2 = createMatrix(2);
	createOutput();
	add();
	display(matrixOutput);
	showOutput();
}

function createMatrix(m)
{
	var mat = new Array();
	for(var r = 0; r < row1; r++)
	{
		var arr = new Array();
		for(var c = 0; c < col1; c++)
		{
			arr[c] = parseInt(document.getElementById("cell_" + m + "_" + r + "_" + c).value, 10);
		}
		mat[r] = arr;
	}
	return mat;
}

function display(matrix)
{
	for(var r = 0 ; r < matrix.length; r++)
	{
		for(var c = 0; c < matrix[0].length; c++)
		{
			console.log(matrix[r][c]);
		}
	}
}

function createOutput()
{
	var mat = new Array();
	for(var r = 0; r < row1; r++)
	{
		var arr = new Array();
		for(var c = 0; c < col1; c++)
		{
			arr[c] = 0;
		}
		mat[r] = arr;
	}
	matrixOutput = mat;
}

function add()
{
	for(var r = 0; r < row1; r++)
	{
		for(var c = 0; c < col1; c++)
		{
			matrixOutput[r][c] = matrix1[r][c] + matrix2[r][c];
		}
	}
}

function showOutput()
{
	var heading = document.createElement("H1");
	heading.innerHTML = "Solution";
	heading.setAttribute('id', "formText");

	var tbl = document.createElement("table");

	for(var r = 0; r < row1; r++)
	{
		var row = document.createElement("tr");
		for(var c = 0; c < col1; c++)
		{
			var cell = document.createElement("td");
			cell.setAttribute('width', "40px");
			cell.setAttribute('id', "solutionTable");
			var t = document.createElement("P");
			t.innerHTML = matrixOutput[r][c].toString();
			t.setAttribute('id', "outputText");

			cell.appendChild(t);
			row.appendChild(cell);
		}
		tbl.appendChild(row);
	}

	tbl.setAttribute('id', "solutionTable");

	document.getElementById("resultArea").appendChild(heading);
	document.getElementById("resultArea").appendChild(tbl);
}