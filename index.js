const fs = require("fs");
const { marked } = require("marked");

const md = fs.readFileSync("README.md", "utf-8");

const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Wild rift 7.1 </title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  ${marked(md)}
</body>
</html>
`;

fs.writeFileSync("index.html", html);

console.log("HTML gerado!");