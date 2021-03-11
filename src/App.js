import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Home, Detail } from './pages'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState } from 'react';

function App() {
  const [addModal, setAddModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [path, setPath] = useState(false)
  return (
    <div className="App">
      <Router>

        <Navbar
        setAddModal={setAddModal}
        setEditModal={setEditModal}
        path={path}
        setPath={setPath}/>

        <Switch>

          <Route exact path="/contact/:id">
            <Detail/>
          </Route>
          
          <Route exact path="/">
            <Home
            addModal={addModal}
            editModal={editModal}
            setAddModal={setAddModal}
            setEditModal={setEditModal}
            path={path}
            setPath={setPath}/>
          </Route>

        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
