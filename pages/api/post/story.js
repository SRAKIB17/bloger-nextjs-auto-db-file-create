
export default function handler(req, res) {
    // console.log(process.env.GUEST_CHECK_ACCESS_TOKEN)

    const method = req.method;
    if (method === "GET") {
        res.status(200).json("message")
    }
    // if (method === 'POST') {
    //     message.push(req.body)
    // }

}
