
export default class Request {
  constructor(event, context) {
    console.log(Object.keys(context));
    this.event = event;
    this.context = context;
  }
  _makeResponce(result, statusCode) {
    return {
      statusCode: statusCode,
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(result)
    };
  }
  succeed(result, statusCode) {
    this.context.succeed(this._makeResponce(result, statusCode || 200));
  }
  fail(result, statusCode) {
    this.context.succeed(this._makeResponce(result, statusCode || 400));
  }
  failFunction(result, statusCode) {
    this.context.fail(this._makeResponce(result, statusCode || 400));
  }
};
