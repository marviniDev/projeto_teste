const user = require('../models/user');

module.exports = {
    async list(req, res){
        try {
            const users = await user.findAll()
            return res.json(users);
        } catch (err) {
            return console.error("Erro na listagem: ", err);
        }
    },
    async show(req, res){
        try {
            const users = await user.findAll({where: {id: req.params.id}});
            return res.json(users);
        } catch (err) {
            return console.err("Erro na busca: ", err);
        }
    },
    async create(req, res){
        const {firstName, lastName, email} = req.body;
        try {
            const users = await user.create({firstName, lastName, email});
            return res.json(users);
        } catch (error) {
            return console.error('Erro na criação', err);
        }
    },
    async update(req, res){
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op
        const { firstName, lastName, email } = req.body;
        const id = req.params.id;
        try {
            await user.update({firstName, lastName, email}, {where: {id: {[Op.eq]: id }}});
            return res.json({msg: `Usuário ${firstName} atualizado com sucesso!`});
        } catch (error) {
            return res.json({msg: `Usuário ${firstName} não foi atualizado`}, err);            
        }
    },
    async delete(req, res){
        try {
            await user.destroy({where: {id: req.params.id }});
            return res.json({msg: `Exclusão de item de ID ${req.params.id} feita com sucesso!`});
        } catch (err) {
            return console.err("Erro na exclusão: ", err);
        }
    },
}