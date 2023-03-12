import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

let server;

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext, callback) => {
  // your server-side functionality
  server = server ?? (await bootstrapServerless());
  return server(event, context, callback);
};
