
export default async function handler(req, res) {
  const { post_id } = req.query;
  const { postBody } = req.body

  try {
    const defaultStyle = `
      @import url('https://fonts.googleapis.com/css2?family=Coming+Soon&family=Fira+Code&family=Hind+Siliguri:wght@500&family=Lateef&family=Open+Sans:wght@300;500&family=Orbitron&family=Poppins:wght@500&display=swap');
      html,
      body {
        color:black !important;
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
      
      body::-webkit-scrollbar:not(pre)  {
        display: none !important;
      }


      body * ::-webkit-scrollbar {
        width: 5px !important;
        height: 10px !important;
      }

      *::-webkit-scrollbar-thumb {
        background-color: rgb(183, 183, 183) !important;
        border-radius: 10px !important;
      }
      


      .plaintext {
        word-wrap: break-word !important;
        white-space: pre-line !important;
      }
      
      *::-webkit-scrollbar-thumb  {
        background-color: rgb(183, 183, 183) !important;
        border-radius: 10px !important;
      }
      
      *::-webkit-scrollbar-button {
        visibility: hidden;
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
