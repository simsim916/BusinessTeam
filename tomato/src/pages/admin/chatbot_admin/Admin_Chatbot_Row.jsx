

const Admin_Chatbot_Row = ({ root, rootList, changeshowChatbot }) => {
    let thispageRoot = rootList.filter(e => e.root == root);

    return (
        <ul>
            <li>{root}</li>
            <li>{
                thispageRoot[0].ing != 0 ?
                    thispageRoot[0].ing == 1 ?
                        '상담중'
                        :
                        '상담완료'
                    :
                    '미확인'
            }</li>
            <li>{thispageRoot.filter(e => e.user_level >= 100).map(e => `${e.writer}`)}</li>
            <li>{thispageRoot.filter(e => e.user_level < 100).map(e => e.writer)}</li>
            <li onClick={() => changeshowChatbot(root)} >채팅하기</li>
        </ul>
    );
}

export default Admin_Chatbot_Row;