import login_user_without_post_body from "../../../components/hooks/api/social/login_user_without_post_body";

export default async function handler(req, res) {
    try {
        const method = req.method;

        console.log(req.body)
        const { client } = login_user_without_post_body()
        await client.connect();
        if (method === 'PUT' && (req.headers.user_check === process.env.USER_CHECK)) {
            const body = req.body;

            const userCollection = client.db("users").collection("user_details");
            // const findUser = await userCollection.findOne({ userID: body?.userID });
            // delete person.age;
            const filter = { userID: body?.userID }
            delete body?.userID
            // const options = { upsert: true }
            const updateDoc = {
                $set: body
            }

            // GET RESULT AND CHECK UPDATE CONDITION
            const result = await userCollection.updateOne(filter, updateDoc)
            if ((result?.acknowledged && result?.matchedCount == 1) && result?.modifiedCount == 1) {
                const message = { message: "success", result: result }
                res.status(200).json(message)
            }
            else {
                const message = { message: "error", error: 'Something is happened' }
                res.status(200).json(message)
            }

        }
        else {
            const message = { message: "error", error: 'Something is wrong..Please try again' }
            res.status(200).json(message)
        }
    }
    catch {
        const message = { message: "error", error: 'Something is wrong..Please try again' }
        res.status(200).json(message)
    }

}
