import './App.css';
import Banner from './components/Banner';
import {TabContainer} from "react-bootstrap";
import PageContent from './components/PageContent';

function App() {
  return (
    <div className="App max-height">
      <TabContainer defaultActiveKey="portfolio">
        <Banner/>
        <PageContent/>
      </TabContainer>
    </div>
  );
}

export default App;
