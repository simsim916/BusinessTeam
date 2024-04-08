import './Member.css'
import LoginBG from "./LoginBG/LoginBG";
import SignBG from "./SignBG/SignBG";
import { SERVER_RESOURCE } from '../../model/server-config';
import { Routes, Route } from 'react-router-dom';

const Member = () => {

  return (
    <div id="bodyBG" style={{ backgroundImage: `url(${SERVER_RESOURCE}/img/signup/signup.jpg)` }}>
      <div id='alertBox'>
        
      </div>
      <div id="contentBox">
        <Routes>
          <Route path='/signup' element={<SignBG />} />
          <Route path='/*' element={<LoginBG />} />
        </Routes>
      </div>
    </div>
  );
}

export default Member;