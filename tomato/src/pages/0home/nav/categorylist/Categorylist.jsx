import categoryIMG from '../../../../img/';

async function Categorylist() {
    let url = "http://localhost:8090/item/sort";
    let data = await axios.get(url).catch(err => {
        console.log(`getSortList : ${err.message}`);
    }).data;
    return (
        <li><img src={categoryIMG + data.sort2 + ".png"} alt={data.sort2 + "이미지"} />{data.sort2}</li>
    );
}