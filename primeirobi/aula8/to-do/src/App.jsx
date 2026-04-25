import { useState } from 'react'
import './App.css'

function App() {
  // Estado para armazenar a lista de tarefas
  const [tarefas, setTarefas] = useState([])
  
  // Estado para controlar o valor do input
  const [inputValue, setInputValue] = useState('')

  // Função para adicionar tarefa
  const adicionarTarefa = (e) => {
    e.preventDefault()
    
    if (inputValue.trim() === '') {
      alert('Digite uma tarefa válida!')
      return
    }
    
    // Criar nova tarefa com ID único e completed = false
    const novaTarefa = {
      id: Date.now(),
      text: inputValue,
      completed: false
    }
    
   
    setTarefas([...tarefas, novaTarefa])
    
    // Limpar o input
    setInputValue('')
  }

  // Função para remover tarefa
  const removerTarefa = (id) => {
    const novasTarefas = tarefas.filter(tarefa => tarefa.id !== id)
    setTarefas(novasTarefas)
  }

  // Função para alternar o status de concluída
  const toggleConcluida = (id) => {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id 
        ? { ...tarefa, completed: !tarefa.completed }
        : tarefa
    ))
  }

  return (
    <div className="container">
      <h1>📝 Minha Lista de Tarefas</h1>
      
      {/* Formulário para adicionar tarefa */}
      <form onSubmit={adicionarTarefa} className="form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite uma nova tarefa..."
          className="input"
        />
        <button type="submit" className="btn-add">
          Adicionar
        </button>
      </form>
      
      {/* Lista de tarefas */}
      {tarefas.length === 0 ? (
        <p className="empty">Nenhuma tarefa cadastrada ainda!</p>
      ) : (
        <ul className="lista-tarefas">
          {tarefas.map((tarefa) => (
            <li key={tarefa.id} className="item-tarefa">
              <div className="tarefa-content">
                <input
                  type="checkbox"
                  checked={tarefa.completed}
                  onChange={() => toggleConcluida(tarefa.id)}
                  className="checkbox"
                />
                <span className={`texto-tarefa ${tarefa.completed ? 'concluida' : ''}`}>
                  {tarefa.text}
                </span>
              </div>
              <button 
                onClick={() => removerTarefa(tarefa.id)}
                className="btn-remove"
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App