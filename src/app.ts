import Api from "./Api";
import assert from "assert";
import dotenv from "dotenv";

dotenv.config();

assert(process.env.PORT,'PORT env variable is not defined');
assert(process.env.JWT_SECRET,'JWT_SECRET env variable is not defined');
assert(process.env.HTTPS_PRIVATE_KEY,'HTTPS_PRIVATE_KEY env variable is not defined');
assert(process.env.HTTPS_PUBLIC_KEY,'HTTPS_PUBLIC_KEY env variable is not defined');

new Api().start(process.env.PORT);
