
export default async function handler(req, res) {
  const { post_id } = req.query;
  const { postBody } = req.body

  try {
    const defaultStyle = `
      @import url('https://fonts.googleapis.com/css2?family=Coming+Soon&family=Fira+Code&family=Hind+Siliguri:wght@500&family=Lateef&family=Open+Sans:wght@300;500&family=Orbitron&family=Poppins:wght@500&display=swap');
      html,
      body {
        overflow-y: auto !important;
        overflow-x: hidden !important;
        font-family: 'Poppins', sans-serif;
        text-align: justify;
        background-color: transparent;
      }
      body:first-child {
        /*  word-wrap: break-word;
        white-space: pre-line !important; */
      }
      body *{
        overflow-y: auto !important;
        overflow-x: auto !important;
        overflow:auto !important;
      }
      body::-webkit-scrollbar {
        display: none;
      }
      * ::-webkit-scrollbar {
        display: none;
      }

      .plaintext {
        word-wrap: break-word !important;
        white-space: pre-line !important;
      }
      :root {
        --bg-color: rgb(27, 27, 27);
        /* --bg-color: rgb(65 65 65); */
        --copyBtnBg: #0D376D;
    }

    .codeParent {
        padding: 4px 4px;
    }

    .codePreview {}

    .copyBtn {
        color: white;
        border-radius: 5px;
        margin-bottom: 4px;
        background-color: var(--copyBtnBg);
    }

    .textCode {
        min-height: 200px;
        resize: vertical !important;
        border-radius: 5px;
        border: 2px solid #00DBDF;
        width: -moz-available;
        width: -webkit-fill-available;;
    }

    .textCode::selection {
        font-weight: 800;
        background-color: #00DBDF;
        color: white;
    }

    .textCode:focus {
        outline: 2px solid var(--copyBtnBg);
    }

    .textCode::-webkit-scrollbar {
        width: 4px;
        resize: both;
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
