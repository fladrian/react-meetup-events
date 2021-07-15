import { Switch, Route } from "react-router-dom";

import AllMeetups from './pages/AllMeetups';
import NewMeetups from './pages/NewMeetups';
import Favorites from './pages/Favorites';

import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <AllMeetups />
        </Route>
        <Route path="/add-meetup">
          <NewMeetups />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
