// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const aa = `
<!DOCTYPE html>
<html>
<head>
<style>
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}

@keyframes example {
  0%   {background-color: red;}
  25%  {background-color: yellow;}
  50%  {background-color: blue;}
  100% {background-color: green;}
}
</style>
</head>


<body data-theme="light" class="text-white">

<h1>CSS Animation</h1>
// 
<div></div>

<p><b>Note:</b> When an animation is finished, it goes back to its original style.</p>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<h2>Demo External JavaScript</h2>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

<p>This example links to "myScript.js".</p>
<p>(myFunction is stored in "myScript.js")</p>

<script src="https://www.w3schools.com/js/myScript.js"></script>

</body>
</html>

`
const aaaaaaa = `







`
export default function handler(req, res) {
  const codePreview = req.body
  console.log(codePreview)
  try {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(aa);
  }
  catch {

  }

  // res.end(aa);
  res.end();
}

