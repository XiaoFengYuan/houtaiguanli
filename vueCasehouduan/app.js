const Koa = require('koa');
const app = new Koa();
const path = require('path');
const static = require('koa-static');
const body = require('koa-bodyparser');
const session = require('koa-session');
const router = require('./router');

app.use(session ({
    key: 'koa:sess',
    maxAge: 1200000,
    autoCommit: true,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: true,
    renew: false
}, app));

app.keys = ['koa-web-site'];
app.use(body());
app.use(static(path.join(__dirname, 'static')));
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Header', 'content-type');
    ctx.set('Access-Control-Allow-Methods','POST,GET,OPTIONS');
    ctx.set('Access-Control-Allow-Age','10000');
    ctx.set('Access-Control-Allow-Credentials', true);
   await next();
});

app.use(router.routes());
app.listen(3333, err => {
    if(!err) {
        console.log('服务启动成功');
    }
    
});