

const Admin_Chatbot_Row = ({
    root, // 채팅방의 순번
    rootList, // 전체 채팅 내용
    showChatbot, //
    changeShowChatbot // 나타낼 채팅방 배열을 수정하는 함수
}) => {
    /* 전체 채팅 내용에서 현 component의 root값으로 filter함 */
    let thispageRoot = rootList.filter(e => e.root == root);

    return (
        <ul>
            <li>{root}</li>
            <li>{thispageRoot[0].type}</li>
            <li style={{
                backgroundColor: thispageRoot[0].ing != 0 ?
                    thispageRoot[0].ing == 1 ?
                        'green'
                        :
                        'grey'
                    :
                    '#9B1B30'
            }}>
                {thispageRoot[0].ing == 0 && '미확인'}
                {thispageRoot[0].ing == 1 && '상담중'}
                {thispageRoot[0].ing == 2 && '상담완료'}
            </li>
            {/* {thispageRoot.map((e, i) => <li>{new Date(e.regdate).getHours()}시 {new Date(e.regdate).getMinutes()}분</li>)} */}
            <li>{thispageRoot.map(e => (<span>{new Date(e.regdate).getHours()}시 {new Date(e.regdate).getMinutes()}분</span>))}</li>
            <li>{thispageRoot.filter(e => e.user_level >= 100).map(e => e.writer)}</li>
            <li>{thispageRoot.filter(e => e.user_level < 100).map(e => e.writer)}</li>
            {showChatbot.includes(root) ?
                <li style={{backgroundColor:'black'}} id="chtaBotING" onClick={() => changeShowChatbot(root)} >채팅닫기</li>
                :
                <li id="chtaBotING" onClick={() => changeShowChatbot(root)} >채팅하기</li>

            }
        </ul>
    );
}

export default Admin_Chatbot_Row;