import { useRef, useState } from "react";
import "./PagingBox.css";


// ** PagingBox 사용법
// => 부모컴포넌트에서 4개 값을 보내줘야 한다.
// 1. limit : 페이지당 출력하고자 하는 데이터의 개수
//    => limit 상태값 변수를 이용하면 페이징 컴포넌트의 사용이 쉬워진다.
//       list 형태의 데이터를 출력하는 페이지라면 몇개씩 출력할지 정하는 경우가 많다.
//       limit 변수를 사용하는거 어떤가 ????
// 2. list : 사용하려는 DataList   ex) itemList
// 3. currPage : 현재 페이지를 알리기 위한 상태값
//    부모컴포넌트에  const [currPage, setCurrPage] = useState(1);  지정
// 4. setCurrPage 함수도 같이 보내줘야한다.


const PagingBox = ({ limit, list, currPage, setCurrPage }) => {




    const getPageNumArray = (limit, list) => {
        // 페이징 할 <div> 태그 만들때 쓰는 함수
        let needPageCount = 1;
        let arr = [];
        if (list) {
            needPageCount = Math.ceil(list.length / limit);
            for (let i = 0; i < needPageCount; i++) {
                arr.push(i + 1);
            }
        }
        return arr;
        // 우리가 보고자 하는 데이터의 개수를 가지고 필요한 페이지 수를 계산  
        // ex) 필요한 페이지 수 7 => [1,2,3,4,5,6,7] 배열 return
    }

    return (
        // <div id="pagingBox">
        //     <div onClick={() => setCurrPage(1)}><i className="fa-solid fa-angles-left"></i></div>
        //     {getPageNum(limit, list).map((pageNum, i) => {
        //         const startPage = Math.max(currPage - 2, 1);
        //         const endPage = Math.min(startPage + 4, getPageNum(limit, list).length);

        //         if (pageNum >= startPage && pageNum <= endPage) {
        //             return (
        //                 <div
        //                     style={{
        //                         textAlign: 'center',
        //                         width: '25px',
        //                         lineHeight: '25px',
        //                         fontWeight: pageNum === currPage ? 'bold' : '',
        //                         border: pageNum === currPage ? '1px solid' : 'none'
        //                     }}
        //                     onClick={() => setCurrPage(pageNum)}
        //                     id={pageNum}
        //                     key={i}>
        //                     {pageNum}
        //                 </div>
        //             );
        //         } else {
        //             return null;
        //         }
        //     })}
        //     <div onClick={() => setCurrPage(getPageNum(limit, list).length)}>
        //         <i className="fa-solid fa-angles-right"></i>
        //     </div>

        // </div >
        // ============================================================================
        <div id="pagingBox">
            <div onClick={() => setCurrPage(1)}>
                <i className="fa-solid fa-angles-left"></i>
            </div>
            {getPageNumArray(limit, list).map((pageNum, i) => {
                const numPagesToShow = 5;
                const totalPages = getPageNumArray(limit, list).length;
                let startPage = Math.max(currPage - Math.floor(numPagesToShow / 2), 1);
                let endPage = Math.min(startPage + numPagesToShow - 1, totalPages);

                if (endPage - startPage + 1 < numPagesToShow) {
                    startPage = Math.max(endPage - numPagesToShow + 1, 1);
                }

                if (pageNum >= startPage && pageNum <= endPage) {
                    return (
                        <div
                            style={{
                                color: pageNum === currPage ? '#9B1B30' : '',
                                textAlign: 'center',
                                width: '25px',
                                lineHeight: '25px',
                                fontWeight: pageNum === currPage ? 'bold' : '',
                                border: pageNum === currPage ? '1px solid' : 'none'
                            }}
                            onClick={() => setCurrPage(pageNum)}
                            id={pageNum}
                            key={i}>
                            {pageNum}
                        </div>
                    );
                } else {
                    return null;
                }
            })}
            <div onClick={() => setCurrPage(getPageNumArray(limit, list).length)}>
                <i className="fa-solid fa-angles-right"></i>
            </div>
        </div>
    );
}

export default PagingBox;