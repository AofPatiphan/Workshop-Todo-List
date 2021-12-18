import { useState,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTodo from './components/AddTodo';
import RemainingMessage from './components/RemainingMessage';
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList';
import axios from 'axios'




const initialTodoList = [
  { id: uuidv4(), title: 'Watching a movie', completed: false },
  { id: uuidv4(), title: 'Meeting a doctor', completed: false },
  { id: uuidv4(), title: 'Dinner with my family', completed: true }
];

// const previousTodo = [a, b, c] // nextTodo = [d, a, b, c]
// previousTodo.unshift(d)
// const nextTodo = previousTodo.slice(0);
// nextTodo.splice(0, 0, d)
// const nextTodo = [d, ...previousTodo];
// setTodoList(nextTodo);

function App() {
  const [todoList, setTodoList] = useState([]);
  const [searchText, setSearchText] = useState('abc');
  const [searchStatus, setSearchStatus] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/todos').then(res=>{
      console.log(res.data);
      setTodoList(res.data.todos)
    })
    
  }, [])

  const createTodo = title => {
    axios.post('http://localhost:8080/todos',{title:title,completed: false}).then(res=>{
      const nextTodo = [res.data.todo,...todoList]
      setTodoList(nextTodo)
    })
  };

  const deleteTodo = async id => {
    const res = await axios.delete(`http://localhost:8080/todos/${id}`);
      console.log(res.data);
    
    
    const idx = todoList.findIndex(item => item.id === id);
    const newTodoList = [...todoList];
    if (idx !== -1) {
      newTodoList.splice(idx, 1);
    }
    setTodoList(newTodoList);
  };

  const updateTodo =  (id, value) => {

    const idx = todoList.findIndex(item => item.id === id);
    const newTodoList = [...todoList];
    if (idx !== -1) {
      newTodoList[idx] = { ...newTodoList[idx], ...value };
      axios.put(`http://localhost:8080/todos/${id}`,newTodoList[idx]).then(res=>{
        console.log(res.data)
        setTodoList(newTodoList)
      })
    }
  };

  const pendingTodoList = todoList.filter(item => !item.completed);

  const filteredTodoList = todoList.filter(
    item =>
      item.title.toLowerCase().includes(searchText.toLowerCase()) &&
      (searchStatus === '' || item.completed === searchStatus)
  );

  return (
    <div className="container">
      <div className="mt-5 mx-auto mw-xs">
        <AddTodo createTodo={createTodo} />
        <SearchBar
          searchStatus={searchStatus}
          setSearchStatus={setSearchStatus}
          setSearchText={setSearchText}
          searchText={searchText}
        />
        <RemainingMessage
          remaining={pendingTodoList.length}
          total={todoList.length}
        />
        <TodoList
          todoList={filteredTodoList}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default App;
