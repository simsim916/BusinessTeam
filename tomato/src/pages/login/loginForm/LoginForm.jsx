import './ContentBox.css'
import LoginBG from "./LoginBG/LoginBG";
import SignBG from "./SignBG/SignBG";

const ContentBox = () => {

    return (
        <>
            <div id="bodyBG"></div>
            <div id="contentBox">
                <LoginBG />
                <SignBG />
            </div>
        </>
    );
}

export default ContentBox;