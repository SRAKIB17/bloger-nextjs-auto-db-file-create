
const login_user_without_post_body = () => {
    const dbUser = "SOCIAL_BLOG_USER_INFO_LIKE_COMMENT_WITHOUT_POSTBODY"
    const dbPass = '8bM3njZEHuo9C686'
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = `mongodb+srv://SOCIAL_BLOG_USER_INFO_LIKE_COMMENT_WITHOUT_POSTBODY:${dbPass}@cluster0.9okdc3v.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    return { client }
};


export default login_user_without_post_body;