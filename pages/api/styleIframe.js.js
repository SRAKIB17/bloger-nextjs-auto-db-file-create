
export default async function handler(req, res) {
  const { post_id } = req.query;
  const { postBody } = req.body

  try {

    const codeCopyJsCode = `

    const codes = document.getElementsByTagName('code');
    for (const code of codes) {
        code.style.width = '100%';
        const div = document.createElement('div');
        const codeDiv = '<div class="codeParent"><div class="codeHeader"><div class="codeDot"><div></div><div></div><div></div></div><div><button onclick="copyCodeHandle()">copy</button></div></div><div class="codePreview"><textarea class="textCode"  style="line-height: 25px;">' +code?.innerHTML+ '</textarea></div></div>'
        div.innerHTML = codeDiv;
        code.style.display = 'none';
        code.parentElement.appendChild(div);
    }
    const copyCodeHandle = () => {
        const aa = event.target.parentElement.parentElement.parentElement.querySelector('.textCode').select()
        document.execCommand('copy')
    }
`
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    const { js } = req.query;
    if (js === 'code-copy') {
      res.write(codeCopyJsCode);
    }
    else {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write("defaultStyle");
    }
    res.end();
  }
  finally {

  }
}
