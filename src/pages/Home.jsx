import React from 'react';
import AddTodo from '../components/AddTodo';
import RemainingMessage from '../components/RemainingMessage';
import SearchBar from '../components/SearchBar';
import TodoList from '../components/TodoList';
import TodoListContextProvider from '../contexts/TodoListContext';

function Home() {
    return (
        <TodoListContextProvider>
            <AddTodo />
            <SearchBar />
            <RemainingMessage />
            <TodoList />
        </TodoListContextProvider>
    );
}

export default Home;
