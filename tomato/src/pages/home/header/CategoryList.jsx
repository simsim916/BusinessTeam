
function CategoryList({ data }) {
    return (
        <li><img src={"http://localhost:8090/resources" + '/img/categoryImg/' + data.sort2 + ".png"} alt={data.sort2 + "이미지"} />{data.sort2}</li>
    );
}


export default CategoryList;