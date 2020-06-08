import React, {useState, useEffect} from 'react';
import CreateList from './components/CreateList'
import List from './components/List'
import api from './services/api'
import './app.css'

function App() {

  const [lists, setLists] = useState([])
  useEffect(() => {
    loadList()
  }, [])

  async function loadList(){
    const response = await api.get('/list')
    setLists(response.data)
  }

  async function handleAddList(data){
    const response = await api.post('/list', data)
    setLists([...lists, response.data])
  }
  async function handleDeleteList(data){
    await api.delete(`/list/${data.id}`)
    loadList()
  }

  async function handleUpdateList(data){
    await api.put(`/list/${data.id}`, data)
    loadList()
  }

  return (
    <div id="app">
      <aside>
        <CreateList onSubmit={handleAddList} />
      </aside>
      <main>
        <ul>
          { lists.map(list => (
            <List 
              key={list._id} 
              list={list}
              update={handleUpdateList}
              onClick={handleDeleteList}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
