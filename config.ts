import "https://deno.land/x/dotenv/load.ts";

const PORT = Deno.env.get('PORT') || 3333
const HOST = Deno.env.get('HOST') || '127.0.0.1'

export {
    PORT,
    HOST
};
