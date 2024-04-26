import { useEffect, useRef, useState } from 'react';
import { SERVER_RESOURCE } from '../../../model/server-config';
import ItemBox_vertical from '../../components/itemBox_vertical/ItemBox_vertical';
import './View.css'
import { api } from '../../../model/model';

const View = ({ setView }) => {
    const user = JSON.parse(sessionStorage.getItem('userinfo'))
    const [data, setData] = useState([])
    const view = useRef(null)
    useEffect(() => {
        setTimeout(()=>{
            view.current.style.transform = 'translateX(0%)';
        },100)
        if (user)
            api('/item/recent', 'get', null, user.token)
                .then(res => {
                    setData(res.data);
                }).catch(err => {
                    console.log(err.message)
                })

    }, [])

    return (
        <div id="view" ref={view}>
            <h3><i className="fa-solid fa-clock-rotate-left"></i> &nbsp;&nbsp;최근 본 상품&nbsp;&nbsp; <i className="fa-solid fa-clock-rotate-left"></i></h3>
            <i onClick={() => setView(false)} id='closeBTN' className="fa-solid fa-x"></i>
            <div>
                {data.length > 0 ?
                    data.map((e, i) => (
                        <>
                            {i == 0 && <div className='view_date'>{`${new Date(e.userCartRegdate).getFullYear()}.${new Date(e.userCartRegdate).getMonth()}.${new Date(e.userCartRegdate).getDate()}`}<hr></hr></div>}
                            {i > 0 && data[i - 1].userCartRegdate != e.userCartRegdate && <div className='view_date'>{`${new Date(e.userCartRegdate).getFullYear()}.${new Date(e.userCartRegdate).getMonth()}.${new Date(e.userCartRegdate).getDate()}`}<hr></hr></div>}
                            <ItemBox_vertical item={e} key={i} />
                        </>
                    ))
                    :
                    <div>아직 상품이 없습니다!</div>
                }
            </div>
        </div>
    );
}

export default View;