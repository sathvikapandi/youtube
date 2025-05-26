
import './App.css';

import Sidebar from './components/Sidebar';
import Content from './components/Content';
import { BrowserRouter,Routes,Route,Links } from 'react-router-dom';
import Subscribe from './components/Subscribe';
import Error from './components/Error';
import List from './components/List';

function App() {
  const message="hello from app using props"
   const message2="hello"

  return (
    <>
    <div className='container-fluid main'>
      <div className='row'>
        <BrowserRouter>
        <Sidebar/>
        
        <Routes>
          <Route path='*' element={ <Error/>}></Route>
          <Route path='/' element={ <Content/>}></Route>
          <Route path='/Subscribe' element={ <Subscribe  mydata={message} mydata1={message2} /> } ></Route>
          <Route path='List' element={ <List/>}></Route>
        </Routes>
        </BrowserRouter>
            

      </div>
    </div>
   </>
  );
}

export default App;


/*<div className='cart'></div>
            <h1>{e.firstName}</h1>

            <h1>{i}</h1>*/
