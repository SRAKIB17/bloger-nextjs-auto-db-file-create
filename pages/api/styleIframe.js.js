
export default async function handler(req, res) {
  const { post_id } = req.query;
  const { postBody } = req.body

  try {

    const codeCopyJsCode = `

    const codes = document.getElementsByTagName('code');
    for (const code of codes) {
        code.style.width = '100%';
        const div = document.createElement('div');
        const codeDiv = '<div class="codeParent"><div class="codeHeader"><div class="codeDot"><div></div><div></div><div></div></div><div><button onclick="copyCodeHandle()"><p>Copy</p><p style="display:none">Copied</p></button></div></div><div class="codePreview"><textarea readonly class="textCode"  style="line-height: 25px;">' +code?.innerHTML+ '</textarea></div></div>'
        div.innerHTML = codeDiv;
        code.style.display = 'none';
        code.parentElement.appendChild(div);
    }
    const copyCodeHandle = () => {
      const copyMsg = event.target.parentElement.getElementsByTagName('p')[0]
      copyMsg.style.display = 'none'
      const copiedMsg = event.target.parentElement.getElementsByTagName('p')[1]
      console.log(copiedMsg)
      copiedMsg.style.display = 'block'
      setTimeout(() => {
          copiedMsg.style.display = 'none'
          copyMsg.style.display = 'block'
      }, 1000);
      const aa = event.target.parentElement.parentElement.parentElement.parentElement.querySelector('.textCode').select()
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
