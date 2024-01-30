import React, {useState} from "react";
import { v4 as uuidv4} from "uuid";
import { imageDb } from "../../fierbase/firebaseConfig";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { Context } from "../../context/context";
import { useContext } from "react";


function RightSide() {

    const [ img, setImg ] = useState('');
    const [ dis, setDis ] = useState(false);
    const { state, dispatch } = useContext(Context);



    const putImage = () => {
        setDis(true);
        if(img){
            const imgRef = ref(imageDb, `files/${uuidv4()}`);
            uploadBytes(imgRef, img).then(value => {
                console.log(value.metadata.name);
                const imgName = value.metadata.name;

                getDownloadURL(value.ref).then(url=>{
                    dispatch(
                        {
                            type: 'PUT_PHOTO_TO_PROFILE',
                            payload: {
                                id: imgName,
                                url: url,
                                name: imgName
                            }
                        }
                        )
                })
            });
        }
        setImg(null);
    };

    const analyze = () => {
        console.log("you clicked default btn")
    }


    return (
        <div className="right-side">
            <div className="profile-circle">
                {/*<img src="https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg" alt=""/>*/}
                <img src="" alt=""/>
            </div>
            <input type="file" onChange={(e) => {setImg(e.target.files[0])}}/>
            <button className={`profile-image-editor ${dis? "d-none": ""}`} onClick={putImage}>
                Change <i className="bi bi-image"></i>
            </button>

            <button className="profile-image-editor" onClick={analyze}>
                click on disablet btn
            </button>


        </div>
    );
}

export default RightSide;