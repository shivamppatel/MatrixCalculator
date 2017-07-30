var matrix1;
var matrix2;
var row;
var col;

var output;

function getDimSub()
{
	var a = document.getElementById('colV1').value
	var b = document.getElementById('colV2').value
	var c = document.getElementById('rowV1').value
	var d = document.getElementById('rowV2').value

	var temp = check(a, b, c ,d);

	if(temp)
	{
		if(a == b && a == c && a == d)
		{
			row = c;
			col = b;
			displayMatrix(c, a, 1);
			displayMatrix(d, b, 2);
			subButton();
		}
		else
		{
			alert("The dimensions of the two matrices are not compatible. Please, try again.");
		}
	}
}

function check(a, b, c, d)
{
	var e = a > 0;
	var f = b > 0;
	var g = c > 0;
	var h = d > 0;

	if((e && f) && (g && h))
	{
		return true;
	}
	return false;
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
			cellInput.setAttribute('id',"cell_" + matrixNum + "_" + r + "_"+ c);

			tblCell.appendChild(cellInput);
			
			tblRow.appendChild(tblCell);
		}

		tbl.appendChild(tblRow);
	}

	document.getElementById("matrix" + matrixNum).appendChild(tbl);
}

function subButton()
{
	var b = document.createElement("button");

	b.setAttribute('type', "button");
	b.setAttribute('onclick', "subMatrices()");
	b.innerHTML = "Add Matrices";

	document.getElementById("matrixCalcRegion").appendChild(b);

}

function display()
{
	var heading = document.createElement("H1");
	heading.innerHTML = "Solution";
	heading.setAttribute('id', "formText");

	var tbl = document.createElement("table");

	for(var r = 0; r < row; r++)
	{
		var tempRow = document.createElement("tr");

		for(var c = 0; c < col; c++)
		{
			var cell = document.createElement("td");
			cell.setAttribute('width', "40px");
			cell.setAttribute('id', "solutionTable");
			var t = document.createElement("P");
			t.innerHTML = output[r][c].toString();
			t.setAttribute('id', "outputText");

			cell.appendChild(t);
			tempRow.appendChild(cell);
		}
		tbl.appendChild(tempRow);
	}

	tbl.setAttribute('id', "solutionTable");

	document.getElementById("resultArea").appendChild(heading);
	document.getElementById("resultArea").appendChild(tbl);
}

function subMatrices()
{
	matrix1 = fillMatrix(1);
	matrix2 = fillMatrix(2);
	output = fillOutput();
	display();
}

function fillMatrix(matrixNum)
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

function fillOutput()
{
	var matrix = new Array();

	for(var r = 0; r < row; r++)
	{
		var tempRow = new Array();
		for(var c = 0; c < col; c++)
		{
			console.log(eval(matrix1[r][c] - matrix2[r][c]));
			tempRow[c] = eval(matrix1[r][c] - matrix2[r][c]);
		}
		matrix[r] = tempRow;
	}
	return matrix;	
}