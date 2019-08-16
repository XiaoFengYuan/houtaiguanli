const Router = require('koa-router');
const router = new Router();
const {add} = require('../sql/sql.js');
const {product} = require('../common/product.js');

router.post('/', async (ctx, next) => {
    let result = ctx.request.body;
    // console.log(result);
    let data = await add(result);
    // console.log(data);
    ctx.body = data;
    next();
})

module.exports = router.routes();