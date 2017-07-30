var matrix1;
var matrix2;
var row1;
var col1;
var row2;
var col2;

var output;

function getDim()
{
	col1 = document.getElementById('colV1').value;
	col2 = document.getElementById('colV2').value;
	row1 = document.getElementById('rowV1').value;
	row2 = document.getElementById('rowV2').value;

	if(col1 == row2)
	{
		displayMatrix(row1, col1, 1);
		displayMatrix(row2, col2, 2);
		createButton();
	}
	else
	{
		alert("The dimensions of the two matrices are not compatible. Please, try again.");
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

function createButton()
{
	var b = document.createElement("button");

	b.setAttribute('type', "button");
	b.setAttribute('onclick', "multiplyMatrices()");
	b.innerHTML = "Multiply Matrices";

	document.getElementById("buttonRegion").appendChild(b);
}

function multiplyMatrices()
{
	console.log("Yes");
	matrix1 = fillMatrix(row1, col1, 1);
	matrix2 = fillMatrix(row2, col2, 2);
	output = createOutput();
	multiply(matrix1, matrix2);
	display();
}

function show(matrix)
{
	for(var r = 0 ; r < matrix.length; r++)
	{
		for(var c = 0; c < matrix[0].length; c++)
		{
			console.log(matrix[r][c]);
		}
	}
}

function multiply(mat1, mat2)
{
	for(var r = 0; r < row1; r++)
	{
		for(var c = 0; c < col2; c++)
		{
			output[r][c] = getSum(r, c);
		}
	}
}

function getSum(r, c)
{
	var sum = 0;
	for(var count = 0; count < row2; count++)
	{
		sum = eval(sum + (matrix1[r][count] * matrix2[count][c]));
	}
	return sum;
}

function fillMatrix(row, col, matrixNum)
{
	var matrix = new Array();

	for(var r = 0; r < row; r++)
	{
		var tempRow = new Array();
		for(var c = 0; c < col; c++)
		{
			tempRow[c] = document.getElementById("cell_" + matrixNum + "_" + r + "_"+ c).value;
		}

		matrix[r] = tempRow;
	}

	return matrix;
}

function createOutput()
{
	var arr = new Array();

	for(var r = 0; r < row1; r++)
	{
		var tempRow = new Array();
		for(var c = 0; c < col2; c++)
		{
			tempRow[c] = 0;
		}
		arr[r] = tempRow;
	}

	return arr;
}

function display()
{
	var heading = document.createElement("H1");
	heading.innerHTML = "Solution";
	heading.setAttribute('id', "formText");

	var tbl = document.createElement("table");

	for(var r = 0; r < row1; r++)
	{
		var row = document.createElement("tr");
		for(var c = 0; c < col2; c++)
		{
			var cell = document.createElement("td");
			cell.setAttribute('width', "40px");
			cell.setAttribute('id', "solutionTable");
			var t = document.createElement("P");
			t.innerHTML = output[r][c].toString();
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