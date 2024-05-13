import { Router } from "express";

const router = Router();

router.get('/', (req, res)=>{

    return res.send("Hello, Word!");

});

router.get("/enviar", (req, res)=>{

    return res.send("Motrando mais no body");

});

export {router};