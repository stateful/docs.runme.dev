#!/usr/bin/env -S deno run -A

import { query } from "./routes/blog.tsx";

console.log(encodeURI(query))
