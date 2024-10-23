import { createProxyMiddleware } from 'http-proxy-middleware';

export default createProxyMiddleware((req, res) => {
    // Exclude the specific path
    if (/\/members\/?\?token=/g.test(req.url)) {
        return false; // Do not proxy this request
    }
    return true; // Proxy all other requests
}, {
    target: 'https://www.edosaodaro.com', // Your target server
    changeOrigin: true,
    pathRewrite: {
        '^/members/api': '/members/api', // Adjust the path as needed
    },
    onError: (err, req, res) => {
        res.status(500).json({ error: 'Proxy error', details: err.message });
    },
});