import SearchAppBar from './components/muipractice';
import {Route} from 'react-router-dom'
import ProfileSection from './components/profile';
import PastOrders from './components/pastorders';
import VerticalTabs from './components/verticleTabs';
function App() {
  return (
    <div className="App">
        <SearchAppBar></SearchAppBar>

        {/* <ProfileSection></ProfileSection> */}
        {/* <VerticalTabs></VerticalTabs> */}
        {/* <Route path="/pastorders" component={PastOrders}></Route> */}
    </div>
  );
}

export default App;
