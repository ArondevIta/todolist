import React from 'react'
import './styles.css'
import { FaTrash, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'


const List = ({list, onClick, update}) => {

  async function handleClick(e){
    e.preventDefault()
    await onClick({ id: list._id })
  }

  async function handleClickStatus(e){
    e.preventDefault()
    let status = list.status
    list.status ? status = false : status = true
    await update({
      id: list._id,
      status: status
    })
  }

  return(
    <li className="list-item">
      <strong>{list.title}</strong>
      <FaTrash id="trash" onClick={handleClick} color="red"/>
      <p>{list.description}</p>
      <span>
        {list.status ? 
          <FaCheckCircle
            onClick={handleClickStatus} 
            id="check" 
          /> : 
          <FaExclamationCircle 
            onClick={handleClickStatus}
            id="exclamation"
          /> 
        }
      </span>
    </li>
  )
}

export default List
