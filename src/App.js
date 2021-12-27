
import './App.css';
import TicketForm from './form'
import { Switch,Route, BrowserRouter, Link } from 'react-router-dom'
function App() {
  return (
    <div>
      <TicketForm/>
         {/* <BrowserRouter>
                <Link to ="/home">Home</Link>
                {/* <Link to='/tickets'>Tickets</Link> */}
               
                        {/* <Route exact path='/home' component={TicketForm}/> */}

                        {/* <Route path='/tickets' component={TicketData}/> */}
               
            {/* </BrowserRouter> */} 

        
      </div>
  );
}

export default App;
