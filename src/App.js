import SearchAppBar from './components/muipractice';
import {Route} from 'react-router-dom'
import ProfileSection from './components/profilesection';
import PastOrders from './components/pastorders';
import VerticalTabs from './components/verticleTabs';
import MediaControlCard from './components/orders';
function App() {
  return (
    <div className="App">
        {/* <SearchAppBar></SearchAppBar> */}

        <ProfileSection></ProfileSection>
        {/* <VerticalTabs></VerticalTabs> */}
        {/* <Route path="/pastorders" component={PastOrders}></Route> */}
        {/* <MediaControlCard></MediaControlCard> */}
    </div>
  );
}

export default App;
