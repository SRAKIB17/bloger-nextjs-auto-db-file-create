
import aa from '../../public/jscode.json'

export default async function handler(req, res) {

  const { post_id } = req.query;
  const { postBody } = req.body

  try {
    const jsCode = `
    let isScrolling = false;
        let x = 0;
        let y = 0;
        let count = 0
        const autoShow = (e) => {
            isScrolling = true;
        }
        const mouseMove = (e) => {
            if (isScrolling) {
                const getId = document.getElementById('scrollingDiv')
                x = e.pageX;
                y = e.pageY
                getId.scrollTo(getId.scrollLeft - e.movementX, 0)
                count = getId.scrollLeft - e.movementX

            }
        }


        let end = false;
        const getId = document.getElementById('scrollingDiv');
        setInterval(() => {
            const getTotalWidth = (getId.scrollWidth - getId.clientWidth + 10)
            if (getTotalWidth <= count && !end) {
                end = true
                count = count - 10
            }

            else if (getTotalWidth >= count && end) {
                count--
                if (getId.scrollLeft == 0) {
                    end = false
                }
            }


            else if (getTotalWidth >= count && !end) {
                count++
                end = false;
            }
            getId.scrollTo(count, 0)

        }, getId.hasAttribute('data-ms') ? getId.getAttribute('data-ms') : 10)
        document.documentElement.onmouseup = (e) => {
            isScrolling = false
        }
    `

    const { dark, video } = req.query;

    // res.writeHead(200, { 'Content-Type': 'text/javascript' });

    res.send(aa);


    // res.end();
  }
  finally {

  }
}
