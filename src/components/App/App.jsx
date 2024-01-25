import axios from 'axios';
import { HashRouter, Route, Link } from 'react-router-dom';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import About from '../About/About.jsx';


function App() {
    return (
        <div className="App">
            <HashRouter>
            


            <header className="App-header">
            <h1 className="App-title">GitHub Student List</h1>
            </header>
            <div>
            {/* NAVIGATION for pages */}
              <ul>
             <li>
              <Link to="/">Home</Link>
            </li>
             <li>
             <Link to="/about">About Students</Link>
          </li>
          <li>
            <Link to="/allStudents">Student List</Link>
          </li>
        </ul>
      </div>
            <br/>
            <Route path="/" exact>
            <StudentForm />
            </Route>

            <Route path="/about">
            <About />
            </Route>

            <Route path="/allStudents">
            <p>Student list:</p>
            <StudentList />
            </Route>
            </HashRouter>
        </div>
    );
}

export default App;
