import './GraphDataBox.css'

const GraphDataBox = ({ data }) => {

    const column = Object.keys(data[0])
    return (
        <div className="graphDataBox">
            <ul id="column">
                {column.map(e => <li>{e}</li>)}
            </ul>
            <div id="dataBox">
                {data.map((e, i) => (
                    <ul key={i}>
                        <li>{e.visitDate}</li>
                        <li>{e.homeCount}</li>
                        <li>{e.listCount}</li>
                        <li>{e.detailCount}</li>
                        <li>{e.orderCount}</li>
                    </ul>
                ))}
            </div>
        </div>
    );
}

export default GraphDataBox