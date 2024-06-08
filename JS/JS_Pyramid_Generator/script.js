const count = 8;
const character = "#";
const rows = [];

function padRow(rowNumber, rowCount) {
  return character.repeat(rowNumber)
}

for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow())
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);