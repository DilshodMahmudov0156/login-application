import './App.css';
import Login from "./components/login-page/Login";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Profile from "./components/profile/Profile";
import ProtectedRoute from "./components/protected-route/protectedRoute";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route element={<ProtectedRoute/>}>
                    <Route path="/profile" element={<Profile/>}/>
                </Route>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
