export function validateSchema(schema) {
    return (req, res, next) => {
        const {name, email, password, confirmPassword}  = req.body
        const validation = schema.validate(req.body,{abroutEarly:false})

        if (validation.error) {
            const errorMsg = validation.error.details.map(err => err.message)
            console.log(validation.error.details)
            return res.status(422).send(`${errorMsg} Preencha os dados corretamente!`)
        }
        next()
    }
}

