const mongoose = require('mongoose')

mongoose.connect(
    'mongodb+srv://arondevita:todolist@cluster0-aw4dc.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true }
    ).then(()=>console.log('Conectado'))
    .catch(()=> console.log('Erro ao conectar'))
