import dayjs from "dayjs";
import db from "../config/database.js";

const date = dayjs().format("DD/MM/YY");

export async function getCart(res) {
    const session = res.locals.session;
    const user = res.locals.user;
    const id = session.userId;

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
    return;
}

export async function deleteItem(req, res){
    return;
}

