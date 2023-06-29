module.exports = async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*'); // Replace '*' with the appropriate origin(s) or set it dynamically based on the request's origin
  ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (ctx.method === 'OPTIONS') {
    ctx.status = 200;
  } else {
    await next();
  }
};