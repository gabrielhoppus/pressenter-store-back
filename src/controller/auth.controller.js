import bcrypt from 'bcrypt';
import db from '../config/DataBase.js';
import {v4 as uuid} from 'uuid';

export async function signUp(req,res){
    const {name, email, password} = req.body
    const hashPassword = bcrypt.hashSync(password,10);
    
   try {
    const duplicateRecord = await db.collection('users').findOne({email})
    if(duplicateRecord) return res.status(409).send('Usuário já cadastrado!')
    
    await db.collection('users').insertOne({name, email,password:hashPassword})
    res.status(201).send("Usuário cadastrado com sucesso!")
} catch (error) {
    res.status(500).send(error.message)
   }
}

