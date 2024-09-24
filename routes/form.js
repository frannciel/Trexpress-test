const express = require('express');
const { body, validationResult } = require('express-validator');
const FormController = require('../controllers/FormController');
const TrController = require('../controllers/TrController');

const router = express.Router();
const controle = new FormController();
const trcontroller = new TrController();

// Rota para a página principal
router.get('/', (req, res) => {
    res.render('tr-home', { title: 'Minha Aplicação' });
});

// Rota para a página principal
router.get('/termodereferencia', (req, res) => {
    res.render('tr-form', { title: 'Minha Aplicação' });
});

// Rota para a página principal
router.get('/index', async (req, res) => {
    await trcontroller.index(req, res);
});

// Rota para a página principal
router.post('/formulario/novo',
    /*[
        body('processo')
            .notEmpty().withMessage('O campo "processo" é obrigatório.')
            .isString().withMessage('O campo "processo" deve ser uma string.'),

        body('objeto')
            .notEmpty().withMessage('O campo "objeto" é obrigatório.')
            .isString().withMessage('O campo "objeto" deve ser uma string.')
    ], */
    
    async (req, res) => {
        // Verifica se há erros de validação
        /*const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // Retorna os erros de validação encontrados
            return res.status(400).json({ errors: errors.array() });
        }*/

        await controle.index(req, res);
});

router.get('/formulario/resumo/:id', async (req, res) => {
    await controle.showResumo(req.params.id, res);
});

module.exports = router;