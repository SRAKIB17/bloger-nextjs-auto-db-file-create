
export default async function handler(req, res) {
  const { post_id } = req.query;
  const { postBody } = req.body

  try {
    const defaultStyle = `
@tailwind base;
@tailwind components;
@tailwind utilities;
@import url('https://fonts.googleapis.com/css2?family=Coming+Soon&family=Fira+Code&family=Hind+Siliguri:wght@500&family=Lateef&family=Open+Sans:wght@300;500&family=Orbitron&family=Poppins:wght@500&display=swap');
html,
body {
  font-family: 'Poppins', sans-serif;
  text-align: justify;
  background-color: transparent;
}
body::-webkit-scrollbar {
  display: none;
}
 `
    const darkStyle = `
html,
body {
  color: #A9C5EF !important;
}
    `
    const whiteStyle = `
html,
body {
  color: black !important;
}
    `
    const { dark } = req.query;



    res.writeHead(200, { 'Content-Type': 'text/css' });

    if (dark === 'true') {
      res.write(darkStyle);
    }
    else if (dark === 'false') {
      res.write(whiteStyle);
    }
    else {
      res.write(defaultStyle);
    }

    res.end();
  }
  finally {

  }
}