import db from "../config/database.js";


export async function userCart(req, res, next) {
    const userSession = res.locals.session;

    try {
        const userCart = await db.collection("carts").findOne({ _id: userSession.id });
        console.log(userCart)
        res.locals.cart = userCart;
        next();
    } catch (error) {
        return res.status(500).send(error);
    }
}