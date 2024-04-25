import { useState, useEffect } from "react";
import "./ToDoList.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ToDoList_Write from './ToDoList_Write';
import Loading from './../../../components/Loading';
import Error from './../../../components/Error';
import { api } from "../../../../model/model";

const ToDoList = () => {

    const [selectAll, setSelectAll] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState([
        { date: '2024-04-24', title: 'Meeting', ing: 0 },
        { date: '2024-04-24', title: 'Meeting2', ing: 2 },
        { date: '2024-04-25', title: 'Appointment', ing: 1 },
    ]);
    const [todoWrite, SetTodoWrite] = useState(false);
    const [refresh, setRefresh] = useState(true);
    const user = JSON.parse(sessionStorage.getItem('userinfo'));

    useEffect(() => {
        api(`/todo/selectall`, 'get', null)
            .then(res => {
                setLoading(false);
                setSelectAll(res.data);
            }).catch(err => {
                setLoading(false);
                setError(true);
            })
    }, []);

    if (loading) return <Loading />
    if (error) return <Error />


    const changeDate = (newDate) => {
        setDate(newDate);
    }
    const getEventsForDate = (date) => {
        return events.filter(event => event.date === date.toISOString().split('T')[0]);
    }

    const todoWriteClick = () => {
        if (user)
            SetTodoWrite(!todoWrite);
        else {

        }
    }


    return (
        <div className="todoListBox">
            <h2 className="todoListTitle">ToDo List 📅</h2>
            <div className="scheduleBoxTotal">
                <div>🟢 완료 : 5 </div>
                <div>🟡 미완료 : 3</div>
                <div>🟠 마감임박 : 2</div>
            </div>
            <div className="calendar">
                <Calendar
                    onChange={changeDate}
                    value={date}
                    tileContent={({ date }) => {
                        const eventForDate = getEventsForDate(date);
                        return (
                            <div className="todo">
                                {eventForDate.length > 0 &&
                                    eventForDate.map(event =>
                                        <div key={event.title}>
                                            {event.ing == 0 ?
                                                '🟡'
                                                :
                                                event.ing == 1 ?
                                                    '🟠'
                                                    :
                                                    '🟢'
                                            }
                                        </div>)
                                }
                            </div>
                        );
                    }}
                />
            </div>

            <div className="todoListWriteBox">
                <div className="newScheduleWriteButton" onClick={todoWriteClick}>일정 등록</div>
                <h3 className="todayDate">{`${new Date(date).getFullYear()}년 ${new Date(date).getMonth()}월 ${new Date(date).getDate()}일`}</h3>

                <ul className="scheduleBoxList">
                    <li>
                        <label>
                            <input type="checkbox" />
                            떡볶이 밀키트 재고확인
                        </label>
                        <div className="buttonBox">
                            <i className="fa-solid fa-pen-to-square"></i>
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            떡볶이 밀키트 재고확인
                        </label>
                        <div className="buttonBox">
                            <i className="fa-solid fa-pen-to-square"></i>
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            떡볶이 밀키트 재고확인
                        </label>
                        <div className="buttonBox">
                            <i className="fa-solid fa-pen-to-square"></i>
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            떡볶이 밀키트 재고확인
                        </label>
                        <div className="buttonBox">
                            <i className="fa-solid fa-pen-to-square"></i>
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            떡볶이 밀키트 재고확인
                        </label>
                        <div className="buttonBox">
                            <i className="fa-solid fa-pen-to-square"></i>
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            떡볶이 밀키트 재고확인
                        </label>
                        <div className="buttonBox">
                            <i className="fa-solid fa-pen-to-square"></i>
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            떡볶이 밀키트 재고확인
                        </label>
                        <div className="buttonBox">
                            <i className="fa-solid fa-pen-to-square"></i>
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            떡볶이 밀키트 재고확인
                        </label>
                        <div className="buttonBox">
                            <i className="fa-solid fa-pen-to-square"></i>
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            떡볶이 밀키트 재고확인
                        </label>
                        <div className="buttonBox">
                            <i className="fa-solid fa-pen-to-square"></i>
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            떡볶이 밀키트 재고확인
                        </label>
                        <div className="buttonBox">
                            <i className="fa-solid fa-pen-to-square"></i>
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            떡볶이 밀키트 재고확인
                        </label>
                        <div className="buttonBox">
                            <i className="fa-solid fa-pen-to-square"></i>
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            떡볶이 밀키트 재고확인
                        </label>
                        <div className="buttonBox">
                            <i className="fa-solid fa-pen-to-square"></i>
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            떡볶이 밀키트 재고확인
                        </label>
                        <div className="buttonBox">
                            <i className="fa-solid fa-pen-to-square"></i>
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            떡볶이 밀키트 재고확인
                        </label>
                        <div className="buttonBox">
                            <i className="fa-solid fa-pen-to-square"></i>
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            떡볶이 밀키트 재고확인
                        </label>
                        <div className="buttonBox">
                            <i className="fa-solid fa-pen-to-square"></i>
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            떡볶이 밀키트 재고확인
                        </label>
                        <div className="buttonBox">
                            <i className="fa-solid fa-pen-to-square"></i>
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            떡볶이 밀키트 재고확인
                        </label>
                        <div className="buttonBox">
                            <i className="fa-solid fa-pen-to-square"></i>
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            떡볶이 밀키트 재고확인
                        </label>
                        <div className="buttonBox">
                            <i className="fa-solid fa-pen-to-square"></i>
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </li>
                </ul>

                {todoWrite ? <ToDoList_Write refresh={refresh} setRefresh={setRefresh} todoWriteClick={todoWriteClick} /> : null}
            </div>


        </div>

    );
}

export default ToDoList;   