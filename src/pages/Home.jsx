import React from 'react';
import AddTodo from '../components/AddTodo';
import RemainingMessage from '../components/RemainingMessage';
import SearchBar from '../components/SearchBar';
import TodoList from '../components/TodoList';
import TodoListContextProvider from '../contexts/TodoListContext';
import AuthContextProvider from '../contexts/AuthContext';

function Home() {
    return (
        <AuthContextProvider>
            <TodoListContextProvider>
                <AddTodo />
                <SearchBar />
                <RemainingMessage />
                <TodoList />
            </TodoListContextProvider>
        </AuthContextProvider>
    );
}

export default Home;
