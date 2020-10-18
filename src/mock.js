const Mock = require('mockjs');

// 仪器价值
Mock.mock(/\/getData/, 'get', {
    status: "success",
    data: 'hello world',
    message: "成功!",
    code: null,
    success: true
});


