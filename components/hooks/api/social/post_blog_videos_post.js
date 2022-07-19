const SocialPostBlog = () => {
    const dbUser = 'post_blog_videos_post_social_project'
    const dbPass = '4ZiKbXFoVufdMuVq'
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = `mongodb+srv://post_blog_videos_post_social_project:${dbPass}@cluster0.cqsyb0m.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

    return { client }
};

export default SocialPostBlog;

