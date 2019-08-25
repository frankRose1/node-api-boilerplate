export default [
    {
        path: '/',
        method: 'get',
        handler: async (req, res) => {
            res.send('Hello world!')
        }
    }
]