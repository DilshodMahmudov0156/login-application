import React from "react";
import { v4 as uuidv4} from "uuid";
import { imageDb } from "../../fierbase/firebaseConfig";
import { ref, getDownloadURL, listAll, uploadBytes } from "firebase/storage";


function RightSide() {


    const putImage = () => {



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


        </div>
    );
}

export default RightSide;