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
	var matrixHeading = document.createElement("P");
	var t = document.createTextNode("Matrix " + matrixNum);
	matrixHeading.setAttribute("id", "formText");
	matrixHeading.appendChild(t);

	document.getElementById("matrixCalcRegion").appendChild(matrixHeading);

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

			tblCell.appendChild(cellInput);
			
			tblRow.appendChild(tblCell);
		}

		tbl.appendChild(tblRow);
	}

	document.getElementById("matrixCalcRegion").appendChild(tbl);
}

function subButton()
{
	var b = document.createElement("button");

	b.setAttribute('type', "button");
	b.setAttribute('onclick', "subMatrices()");
	b.innerHTML = "Add Matrices";

	document.getElementById("matrixCalcRegion").appendChild(b);

}

function subMatrices()
{
	alert("yes");
}