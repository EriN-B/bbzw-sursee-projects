'use strict'
import { Application } from "https://deno.land/x/oak@v6.3.1/mod.ts";
import { apiRoutes } from "./backend/app.js";
import { frontendFiles } from "./backend/fileserver.js";

const app = new Application();

app.use(apiRoutes);
app.use(frontendFiles);

app.listen({ port: 8000 });