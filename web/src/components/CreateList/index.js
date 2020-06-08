import React, { useState } from 'react'
import './styles.css'

const CreateList = ({onSubmit}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  
  async function handleSubmit(e){
    e.preventDefault()
    await onSubmit({
      title,
      description
    })
    setTitle('')
    setDescription('')
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <strong>Cadastro de tarefa</strong>
        <div className="input-block">
          <label htmlFor="title">Título</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            placeholder="Digite o titulo da sua tarefa"
            value={title}
            onChange={e=> setTitle(e.target.value)}
          />
        </div>
        
        <div className="input-block">
          <label htmlFor="description">Descrição</label>
          <textarea 
            name="description" 
            id="description" 
            cols="30" 
            rows="5"
            value={description}
            onChange={e=> setDescription(e.target.value)}
          >
          </textarea>
        </div>
        <button type="submit">
          Cadastrar Tarefa
        </button>
      </form>
    </>
  )
}

export default CreateList
