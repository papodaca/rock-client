
import Request from "./lib/request";

export const handler = (event, context) => {
  let req = new Request(event, context);

  req.succeed(event, 201);
};
