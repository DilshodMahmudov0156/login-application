import React, {useState} from "react";
import { db } from "../../fierbase/firebaseConfig";
import { v4 as uuidv4} from "uuid";
import { set, ref } from "firebase/database";


function RightSide() {

    const [img, setImg] = useState('');

    const logOut = () => {
        localStorage.clear();
        window.location.reload();
    }


    const putImage = () => {

        set(ref(db, `/${uuidv4()}`), {
            id: uuidv4(),
            url: ''
        })
            .then((data) => {
            console.log()
            })
            .catch((error) => {
                console.log(error)
            })

    }

    return (
        <div className="right-side">
            <div className="profile-circle">
                {/*<img src="https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg" alt=""/>*/}
                <img src="" alt=""/>
            </div>
            <button className="profile-image-editor" onClick={putImage}>
                Change <i className="bi bi-image"></i>
            </button>
            <input type="file" onChange={(e)=>{setImg(e.target.files[0])}}/>


        </div>
    );
}

export default RightSide;