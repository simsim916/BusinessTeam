import "./EventPage.css";
import Header from "../0home/header/Header";
import EventPageTop from "./eventPageTop/EventPageTop";
import EventDetail from './eventDetail/EventDetail';
import EventList from './eventList/EventList';
import EventItemList from "./eventItemList/EventItemList";
import SecondContainer from "../0home/secondContainer/SecondContainer";


const EventPage = () => {

    return (
        <>
            <Header />
            <div id="containerYH">
                <EventPageTop />
                <EventDetail />
                <EventList />
                <EventItemList />
                <SecondContainer />
            </div>
        </>
    );
}

export default EventPage;