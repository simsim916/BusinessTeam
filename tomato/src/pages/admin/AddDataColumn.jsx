import "./AddDataColumn.css";


const AddDataColumn = () => {

    return (
        <div id="excelBox">
            <div className="excelColumn">
                <input type="text" value="상품코드" />
                <input type="text" value="대분류" />
                <input type="text" value="증분류" />
                <input type="text" value="소분류" />
                <input type="text" value="브랜드" />
                <input type="text" value="상품이름" />
                <input type="text" value="중량" />
                <input type="text" value="보관방법" />
                <input type="text" value="포장방식" />
                <input type="text" value="배송" />
                <input type="text" value="가격" />
                <input type="text" value="과세구분" />
                <input type="text" value="원산지" />
                <input type="text" value="재고량" />
                <input type="text" value="등록자" />
            </div>
        </div>
    );
}


export default AddDataColumn;