
export default async function handler(req, res) {
  const { post_id } = req.query;
  const { postBody } = req.body

  try {
    const defaultStyle = `
      @import url('https://fonts.googleapis.com/css2?family=Coming+Soon&family=Fira+Code&family=Hind+Siliguri:wght@500&family=Lateef&family=Open+Sans:wght@300;500&family=Orbitron&family=Poppins:wght@500&display=swap');
      html,
      body {
        word-wrap: break-word;
        white-space: pre-line;
        font-family: 'Poppins', sans-serif;
        /* text-align: justify; */
        background-color: transparent;
      }
      body *{
        overflow:auto;
      }
      body::-webkit-scrollbar {
        display: none;
      }
      * ::-webkit-scrollbar {
        display: none;
      }
      :root {
        --bg-color: rgb(27, 27, 27);
        /* --bg-color: rgb(65 65 65); */
    }

    .codeParent {
        position: relative;
        overflow: hidden;
        overflow-x: hidden;
        max-width: 100%;
        padding: 20px 15px;
        background-color: var(--bg-color);
        border-radius: 10px;
        color: white;
        border: 20px solid silver;
        height: 250px;
    }

    .codeParent::-webkit-scrollbar {
        display: none;
    }

    .codeParent * {
        overflow: auto;
    }

    .codePreview {
        display: flex;
        height: 100%;
        overflow: auto !important;
    }

    

  
    .codePreview::-webkit-scrollbar {
        display: none;
    }

    .codeParent textarea {
        font-weight: lighter;
        font-size: 15px;
        line-height: 25px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        border: none;
        border-left: 1px solid white;
        background-color: var(--bg-color);
        color: white;
        width: 150% !important;
        overflow: auto !important;
        outline: none;
    }


    .codeParent textarea::selection {
        background-color: aliceblue;
        color: rgb(255, 0, 0);
    }

    .codeParent textarea::-webkit-scrollbar {
        display: none;
    }

    .codeHeader {
        border-bottom: 2px solid silver;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 5px 10px 5px;
    }

    .codeHeader>div>button {
        background-color: transparent;
        color: white;
        border: 2px solid grey;
        border-radius: 10px;
    }

    .codeHeader>div>button:active {
        font-size: 12px;
        border: 2px solid rgb(183, 183, 183);
    }

    .codeHeader>div>button:hover {
        background-color: rgb(48, 48, 48);
    }

    .codeDot {
        display: flex;
        gap: 8px;
    }

    .codeDot div {
        border-radius: 50%;
        background-color: white;
        width: 12px;
        height: 12px;
    }

    .codeDot div:nth-child(1) {
        background-color: rgb(243, 20, 255);
    }

    .codeDot div:nth-child(2) {
        background-color: rgb(255, 173, 20);
    }

    .codeDot div:nth-child(3) {
        background-color: rgb(75, 255, 20);
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


    const videoPostStyle = `

    iframe,
    video,
    embed,
    object {
       width: 100% !important;
       margin-bottom: 2px;
       height: 250px !important;
    }
    `

    const { dark, video } = req.query;
    res.writeHead(200, { 'Content-Type': 'text/css' });

    if (dark === 'true') {
      res.write(darkStyle);
    }
    else if (dark === 'false') {
      res.write(whiteStyle);
    }
    else if (video === 'video') {
      res.write(videoPostStyle);
    }
    else {
      res.write(defaultStyle);
    }
    res.end();
  }
  finally {

  }
}
