
export default function handler(req, res) {
  const postId = req.query;
  console.log(postId)
  const codePreview = req.body
  console.log(codePreview)
  try {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h>sfldjsfldflsdflsdfsdl</h>');
  }
  catch {

  }

  // res.end(aa);
  res.end();
}

