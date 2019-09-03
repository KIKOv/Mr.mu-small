module.exports = {
    devServer: {
        open: true,
        proxy: {
            '/login': {
                target: "http://118.89.234.135:7001"
            }
        }
    }
}