import "./ToDoList_Write.css";
import { useState } from "react";
import { api } from "../../../../model/model";
import Loading from './../../../components/Loading';
import Error from './../../../components/Error';

const ToDoList_Write = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [todoWriteClose, SetTodoWriteClose] = useState(true);
    const [refresh, setRefresh] = useState(false);
    const [todoInput, setTodoInput] = useState("");
    
    const submitTodo = async () => {
        const inputData = { todo: todoInput };

        await api('todo/insert', 'post', inputData)
            .then(res => {
                setLoading(false);
            }).catch(err => {
                setLoading(false);
                setError(true);
            });
            todoWriteBoxClose();
        }
        
    const todoWriteBoxClose = () => {
        SetTodoWriteClose(!todoWriteClose);
        setRefresh(!refresh);
    // submitTodo();
    }

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <div className="newScheduleBox">
            <h3 className="newScheduleTitle">새로운 일정 등록하기</h3>
            <div className="newScheduleWrite">
                <input
                    placeholder="새로운 일정 입력하세요..." value={todoInput}
                    onChange={(e) => setTodoInput(e.target.value)}/>
                <button onClick={submitTodo}>등록</button>
            </div>
        </div>
    );
}

export default ToDoList_Write;


