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
            <br/>
            <Route path="/">
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
