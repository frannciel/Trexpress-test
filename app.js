const express = require('express')
const path = require('path');

const app = express()
app.use(express.json());
// Configurar o diretório de views e o motor de template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Configurar o diretório estático (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));
// Middleware para parsing de corpo do formulário
app.use(express.urlencoded({ extended: false }));

// Importar e usar as rotas
//const indexRouter = require('./routes/indexbd');
// app.use('/', indexRouter);

// Importar e usar as rotas
//const homeRouter = require('./routes/home');
//app.use('/', homeRouter);

// Importar e usar as rotas
const formRouter = require('./routes/form');
app.use('/', formRouter);

/* Rota para processar o formulário via AJAX
app.post('/submit', (request, reply) => {
    const { processo, objeto } = request.body;
    // Aqui você pode processar os dados, por exemplo, salvando em um banco de dados

    // Exemplo de resposta
    //reply.send(`Recebido! Nome: ${ objeto }`);
    // Renderiza o parciável e envia como resposta
    reply.render('partials/itens/modalidade', (err, html) => {
        if (err) {
            return res.status(500).send('Erro ao renderizar o template.');
        }
        reply.send(html);
    });
});
*/
app.listen(process.env.PORT || 3000);