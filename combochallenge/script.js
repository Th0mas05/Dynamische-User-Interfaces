let list = ['A', 'B', 'C', 'D'];
const content = document.getElementById("content")
/* maak een stukje script die het volgende print:

AA
AB
AC
AD
BA
BB
tot en met DD
# gebruik maximaal 6 regels
# print nu geen dubbele letters zoals (AA)
# geen bestaande combinaties (AB BA)
*/


for (let i = 0; i < list.length; i++) {
    for (let j = i; j < list.length; j++) {
      if (i !== j) {
        content.innerHTML += (list[i] + list[j] + "<br>");
      }
    }
  }

