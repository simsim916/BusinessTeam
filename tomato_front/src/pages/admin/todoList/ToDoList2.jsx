import "./ToDoList2.css";

const ToDoList2 = () => {

    return (
        <div className="todoListBox">
            <h2 className="todoListTitle">ToDo List 📅</h2>
        
            <div className="calendar">달력들어가기</div>
        
            <div className="todoListWirteBox">
                <h3 className="todayDate">{new Date().toDateString()}</h3>
                <div className="scheduleBox">
                    <ul className="scheduleBoxList">
                        <li><input type="checkbox" />떡볶이 밀키트 재고확인<button>편집</button></li>
                        <li><input type="checkbox" />오뎅탕 밀키트 재고주문<button>편집</button></li>
                        <li><input type="checkbox" />제육볶음 밀키트 재고주문<button>편집</button></li>
                        <li><input type="checkbox" />파스타 밀키트 재고주문<button>편집</button></li>
                    </ul>
                </div>

                <div className="newScheduleBox">
                    <h3 className="newScheduleTitle">New 일정 작성 </h3>
                    <div className="newScheduleWrite">
                        <input 
                            placeholder="새로운 일정 입력하세요..." />
                        <button>추가</button>
                    </div>
                </div>

                <div className="scheduleBoxTotal">
                    <div>⚫ 총일정 갯수: </div>
                    <div>🟢 완료된 일정: </div>
                    <div>🔴 미완료 일정: </div>
                </div>
            </div>
        </div> 

    );
}

export default ToDoList2;