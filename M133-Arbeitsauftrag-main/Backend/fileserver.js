'use strict'
import { send } from 'https://deno.land/x/oak@v6.3.1/mod.ts';

export const frontendFiles = context => send(
    context,
    context.request.url.pathname,
    {
        root: `${Deno.cwd()}/frontend`,
        index: "kanban.html"
    }
);