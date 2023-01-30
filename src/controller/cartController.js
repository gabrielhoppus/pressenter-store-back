import dayjs from "dayjs";
import db from "../config/database.js";

export async function getCart(res) {
    const session = res.locals.session;
    const user = res.locals.user;
    const id = session.id;

    if (user) {
        await db.collection("carts")
            .find({
                "userId": { $in: [id] }
            })
            .toArray()
            .then(data => { return res.status(200).send(data) })
            .catch(() => { res.status(500).send("Erro ao executar requisição") });
    } else {
        res.status(401).send("Credenciais de autentição inválidas");
    }
}

export async function addItem(req, res) {
    const userSession = res.locals.session;
    const userCart = res.locals.cart
    const product = req.body

    userCart.cart.push(product);
    await db.collection("carts").updateOne({ _id: userSession.id }, { $set: userCart });
    return res.status(200).send(userCart);
}

export async function deleteItem(req, res) {
    const userSession = res.locals.session;
    const userCart = res.locals.cart
    const id = req.body._id;

    const updatedCart = userCart.cart.filter(item => item._id !== id);
    userCart.cart = updatedCart;

    await db.collection("carts").updateOne({ _id: userSession.id }, { $set: { cart: updatedCart } });
    return res.status(200).send(userCart);
}

function getValue(cart) {
    let checkoutValue = 0;
    cart.forEach(product => {
        checkoutValue += parseFloat(product.value);
    });
    return checkoutValue.toFixed(2);
}

export async function cartCheckoutValue(req, res) {
    const userCart = res.locals.cart
    const { cart } = userCart;
    try {
        const checkoutValue = getValue(cart)
        return res.status(200).send({ cart, checkoutValue });
    } catch {
        return res.status(500);
    }
}

export async function cartCheckout(req, res) {
    const date = dayjs().format("DD/MM//YY");
    const userCart = res.locals.cart
    const userSession = res.locals.session;
    const { cart } = userCart;
    const checkoutValue = getValue(cart);

    const checkout = {
        userId: userSession.userId,
        products: cart,
        totalValue: checkoutValue,
        date: date
    };
    await db.collection("sales").insertOne(checkout);
    await db.collection("carts").updateOne({ _id: userSession.userId }, { $set: { cart: [] } });

    return res.status(200).send(checkout);
}

