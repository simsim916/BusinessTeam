import { useEffect, useRef } from 'react';
import './Alert.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeAlert } from '../../redux/basic/actions';
import { Link } from 'react-router-dom';

const Alert = () => {
    console.log('Alert 랜더링')

    const statusbar = useRef(null)
    const dispatch = useDispatch();
    const data = useSelector(state => state.basic.alert)

    useEffect(() => {
        statusbar.current.style.transform = 'translateX(-100%)'
        setTimeout(() => {
            dispatch(changeAlert(null));
        }, 1000 * data.time)
    }, [])

    return (
        <div id="alert" style={data.style}>
            <div>
                <h3>{data.title}</h3>
                <p>{data.content}</p>
            </div>
            <div ref={statusbar} style={{ transition: `${data.time}s` }}></div>
        </div>
    );
}

export default Alert;