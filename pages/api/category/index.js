const category = [
    {
        category: 'web development',
        tags: ['html', 'css', 'js', 'node'],
    },
    {
        category: 'programming',
        tags: ['c++', 'python', 'c', 'java'],
    },
    {
        category: 'hsc',
        tags: ['bangla', 'css', 'js', 'node'],
    },
    {
        category: '',
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
