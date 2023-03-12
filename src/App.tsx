import React ,{useState} from 'react'
import { Data } from './interface'
import './App.scss'
const App = ():JSX.Element=> {

 let data =[{title:'Title' , id:1, description:'Add your des '}]

  const [todo , setTodo] = useState<string>('')
  const [todosArr, setTodosArr] = useState<Data[]>(data)
 const [des , setDes ] = useState<string>('')

 const getTodos = ()=>{
  if(!todo.length) return;
  const newTodo ={
    title:todo, 
    id:new Date().getTime(),
    description:des
  }

  setTodosArr([...data, newTodo])
 }

 const deleteTodo =(id:number ) =>{
     let deletable = todosArr.filter(old=>old.id !== id)
     setTodosArr(deletable)
 }
  return(
    <div className="App">
     <h1>Todos App</h1>
    <form action="" className='form'>
      <input type="text" onChange={e=>setTodo(e.target.value)}  required/>
       <br />
       <br />
       <input type="text" onChange={e=>setDes(e.target.value)} required />
      </form>
    <button onClick={getTodos} className='addBtn'>Add todo</button>

     {todosArr.map(todo=><div key={todo.id} className='todos'>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <button onClick={()=>deleteTodo(todo.id)} className='delBtn'>Delete</button>
     </div>)}
    </div>
  )
}
export default App