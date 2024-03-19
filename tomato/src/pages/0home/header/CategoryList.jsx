
function CategoryList({ data }) {
    return (
        <li><img src={process.env.PUBLIC_URL + '/img/categoryImg/' + data.sort2 + ".png"} alt={data.sort2 + "이미지"} />{data.sort2}</li>
    );
}


export default CategoryList;