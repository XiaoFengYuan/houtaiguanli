const Router = require('koa-router');
const router = new Router();
const {login} = require('../sql/sql.js');
const {product} = require('../common/product.js');



router.get('/do', async (ctx, next) => {
    if(ctx.session.userMessage) {
        ctx.redirect('/#/list');
    } else {
        ctx.body = 1;
    }
    next();
})

router.post('/', async(ctx, next) => {
    
    let result = ctx.request.body;
    let data = await login(result);
    // console.log(data);
    
    if(data) {
        ctx.session.userMessage = {
            username: data.username,
            id: data.id
        }
        ctx.body = product();
    } else {
        ctx.body = product({
            status: 0,
            error: '用户名或密码错误'
        })
    }
    
    next();
})

module.exports = router.routes();