
import './App.css';
import Header from './component/header/header'
import {Route,Switch} from 'react-router-dom'
import Creativity from './page/category/creativity/creativity'
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
           <Route path="/creativity"   component={Creativity}/>
           <Route path="/blog"   component={Blog}/>
       </Switch>
     </div>     

    </div>
  );
}

export default App;
