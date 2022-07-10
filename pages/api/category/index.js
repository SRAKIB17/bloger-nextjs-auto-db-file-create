const category = [
    {
        category: 'Web Development',
        tags: ['html', 'css', 'js', 'node'],
    },
    {
        category: 'Programming',
        tags: ['c++', 'python', 'c', 'java'],
    },
    {
        category: 'HSC',
        tags: ['bangla', 'css', 'js', 'node'],
    },
    {
        category: 'Web Development',
        tags: ['html', 'css', 'js', 'node'],
    },
]
export default function handler(req, res) {
    const method = req.method;
    if (method === "GET") {
        res.status(200).json(category)
    }
    if (method === 'POST') {
        category.push(req.body)
    }

}
