const Tr = require('../models/Tr');

const itens = {
    INFO_BASICAS: '7072696d6569726f',
    MODALIDADE: '736567756e646f',
    GARANTIA: '7175696e746f',
    SRP: '71756172746f',
    CRITRERIO_JULGAMENTO: '6f697461766f',
    CARTA_SOLIDARIEDADE: '736578746f',
    ANTECIPACAO: '6e6f6e6f',
    ORCAMENTO_SIGILOSO: '646563696d6f',
    SUBCONTRATACAO: '736574696d6f',
    AMOSTRA: '6f697461766f27'
};

Object.freeze(itens); // Congela o objeto para evitar modificações

class FormController {

    async index(req, res) {
         
        switch(req.body.item){
            case itens.INFO_BASICAS:
                try {

                    const tr = await Tr.create(req.body.processo, req.body.objeto)
                    return await this.showModalidade(res, tr.id); // Use `return` para evitar múltiplas respostas
                } catch (error) {
                    console.error(error);
                    return res.status(500).send('Erro ao inserir dados no banco de dados');
                }
            case itens.MODALIDADE:
                try {
                    const tr_id = await Tr.updateModalidade(req.body.id, req.body.modalidade)
                    return await this.showCriterioJulgamento(res, tr_id); // Use `return` para evitar múltiplas respostas
                } catch (error) {
                    console.error(error);
                    return res.status(500).send('Erro ao inserir dados no banco de dados');
                }
            case itens.CRITRERIO_JULGAMENTO:
                try {
                    const tr_id  = await Tr.updateCriteriojulgamento(req.body.id, req.body.julgamento)
                    return await this.showSrp(res, tr_id); // Use `return` para evitar múltiplas respostas
                } catch (error) {
                    console.error(error);
                    return res.status(500).send('Erro ao inserir dados no banco de dados');
                }
            case itens.SRP:
                try {
                    const tr_id = await Tr.updateSrp(req.body.id, req.body.srp)
                    return await this.showGarantia(res, tr_id); // Use `return` para evitar múltiplas respostas
                } catch (error) {
                    console.error(error);
                    return res.status(500).send('Erro ao inserir dados no banco de dados');
                }
            case itens.GARANTIA:
                try {
                    const tr_id= await Tr.updateGarantia(req.body.id, req.body.garantia)
                    return await this.showOrcamentoSigiloso(res, tr_id); // Use `return` para evitar múltiplas respostas
                } catch (error) {
                    console.error(error);
                    return res.status(500).send('Erro ao inserir dados no banco de dados');
                }
            case itens.ORCAMENTO_SIGILOSO:
                try {
                    const tr_id = await Tr.updateOrcamentoSigiloso(req.body.id, req.body.sigiloso)
                    return await this.showAmostra(res, tr_id); // Use `return` para evitar múltiplas respostas
                } catch (error) {
                    console.error(error);
                    return res.status(500).send('Erro ao inserir dados no banco de dados');
                }
            case itens.AMOSTRA:
                try {
                    const tr_id = await Tr.updateAmostra(req.body.id, req.body.amostra)
                    return await this.showSubcontratacao(res, tr_id); // Use `return` para evitar múltiplas respostas
                } catch (error) {
                    console.error(error);
                    return res.status(500).send('Erro ao inserir dados no banco de dados');
                }
            case itens.SUBCONTRATACAO:
                try {
                    const tr_id = await Tr.updateSubcontratacao(req.body.id, req.body.subcontratacao)
                    return await this.showAntecipacao(res, tr_id); // Use `return` para evitar múltiplas respostas
                } catch (error) {
                    console.error(error);
                    return res.status(500).send('Erro ao inserir dados no banco de dados');
                }  
            case itens.ANTECIPACAO:
                try {
                    const tr_id = await Tr.updateAntecipacao(req.body.id, req.body.antecipacao)
                    return await this.showCartaSoridariedade(res, tr_id); // Use `return` para evitar múltiplas respostas
                } catch (error) {
                    console.error(error);
                    return res.status(500).send('Erro ao inserir dados no banco de dados');
                }  
            case itens.CARTA_SOLIDARIEDADE:
                try {
                    const tr_id = await Tr.updateCartaSolidariedade(req.body.id, req.body.carta_solidaria)
                    //res.redirect('/formulario/resumo/${id}');
                    return await this.showResumo(res, tr_id); // Use `return` para evitar múltiplas respostas+
                } catch (error) {
                    console.error(error);
                    return res.status(500).send('Erro ao inserir dados no banco de dados');
                }  
        }
    }

    async showInformacoes(res) {
        res.render('partials/itens/info-basicas', (err, html) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erro ao renderizar o item info-basicas');
            }
            return res.send(html);
        });
    }

    async showModalidade(res, id, item =itens.MODALIDADE) {
        const progressBar = 10;
        res.render('partials/itens/modalidade', {id, item, progressBar}, (err, html) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erro ao renderizar o item modalidade');
            }
            return res.send(html);
        });
    }

    async showCriterioJulgamento(res, id, item=itens.CRITRERIO_JULGAMENTO) {
        const progressBar = 20;
        res.render('partials/itens/criterio_Julgamento', {id, item, progressBar}, (err, html) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erro ao renderizar o item modalidade');
            }
            return res.send(html);
        });
    }

    async showSrp(res, id, item=itens.SRP) {
        const progressBar = 30;
        res.render('partials/itens/srp', { id, item, progressBar }, (err, html) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erro ao renderizar o item srp');
            }
            return res.send(html);
        });
    } 

    async showGarantia(res, id, item=itens.GARANTIA) {
        const progressBar = 40;
        res.render('partials/itens/garantia', {id, item, progressBar}, (err, html) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erro ao renderizar o item modalidade');
            }
            return res.send(html);
        });
    }

    async showOrcamentoSigiloso(res, id, item=itens.ORCAMENTO_SIGILOSO) {
        const progressBar = 50;
        res.render('partials/itens/orcamento_sigiloso', {id, item, progressBar}, (err, html) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erro ao renderizar o item modalidade');
            }
            return res.send(html);
        });
    }

    async showAmostra(res, id, item=itens.AMOSTRA) {
        const progressBar = 60;
        res.render('partials/itens/amostra', {id, item, progressBar}, (err, html) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erro ao renderizar o item modalidade');
            }
            return res.send(html);
        });
    }

    async showSubcontratacao(res, id, item=itens.SUBCONTRATACAO) {
        const progressBar = 70;
        res.render('partials/itens/subcontratacao', {id, item, progressBar}, (err, html) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erro ao renderizar o item modalidade');
            }
            return res.send(html);
        });
    }

    async showAntecipacao(res, id, item=itens.ANTECIPACAO) {
        const progressBar = 80;
        res.render('partials/itens/antecipacao', {id, item, progressBar}, (err, html) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erro ao renderizar o item modalidade');
            }
            return res.send(html);
        });
    }

    async showCartaSoridariedade(res, id, item=itens.CARTA_SOLIDARIEDADE) {
        const progressBar = 90;
        res.render('partials/itens/carta_solidariedade', {id, item, progressBar}, (err, html) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erro ao renderizar o item modalidade');
            }
            return res.send(html);
        });
    }

    async showResumo(res, id) {
        const tr = await Tr.findById(id);
        const dados = this.prepareDados(tr)
        res.render('resumo', { dados }, (err, html) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erro ao renderizar o item modalidade');
            }
            return res.send(html);
        });
    }

    prepareDados(tr){
        const dados = Object.entries(tr).reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});

        const modalidades = (() => {
            switch(dados.modalidade) {
                case 1:
                    return 'Pregão Eletrônico';
                case 2:
                    return 'Concorrência';
                case 3:
                    return 'Dispensa de Licitação';
                case 4:
                    return 'Inexigibilidade';
            }
        })();
        
        const julgamentos = (() => {
            switch(dados.criterio_Julgamento) {
                case 1:
                    return 'Menor Preço';
                case 2:
                    return 'Maior Desconto';
                case 3:
                    return 'Melhor Técnica';
                case 4:
                    return 'Técnica e Preço';
            }
        })();
        dados.modalidade = modalidades;
        dados.criterio_julgamento = julgamentos;
        dados.amostra = dados.amostra == 1 ? 'Sim' : 'Não';
        dados.garantia = dados.garantia == 1 ? 'Sim' : 'Não';
        dados.sigiloso = dados.sigiloso == 1 ? 'Sim' : 'Não';
        dados.carta_solidaria = dados.carta_solidaria == 1 ? 'Sim' : 'Não';
        dados.subcontratacao = dados.subcontratacao == 1 ? 'Sim' : 'Não';
        dados.srp = dados.srp == 1 ? 'Sim' : 'Não';
        dados.antecipacao = dados.antecipacao == 1 ? 'Sim' : 'Não';
        return dados;
    }
}

module.exports = FormController;
