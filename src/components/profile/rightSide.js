import React, {useContext, useEffect, useState} from "react";
import { v4 as uuidv4} from "uuid";
import {db, imageDb} from "../../fierbase/firebaseConfig";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { ref as refDb, set, onValue } from "firebase/database";
import {Context} from "../../context/context";



function RightSide() {

    const { state, dispatch } = useContext(Context);
    const [ allData, setAllData ] = useState([]);
    const [ myData, setMyData ] = useState([]);
    const [ img, setImg ] = useState('');
    const [ dis, setDis ] = useState(false);
    const [ profilePhoto, setProfilePhoto ] = useState('');

    useEffect(() => {
        setProfilePhoto(localStorage.getItem('imgUrl'));
        // console.log(profilePhoto);

            onValue(refDb(db), snapshot => {
                setAllData([]);
                const data = snapshot.val();
                if (data){
                    Object.values(data).map((item) => {
                        setAllData((old) => [...old, item]);
                    })
                }
            });

    }, []);

    useEffect(() => {

        const filtered = allData.filter(element => element.user == localStorage.getItem('userId'));
        // setMyData(filtered);

    },[])


    const putImage = () => {

        setDis(true);
        if(img){
            const imgRef = ref(imageDb, `files/${uuidv4()}`);
            uploadBytes(imgRef, img).then(value => {
                console.log(value.metadata.name);
                const imgName = value.metadata.name;

                getDownloadURL(value.ref).then(url=>{
                    set(refDb(db, `/${uuidv4()}`), {
                        id: imgName,
                        user: localStorage.getItem('userId'),
                        for: 'profile-photo',
                        url: url,
                        name: imgName
                    });
                });
            });
        }
    };



    const analyze = () => {
        console.log(state);
    }


    return (
        <div className="right-side">
            <div className="profile-circle">
                {/*<img src="https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg" alt=""/>*/}
                <img src={profilePhoto} alt=""/>
            </div>
            <input type="file" onChange={(e) => {setImg(e.target.files[0])}}/>
            <button className={`profile-image-editor ${dis? "d-none": ""}`} onClick={putImage}>
                Change <i className="bi bi-image"></i>
            </button>

            <button className="profile-image-editor" onClick={()=>{
                localStorage.clear();
                window.location.reload();
            }}
            >
                Sign Out
            </button>
            <div className="btn btn btn-primary" onClick={analyze}>click on it</div>

            {
                allData.filter(item => item.user == localStorage.getItem('userId'))
                .map(item => (
                    <div>
                        <p>{item.name}</p>
                        <img src={item.url} alt="" className="w-50"/>
                    </div>
                ))
            }


        </div>
    );
}

export default RightSide;