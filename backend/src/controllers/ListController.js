const List = require('../models/List')

module.exports = {
  async index(req, res){
    try {
        let list = await List.find()
        return res.json(list)
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao puxar dados' })
    }
  },
  async show(req, res){
    try {
        const { id } = req.params
        let list = await List.findById({_id:id})
        return res.json(list)
    } catch (error) {
        return res.json({ error: error })
    }
  },
  async store(req, res){
    try {
       const { title, description } = req.body
       let list = new List({ title, description })
       await list.save()
       return res.json(list)
    } catch (error) {
        return res.json({ error: 'Erro ao criar lista' })
    }
  },
  async update(req, res){
    try {
        const { id } = req.params
        const { status } = req.body
        let list = await List.findByIdAndUpdate(
            id, {$set: {status: status}}, {upsert:true, 'new':true}
          )
        return res.json(list)

    } catch (error) {
        return res.json({error: 'Erro ao atualizar lista'})
    }
  },
  async drop(req, res){
    try {
        const { id } = req.params
        let list = await List.findById({_id:id})
        list.remove()
        return res.json({'message':'Lista removida com sucesso'})

    } catch (error) {
        return res.json({error: error})
    }
  }
}