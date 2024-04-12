import { useRef } from 'react';
import './Alert.css';

const Alert = () => {
    const statusbar = useRef(null)
    return (
        <div id="alert">
            <h3>로그인 성공!</h3>
            <p></p>
            <div ref={statusbar} style={{transform:'translateX(-100%)'}}></div>
        </div>
    );
}

export default Alert;