import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList";
import {useEffect, useState} from "react";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import queryString from "query-string";
import PostFiltersForm from "./components/PostFiltersForm";

function App() {
    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 11
    })
    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1,
        title_like:''
    })
    useEffect(() => {
        async function fetchPostList() {
            try {
                const paramString = queryString.stringify(filters);
                const requestURL = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
                const response = await fetch(requestURL);
                const responseJson = await response.json();
                const {data,pagination} = responseJson;
                setPostList(data);
                setPagination(pagination)
            } catch (error) {
                console.log("Error", error.message())
            }

        }

        fetchPostList();
    }, [filters])

    const handlePageChange = (newPage) => {
        console.log(newPage)
        setFilters({
            ...filters,
            _page: newPage
        })
    }

    const handleFiltersChange=(newFilters)=>{
        console.log("New filters: ",newFilters)
        setFilters({
            ...filters,
            _page:1,
            title_like: newFilters.searchTerm
        })
    }

    // const todoList = [
    //     {id: 1, title: 'I love Easy Frontend! 😍 '},
    //     {id: 2, title: 'We love Easy Frontend! 🥰 '},
    //     {id: 3, title: 'They love Easy Frontend! 🚀 '},
    // ]
    // const [todos, setTodos] = useState(todoList);
    // const handleTodoClick = ((todo) => {
    //     if (!todo) return;
    //     const index = todos.findIndex(item => item.id === todo.id);
    //     let newTodoList = [...todos];
    //     newTodoList.splice(index, 1);
    //     setTodos(newTodoList)
    // })
    //
    // const handleTodoSubmit = ((formValues) => {
    //     // console.log(formValues)
    //     const newTodo = {
    //         id: todos.length + 1,
    //         title: formValues.title
    //     }
    //     let newTodoList = [...todos];
    //     newTodoList.push(newTodo);
    //     setTodos(newTodoList)
    // })

    return (
        <div className="App">
            <PostFiltersForm onSubmit={handleFiltersChange}/>
            <PostList posts={postList}/>
            <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
            />
            {/*<TodoForm onSubmit={handleTodoSubmit}/>*/}
            {/*<TodoList todos={todos} onTodoClick={handleTodoClick}/>*/}
        </div>
    );
}

export default App;
