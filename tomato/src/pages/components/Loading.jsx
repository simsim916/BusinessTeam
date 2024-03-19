import './Loading.css';

const Loading = () => {
    return (
        <div className="loadingBox">
            <img src={process.env.PUBLIC_URL + " /img/logo2.png"} alt="로딩이미지" />
            로딩중입니다!<br />
            잠시 기다려주세요.
        </div>
    );
}

export default Loading;