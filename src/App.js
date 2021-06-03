
import './App.css';
import Header from './component/header/header'
import {Route,Switch} from 'react-router-dom'
import Art from './page/category/art/art'
import Sport from './page/category/sport/sport'
function App() {
  return (
    <div className="App">
         <Header />
    <div className='container'>
    <Switch>
           <Route exact path="/"   />
           <Route path="/sport" component={Sport}/>
           <Route path="/art"   component={Art}/>
       </Switch>
     </div>     

    </div>
  );
}

export default App;
