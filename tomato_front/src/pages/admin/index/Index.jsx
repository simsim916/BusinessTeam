
import Weather from './../weather/Weather';
import Index_calender from './Index_calender';
import './Index.css';
import ToDoList from './Index_TodoList/ToDoList';

const Index = () => {
    return (
        <div>
            <div id="Index">
                <ToDoList />
                <Weather />
            </div>
        </div>
    )
}

export default Index;