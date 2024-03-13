// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('http://localhost:3000', {
            target: 'https://m.search.naver.com',
            pathRewrite: {
                '^/naver': ''
            },
            changeOrigin: true
        })
    )

    app.use(
        createProxyMiddleware('/다른context', {
            target: 'https://다른호스트',
            pathRewrite: {
                '^/지우려는패스': ''
            },
            changeOrigin: true
        })
    )


};
