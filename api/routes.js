const KoaRouter = require('koa-router')
const router = new KoaRouter()

router.get("/", async (ctx, next) => {
  ctx.body = "hello world!";
});

router.get("/string", async (ctx, next) => {
  ctx.body = "koa2 string";
});

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json",
  };
});

module.exports = router;
