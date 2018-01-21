function createTable()
{

var rn = 0;
var cn = 0;
var color = "";
var color2 = "";
var rows = document.getElementsByTagName("input")[0]
var columns = document.getElementsByTagName("input")[1]
var bgcolor = document.getElementsByTagName("input")[2]
var txtcolor = document.getElementsByTagName("input")[3]
 console.log(rows.value);
 rn += eval(rows.value);
 cn += eval(columns.value);
 color2 +=bgcolor.value;
 color +=txtcolor.value;

var table = ("<center><table border='1px' width='100%' cellspacing='2' cellpadding='2' style='cursor:pointer;'>");

for(var a = 1; a < parseInt(rn+1); a++) {
 
table +=("<tr>");
for(var b = 1; b < parseInt(cn+1); b++) {
	
table +=("<td>" 
		+ a*b + "</td>");
	}
	table ==("</tr>");
}
table +=("</table></center>");
document.getElementById('myTable').style.backgroundColor = color2;

document.getElementById('myTable').style.color = color;

document.getElementById('myTable').innerHTML = table ;

}