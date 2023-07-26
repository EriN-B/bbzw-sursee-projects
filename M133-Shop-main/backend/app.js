'use strict'
import { Router } from "https://deno.land/x/oak@v6.3.1/mod.ts";
export { Session } from "https://deno.land/x/session@1.1.0/mod.ts";
import { Inventory } from './data/inventory.js';
import { log } from './log.js'

const router = new Router();

let inventory = new Inventory();

const logger = new log();

router
    .get("/api/products", context => {
        logger.info("Fetching all products");
        context.response.body = inventory.products
    })
    .get("/api/products/:title", context => {
        logger.info("Fetching products by title");
        context.response.body = inventory.products.find(item => item.title)
    })
    .post("/api/cart/add", async context => {
        try{
            logger.info("Adding Product to cart");
            const requestBody = await context.request.body({ type: "json" }).value
            if (await context.state.session.get("cart") === undefined) 
                await context.state.session.set("cart", [])
            let cart = await context.state.session.get("cart")
            if (cart.find(element => element.product.id === requestBody.id)) 
                cart.find(element => element.product.id === requestBody.id).amount += requestBody.amount;
            else {
                const product = inventory.products.find(element => element.id === requestBody.id)
                cart.push({
                    amount: requestBody.amount,
                    product: product
                });
                await context.state.session.set("cart", cart);
            }
        } catch (exception) {
            logger.error(exception)
        }
    })
    .get("/api/cart/fetch", async context => {
        try{
            logger.info("Fetching cart");
            if (await context.state.session.get("cart") === undefined)
                context.response.body = "ERROR: No products in cart"
            context.response.body = await context.state.session.get("cart");
        } catch (exception) {
            logger.error(exception)
        }
    })
    .post("/api/cart/remove", async context => {
        logger.info("Removing Product from cart");
        if (await context.state.session.get("cart") !== undefined) {
            const requestBody = await context.request.body({ type: "json" }).value
            const cart = await context.state.session.get("cart");
            const product = cart.find(element => element.product.id === requestBody.id);

            cart.splice(cart.indexOf(product), 1);
            await context.state.session.set("cart", cart);
        }
    })
    .post("/api/cart/update", async context => {
        logger.info("Updating cart");
        if (await context.state.session.get("cart") !== undefined) {
            const requestBody = await context.request.body({ type: "json" }).value
            const cart = await context.state.session.get("cart");
            const product = cart.find(element => element.product.id === requestBody.id);
            if(requestBody.amount <= 0) {
                cart.splice(cart.indexOf(product), 1);
            } else {
                cart[cart.indexOf(product)].amount = requestBody.amount;
            }
            await context.state.session.set("cart", cart);
        }
    })
    .post("/api/cart/flush", async context => {
        logger.info("Flushing cart");
        if (await context.state.session.get("cart") !== undefined) {
            const cart = await context.state.session.set("cart", []);
        }
    })
    .post("/api/order/place", async context => {
        logger.info("Validating order");
        if (await context.state.session.get("cart") !== undefined) {
            const emailPattern = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
            const requestBody = await context.request.body({ type: "json" }).value
            if (requestBody.name === undefined || requestBody.name.length <= 0 || requestBody.name.length >= 20) {
                context.response.status = 500;
                logger.error("Name is invalid");
            } else if (requestBody.firstName === undefined || requestBody.firstName.length <= 0 || requestBody.firstName.length >= 20) {
                context.response.status = 500;
                logger.error("Firstname is invalid");
            } else if (!requestBody.email.match(emailPattern)) {
                context.response.status = 500;
                logger.error("Email is invalid");
            } else {
                context.response.status = 200;
                logger.info("Order is valid")
            }
        }
    })
    ;
    

export const apiRoutes = router.routes();