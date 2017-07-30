var matrix;
var row;
var col;

function getDim()
{
	row = document.getElementById("rowV").value;
	col = document.getElementById("colV").value;
	if(row != 0 && row == col)
	{
		createMatrix(row, col);
	}
	else if(row != col)
	{
		alert("The matrix must be square. (Dimensions must be equal)");
	}
}

function createMatrix(row, col)
{
	var matrixHeading = document.createElement("H1");
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

	detButton();
}

function detButton()
{
	var b = document.createElement("button");

	b.setAttribute('type', "button");
	b.setAttribute('onclick', "calcDet()");
	b.innerHTML = "Calculate Determinant";

	document.getElementById("matrixInputRegion").appendChild(b);
}

function calcDet()
{
	fillMatrix();
	var positive = true;
	var det = 0;

	if(row == 2)
	{
		det = detof2();
	}
	else if(row == 3)
	{
		det = detof3();
	}
	else if(row == col)
	{
		positive = diagonalize(matrix);
		det = calculation(matrix, positive);
	}

	display(det);
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

function diagonalize(temp)
{
	var positive = true;
	var x = 0;
	for(var r = 0; r < temp.length; r++)
	{
		var last = temp.length - 1;
		for(var c = x; c < last; c++)
		{
			if(temp[r][c] == 0)
			{
				swap(r, last, temp);
				positive = !positive;
				last--;
			}
		}
		for(var row = x + 1; row < temp.length; row++)
		{
			if(temp[row][x] != 0)
			{
				zeroOut(row, x, temp);
			}
		}
		x++;
	}
	return positive;
}

function swap(row1, row2, temp)
{
	var t = temp[row1];
	temp[row1] = temp[row2];
	temp[row2] = t;
}

function zeroOut(row, col, temp)
{
	for(var r = row; r < temp.length; r++)
	{
		var ratio = temp[r][col] / temp[row - 1][col];
		for(var c = col; c < temp[r].length; c++)
		{
			temp[r][c] = eval(temp[r][c] + (-1 * ratio * temp[row - 1][c]));
		}
	}
}

function detof2()
{
	return (matrix[0][0] * matrix[1][1]) - (matrix[0][1] * matrix[1][0]);
}

function detof3()
{
	var a = matrix[0][0] * matrix[1][1] * matrix[2][2];
	var b = matrix[1][0] * matrix[2][1] * matrix[0][2];
	var c = matrix[0][1] * matrix [1][2] * matrix[2][0];
	var d = matrix[0][2] * matrix[1][1] * matrix[2][0];
	var e = matrix[1][2] * matrix[2][1] * matrix[0][0];
	var f = matrix[0][1] * matrix[1][0] * matrix [2][2];
	return (a + b + c) - (d + e + f);
}

function calculation(temp, positive)
{
	var det = 1;
	if(!positive)
	{
		det = -1;
	}
	var c = 0;
	for(var r = 0; r < row; r++)
	{
		det = eval(det * temp[r][c]);
		c++;
	}
	return det;	
}

function display(det)
{
	var header = document.createElement("H3");
	header.innerHTML = "Solution";
	header.setAttribute('id', "formText");
	var txt = document.createElement("P");
	txt.innerHTML = det.toString();
	txt.setAttribute('id', "formText");
	document.getElementById("resultArea").appendChild(header);
	document.getElementById("resultArea").appendChild(txt);
}

function fillMatrix()
{
	matrix = new Array();

	for(var r = 0; r < row; r++)
	{
		tempRow = new Array();

		for(var c = 0; c < col; c++)
		{
			tempRow[c] = document.getElementById("cell_" + r + "_"+ c).value;
		}
		matrix[r] = tempRow;
	}
}