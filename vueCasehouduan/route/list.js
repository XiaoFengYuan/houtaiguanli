const Router = require('koa-router');
const router = new Router();
const {listRender, del, changeId, change} = require('../sql/sql.js');
const {product} = require('../common/product.js');

router.post('/', async (ctx, next) => {
    if(ctx.session.userMessage) {
        let data = await listRender();
        ctx.body = data;
    } else {
        ctx.redirect('/')
    }
    // let result = ctx.request.body;
    next();
})

router.post('/del', async (ctx, next) => {
    let result = ctx.request.body;
    // console.log(result);
    await del(result.id);
    let data = await listRender();
    // console.log(data)
    ctx.body = data;
    next();
})

router.post('/changeid', async (ctx, next) => {
    let result = ctx.request.body;
    // console.log(result);
    let data = await changeId(result.id);
    // let data = await listRender();
    // console.log(data)
    ctx.body = data;
    next();
})

router.post('/change', async (ctx, next) => {
    let result = ctx.request.body;
    // console.log(result);
    await change(result);
    // let data = await listRender();
    // console.log(data)
    ctx.body = 123;
    next();
})


module.exports = router.routes();