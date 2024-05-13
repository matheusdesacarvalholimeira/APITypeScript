import { Router } from "express";
import { StatusCodes } from "http-status-codes"

const router = Router();

router.get('/', (req, res)=>{

    return res.send("Hello, Word!");

});

router.get("/enviar", (req, res)=>{

    return res.send("Motrando mais no body");

});

router.get("/retornarbody", (req, res)=>{
    return res.json(req.body);
});

router.get("/pegandoURl/:id", (req, res)=>{
    //dessa forma e quando e obrigatorio a passagem desse parametro
    return console.log(req.params.id);
})

router.get("/passandoURLDiferente",(req, res)=>{
    //?id=ola
    //deve ser colocado dessa forma na URl
    return console.log(req.query.id)

})

//biblioteca de status code foi adicionada e serve para retornar o status de maneira meis correta
router.get("/statusCode", (req, res)=>{
    return res.status(401).json(req.body);
})

//biblioteca de status code foi adicionada e serve para retornar o status de maneira meis correta
router.get("/statusCode", (req, res)=>{
    return res.status(StatusCodes.ACCEPTED).json(req.body);
})

export {router};