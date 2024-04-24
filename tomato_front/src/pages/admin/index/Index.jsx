
import Weather from './../weather/Weather';
import ToDoList2 from './Index_TodoList/ToDoList';
import Index_calender from './Index_calender';
import './Index.css';

const Index = () => {
    return (
        <div>
            <div id="Index">
                {/* {/* <Weather /> */}
                {/* <Index_calender /> */}
                <ToDoList2 />
                < Weather />
            </div>
        </div>
    )
}

export default Index;