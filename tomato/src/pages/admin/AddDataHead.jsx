import "./AddDataHead.css";


const AddDataHead = () => {

    return (
        <div id="excelBox">
            <div className="excelColumn">
                <input type="text" value="상품코드" readOnly/>
                <input type="text" value="대분류" readOnly />
                <input type="text" value="증분류" readOnly />
                <input type="text" value="소분류" readOnly />
                <input type="text" value="브랜드" readOnly />
                <input type="text" value="상품이름" readOnly />
                <input type="text" value="중량" readOnly />
                <input type="text" value="보관방법" readOnly />
                <input type="text" value="포장방식" readOnly />
                <input type="text" value="배송" readOnly />
                <input type="text" value="가격" readOnly />
                <input type="text" value="과세구분" readOnly />
                <input type="text" value="원산지" readOnly />
                <input type="text" value="재고량" readOnly />
                <input type="text" value="등록자" readOnly />
            </div>
        </div>
    );
}


export default AddDataHead;