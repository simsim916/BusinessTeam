import "./ToDoList_Write.css";
import { api, async } from './../../../model/model';
import { useState } from "react";
import Loading from './../../components/Loading';
import Error from './../../components/Error';

const ToDoList_Write = (setRefresh, refresh) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [todoWriteClose, SetTodoWriteClose] = useState(true);
    
    const submitTodo = async () => {
        await api('todo/insert', 'post')
            .then(res => {
                setLoading(false);
            }).catch(err => {
                setLoading(false);
                setError(true);
            });
        setRefresh(!refresh);
        todoWriteBoxClose();
    }

    const todoWriteBoxClose = () => {
        SetTodoWriteClose(!todoWriteClose);
        submitTodo();
    }

    if (loading) return <Loading />
    if (error) return <Error />


    return (
        <div className="newScheduleBox">
            <h3 className="newScheduleTitle">새로운 일정 등록하기</h3>
            <div className="newScheduleWrite">
                <input
                    placeholder="새로운 일정 입력하세요..." />
                <button onClick={submitTodo}>등록</button>
            </div>
        </div>
    );
}

export default ToDoList_Write;


