import './style.css';
import {signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth, provider} from "../../firebaseConfig";
import {useEffect, useState} from "react";
import {useNavigate, Link} from "react-router-dom";

function Login() {

    const [inUp, setInUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const token = localStorage.getItem('userId');
    const navigate = useNavigate();

    const handleChangeFirst = () => {
        setInUp(true);
    }
    const handleChangeSecond = () => {
        setInUp(false);
    }

    const getEmVal = (e) => {
        setEmail(e.target.value);
    };
    const getPassVal = (e) => {
        setPassword(e.target.value);
    };

    const loginWithEmailPassword = (e) => {
        e.preventDefault();
        if (inUp){
            signInWithEmailAndPassword(auth, email, password)
                .then((data) => {
                    localStorage.setItem('userId', data.user.uid);
                    console.log(data.user);
                })
                .catch((error) => {
                    console.log(error.message);
                })
        }else {
            createUserWithEmailAndPassword(auth, email, password).then((data) => {
                localStorage.setItem('userId', data.user.uid);
                console.log(data.user);
            }).catch((error) => {
                alert(error.message);
            })
        }

    }

    const loginPopup = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider).then((data) => {
            console.log(data.user);
            localStorage.setItem('userId', data.user.uid);
            navigate('/profile');
        }).catch((error) => {
            alert(error);
        })

    };

    return (
        <div className="login-panel">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-md-5 col-sm-7 col-10 login-parent">
                        <div className="changer-btns d-flex">
                            <button className={inUp? "active": ""} onClick={handleChangeFirst}>SignIn</button>
                            <button className={inUp? "": "active"} onClick={handleChangeSecond}>SignUp</button>
                        </div>
                        <form onSubmit={(e) => {loginWithEmailPassword(e)}}>
                            <input type="email" placeholder="Enter_your_email_name_@..." onChange={(e) => {getEmVal(e)}}/>
                            <input type="password" placeholder="Enter_your_email_password****" onChange={(e) => {getPassVal(e)}}/>
                            <button className="enter-btn">Enter <i className="bi bi-hand-index-thumb"></i></button>
                            <button className="enter-btn-2" onClick={(e) => {loginPopup(e)}}>SignIn with <i className="bi bi-google"></i></button>
                            <Link className="text-center d-block my-2" to="/profile">
                                to profile
                                <i className="bi bi-person-circle"></i>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;