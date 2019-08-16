const Router = require('koa-router');
const router = new Router();

const index = require('./route/index.js');
const list = require('./route/list.js');
const upload = require('./route/upload.js');

router.use('/', index);
router.use('/list', list);
router.use('/upload', upload);

module.exports = router;