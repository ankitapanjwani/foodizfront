import SearchAppBar from './components/muipractice';
import {Route} from 'react-router-dom'
import ProfileSection from './components/profilesection';
import PastOrders from './components/pastorders';
import VerticalTabs from './components/verticleTabs';
import MediaControlCard from './components/orders';
import NavAppBar from './components/navbar';
import FooterGrid from './components/footer';
import  Container  from '@material-ui/core/Container';
import  Typography  from '@material-ui/core/Typography';
import AllRestaurants from './components/allRestaurants';
function App() {
  return (
    <div className="App">
        {/* <SearchAppBar></SearchAppBar> */}

        {/* <ProfileSection></ProfileSection> */}
        {/* <VerticalTabs></VerticalTabs> */}
        {/* <Route path="/pastorders" component={PastOrders}></Route> */}
        {/* <MediaControlCard></MediaControlCard> */}
        {/* <NavAppBar></NavAppBar> */}
{/*      
        <FooterGrid fixed></FooterGrid> */}
        <AllRestaurants></AllRestaurants> 
    </div>
  );
}

export default App;
