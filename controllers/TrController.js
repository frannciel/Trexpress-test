const db = require('../db');
const Tr = require('../models/Tr');

class TrController{

    async index(req, res){

        const result = await Tr.findAll()
        //console.log(result);
        res.render('home', { trs: result }, (err, html) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erro ao renderizar todos aos termos dse referência');
            }
            return res.send(html);
        });
    }

    static async show(uuid){
        try{
            const result = await db.query('SELECT * FROM trs Where uuid = $1', [uuid]);

            res.render('mostrar', { data: result.rows[0]});
        } catch(err){
            res.status(500).send('Erro ao carregar a página inicial.');
        }
    }

    static async distroy(uuid){
        try{
            const result = await db.query('DELETE FROM trs WHERE id = $1 RETURNING *', [uuid]);
            
            res.render('index', {msg:"Termo de referência apagado com sucesso!!", data: result.rows[0]});
        } catch(err){
            res.status(500).send('Erro ao carregar a página inicial.');
        }
    }
}

module.exports = TrController;