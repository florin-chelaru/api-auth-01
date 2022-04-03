import Api from "./Api";
import assert from "assert";
import dotenv from "dotenv";

dotenv.config();

assert(process.env.PORT,'PORT env variable is not defined');
assert(process.env.JWT_SECRET,'JWT_SECRET env variable is not defined');
assert(process.env.HTTPS_PRIVATE_KEY,'HTTPS_PRIVATE_KEY env variable is not defined');
assert(process.env.HTTPS_PUBLIC_KEY,'HTTPS_PUBLIC_KEY env variable is not defined');

console.log("PORT="+process.env.PORT);
console.log("JWT_SECRET="+process.env.JWT_SECRET);
console.log("HTTPS_PRIVATE_KEY="+process.env.HTTPS_PRIVATE_KEY);
console.log("HTTPS_PUBLIC_KEY="+process.env.HTTPS_PUBLIC_KEY);

new Api().start(process.env.PORT);
