'use strict'

import { Router } from 'https://deno.land/x/oak@v6.3.1/mod.ts';

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let d = new Date();
let month = months[d.getMonth()];

let list = [
    { id: Math.floor(Math.random() * 1000000), text: "Add HomePage Style", date: month + " " + d.getDate(), state: 'todo' },
    { id: Math.floor(Math.random() * 1000000), text: "Update Kanban Board", date: month + " " + d.getDate(), state: 'todo' }
];

const router = new Router();

router
    .get("/api/list", context => context.response.body = list)
    .get("/api/id", context => context.response.body = { id: Math.floor(Math.random() * 1000000) })
    .post("/api/list", async context => {
        const newItem = await context.request.body({ type: "json" }).value;
        console.log("requestBody: ", newItem);
        list = [
            ...list,
            newItem
        ];
        context.response.status = 200;
    })
    .put("/api/list", async context => {
        const task = await context.request.body({ type: "json" }).value;
        const toUpdateItem = list.find((item) => item.id === task.id);
        if (toUpdateItem) {
            toUpdateItem.state = task.state;
            context.response.status = 200;
        } else {
            context.response.status = 404;
        }

    })
    .delete("/api/list", async context => {
        const itemId = await context.request.body({ type: "json" }).value;
        const itemIndex = list.findIndex((item) => item.id == itemId.id);
        if (itemIndex > -1) {
            list.splice(itemIndex, 1);
            context.response.status = 200;
        } else {
            context.response.status = 404;
        }
    })

export const apiRoutes = router.routes();