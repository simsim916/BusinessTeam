import ChatBotBox from './../../home/chatbot/ChatBotBox';


const Admin_Chatbot_Room = ({root}) => {
    return (
        <div id='admin_ChatBotRoom_Box'>
            <h4>첫번째 채팅방</h4>
            <h4>상담 받는 아이디 : </h4>
            <ChatBotBox root={root} />
        </div>
    );
}

export default Admin_Chatbot_Room;  