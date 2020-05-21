const Koa = require('koa')
    , app = new Koa()
    , koa = require('koa-router')()
    , json = require('koa-json')
    , logger = require('koa-logger'); // 引入各种依赖

// 引入koa-bodyparser中间件，这个中间件可以将post请求的参数转为json格式返回
app.use(require('koa-bodyparser')()); 
// 使用中间件后，可以用ctx.request.body进行获取POST请求参数，中间件自动给我们解析为json

app.use(json());
app.use(logger());

app.use(function* (next) {
    let start = new Date;
    yield next;
    let ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms); // 显示执行的时间
});

app.on('error', function (err, ctx) {
    console.log('server error', err);
});

app.listen(8889, () => {
    console.log('Koa is listening in 8889');
});

module.exports = app;