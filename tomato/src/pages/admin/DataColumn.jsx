import "./DataColumn.css";




const DataColumn = ({ style ,item, column }) => {

    return (
        <div className="excelColumn">
            {/* {column.map((col,item)=> {<input type="text" }/> })} */}
            <input style={style} type="text" value={item.code} readOnly />
            {Object.keys(item).slice(1).map((e, i) => <input style={style} type="text" value={item[e]} key={i} readOnly />)}

            {/* <input type="text" value={item.code} readOnly />
            <input type="text" placeholder={item.sort1} />
            <input type="text" placeholder={item.sort2} />
            <input type="text" placeholder={item.sort3} />
            <input type="text" placeholder={item.brand} />
            <input type="text" placeholder={item.name} />
            <input type="text" placeholder={item.weight} />
            <input type="text" placeholder={item.storage} />
            <input type="text" placeholder={item.packing} />
            <input type="text" placeholder={item.delivery} />
            <input type="text" placeholder={item.price} />
            <input type="text" placeholder={item.vat} />
            <input type="text" placeholder={item.origin} />
            <input type="text" placeholder={item.sales} />
            <input type="text" placeholder={item.stock} />
            <input type="text" placeholder={item.views} />
            <input type="text" placeholder={item.like} />
            <input type="text" placeholder={item.event_code} />
            <input type="text" placeholder={item.admin} />
            <input type="text" placeholder={item.discount} />
            <input type="text" placeholder={item.event_name} /> */}
        </div>
    );
}


export default DataColumn;