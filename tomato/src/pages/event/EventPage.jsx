import "./EventPage.css";
import EventPageTop from './eventPageTop/EventPageTop';
import EventDetail from './eventDetail/EventDetail';
import EventList from './eventList/EventList';
import EventItemList from './eventItemList/EventItemList';
import SecondContainer from './../home/index/secondContainer/SecondContainer';
import Header from './../home/index/header/Header';


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