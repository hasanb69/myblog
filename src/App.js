
import './App.css';
import Header from './component/header/header'
import {Route,Switch} from 'react-router-dom'
import Art from './page/category/art/art'
import Psychology from './page/category/psychology/psychology'
import Blog from './page/category/blog'
import HomePage from './page/homepage/homepage'
function App() {
  return (
    <div className="App">
         <Header />
    <div className='container'>
    <Switch>
           <Route exact path="/"   component={HomePage}/>
           <Route path="/psychology" component={Psychology}/>
           <Route path="/art"   component={Art}/>
           <Route path="/blog"   component={Blog}/>
       </Switch>
     </div>     

    </div>
  );
}

export default App;
