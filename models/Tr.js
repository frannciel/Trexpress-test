const { v4: uuidv4 } = require('uuid'); // Importa a função para gerar UUID versão 4
const db = require('../db'); // Supondo que você tenha configurado um módulo de conexão ao banco de dados

class Tr {
    constructor(tr_id, processo, objeto) {
        this.processo = processo;
        this.objeto = objeto;
        this.id = tr_id;

        // Atributos adicionais declarados mas não atribuídos no construtor
        this.modalidade = null;
        this.criterio_julgamento = null;
        this.srp = null;
        this.garantia = null;
        this.sigiloso = null;
        this.carta_solidaria = null;
        this.subcontratacao = null;
        this.antecipacao = null;
        this.amostra = null;
    }

    // Método estático para encontrar um tr pelo UUID
    static async findById(id) {
        try {
            const result = await db.query('SELECT * FROM trs WHERE tr_id = $1', [id]);
            if (result.rows.length > 0) {
                const { tr_id, processo, objeto, modalidade, criterio_julgamento, srp, garantia, sigiloso, carta_solidaria,  subcontratacao,  antecipacao, amostra} = result.rows[0];
                const tr = new Tr(tr_id, processo, objeto); // Retorna uma instância da classe Tr
                tr.modalidade = modalidade;
                tr.criterio_julgamento = criterio_julgamento;
                tr.srp = srp;
                tr.garantia = garantia;
                tr.sigiloso = sigiloso;
                tr.carta_solidaria = carta_solidaria;
                tr.subcontratacao = subcontratacao;
                tr.antecipacao = antecipacao;
                tr.amostra = amostra;
                return tr;
            } else {
                return null;
            }
        } catch (error) {
            console.error(error);
            throw new Error('Erro ao buscar termo de referência UUID.');
        }
    }

    static async findAll() {
        try {
            const result = await db.query('SELECT * FROM trs');
            return result.rows.map(row => new Tr(
                row.tr_id,
                row.processo,
                row.objeto,
            ));
        } catch (error) {
            console.error(error);
            throw new Error('Erro ao buscar todos os termos de referência.');
        }
    }

    // Método estático para criar um novo usuário
    static async create(processo, objeto) {
        try {
            const result = await db.query(
                'INSERT INTO trs (tr_id, processo, objeto) VALUES ($1, $2, $3) RETURNING *', [uuidv4(), processo, objeto]
            );
            const { tr_id, processo: newProcesso, objeto: newObjeto } = result.rows[0];
            return new Tr(tr_id, newProcesso, newObjeto); // Retorna a nova instância criada
        } catch (error) {
            console.error(error);
            throw new Error('Erro ao criar novo usuário.');
        }
    }

    // Método para atualizar um usuário existente
    static async update(id, processo, objeto)  {
        try {
            const result = await db.query(
                'UPDATE trs SET processo = $1, objeto = $2 WHERE tr_id = $3 RETURNING *',[processo, objeto, id]
            );
            return result.rows[0].tr_id;
        } catch (error) {
            console.error(error);
            throw new Error('Erro ao atualizar o usuário.');
        }
    }

    // Método para atualizar um modalidade do Termo de Referência existente
    static async updateModalidade(id, modalidade)  {
        try {
            const result = await db.query(
                'UPDATE trs SET modalidade = $1 WHERE tr_id = $2 RETURNING *',[modalidade, id]
            );
            return result.rows[0].tr_id;
        } catch (error) {
            console.error(error);
            throw new Error('Erro ao atualizar a modalidade do TR.');
        }
    }

    // Método para atualizar a ganratia de execução do Termo de Referência existente
    static async updateGarantia(id, garantia)  {
        try {
            const result = await db.query(
                'UPDATE trs SET garantia = $1 WHERE tr_id = $2 RETURNING *',[garantia, id]
            );
            return result.rows[0].tr_id;
        } catch (error) {
            console.error(error);
            throw new Error('Erro ao atualizar garantia de execução do TR.');
        }
    }

    // Método para atualizar a critério de julgamento do Termo de Referência existente
    static async updateCriteriojulgamento(id, criterio_Julgamento)  {
        try {
            const result = await db.query(
                'UPDATE trs SET criterio_Julgamento = $1 WHERE tr_id = $2 RETURNING *',[criterio_Julgamento, id]
            );
            return result.rows[0].tr_id;
        } catch (error) {
            console.error(error);
            throw new Error('Erro ao atualizar o critério de julgamento do TR.');
        }
    }

    // Método para atualizar a srp do Termo de Referência existente
    static async updateSrp(id, srp)  {
        try {
            const result = await db.query(
                'UPDATE trs SET srp = $1 WHERE tr_id = $2 RETURNING *',[srp, id]
            );
            return result.rows[0].tr_id;
        } catch (error) {
            console.error(error);
            throw new Error('Erro ao atualizar o srp do TR.');
        }
    }

    // Método para atualizar a Amostra do Termo de Referência existente
    static async updateAmostra(id, amostra)  {
        try {
            const result = await db.query(
                'UPDATE trs SET amostra = $1 WHERE tr_id = $2 RETURNING *',[amostra, id]
            );
            return result.rows[0].tr_id;
        } catch (error) {
            console.error(error);
            throw new Error('Erro ao atualizar o srp do TR.');
        }
    }

    // Método para atualizar a antecipação de pagamento do Termo de Referência existente
    static async updateAntecipacao(id, antecipacao)  {
        try {
            const result = await db.query(
                'UPDATE trs SET antecipacao = $1 WHERE tr_id = $2 RETURNING *',[antecipacao, id]
            );
            return result.rows[0].tr_id;
        } catch (error) {
            console.error(error);
            throw new Error('Erro ao atualizar o srp do TR.');
        }
    }

    // Método para atualizar a carta de solidariedade do Termo de Referência existente
    static async updateCartaSolidariedade(id, carta_solidaria )  {
        try {
            const result = await db.query(
                'UPDATE trs SET carta_solidaria = $1 WHERE tr_id = $2 RETURNING *',[carta_solidaria, id]
            );
            return result.rows[0].tr_id;
        } catch (error) {
            console.error(error);
            throw new Error('Erro ao atualizar o srp do TR.');
        }
    }

    // Método para atualizar a orçamento sigiloso do Termo de Referência existente
    static async updateOrcamentoSigiloso(id, sigiloso )  {
        try {
            const result = await db.query(
                'UPDATE trs SET sigiloso = $1 WHERE tr_id = $2 RETURNING *',[sigiloso, id]
            );
            return result.rows[0].tr_id;
        } catch (error) {
            console.error(error);
            throw new Error('Erro ao atualizar o srp do TR.');
        }
    }
    
    // Método para atualizar a subcontração do Termo de Referência existente
    static async updateSubcontratacao(id, subcontratacao)  {
        try {
            const result = await db.query(
                'UPDATE trs SET subcontratacao = $1 WHERE tr_id = $2 RETURNING *',[subcontratacao, id]
            );
            return result.rows[0].tr_id;
        } catch (error) {
            console.error(error);
            throw new Error('Erro ao atualizar o srp do TR.');
        }
    }

    // Método estático para deletar um usuário pelo ID
    static async deleteById(id) {
        try {
            await db.query('DELETE FROM trs WHERE tr_id = $1', [id]);
            return true;
        } catch (error) {
            console.error(error);
            throw new Error('Erro ao deletar TR.');
        }
    }
}

module.exports = Tr;
