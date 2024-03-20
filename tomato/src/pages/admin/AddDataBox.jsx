import "./AddDataBox.css";
import DataColumn from "./DataColumn";


const AddDataHead = () => {

    return (
        <div id="excelBox">
            <div id="topBox">
                <div><i class="fa-solid fa-list"></i>식자재 등록</div>
                <div id="topButtonBox">
                    <div>추가</div>
                    <div>등록</div>
                </div>
            </div>
            <div id="excelHead">
                <input type="text" value="상품코드" readOnly />
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
            <DataColumn />
            <DataColumn />
            <DataColumn />
            <DataColumn />
            <DataColumn />
            {/* 특정 메서드를 클릭하면 컴포넌트가 추가 생성되도록? */}
            {/* 마지막 컴포넌트에 border-bottom : 1px 줘야한다*/}
        </div>
    );
}


export default AddDataHead;