import axios from 'axios';

async function getSortList(){
    let url = "http://localhost:8090/item/sort";
    let response = await axios.get(url).catch(err=>{
        console.log(`getSortList : ${err.message}`);
    })
    return (
        
    );
}

export default getSortList;