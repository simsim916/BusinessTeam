import { SERVER_RESOURCE } from '../../../model/server-config';
import ItemBox_vertical from '../../components/itemBox_vertical/ItemBox_vertical';
import './View.css'

const View = ()=>{
    return (
        <div id="view">
            <h3><i className="fa-solid fa-clock-rotate-left"></i> &nbsp;&nbsp;최근 본 상품&nbsp;&nbsp; <i className="fa-solid fa-clock-rotate-left"></i></h3>
            <div>
                <div className='view_date'>24.04.23<hr></hr></div>
                {/* <ItemBox_vertical /> */}
            </div>
        </div>
    );
}

export default View;