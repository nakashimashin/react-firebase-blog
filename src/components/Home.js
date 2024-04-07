import React, { useEffect } from 'react'
import './Home.css'
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';

const Home = () => {
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(collection(db, 'posts'));
            console.log(data);
            console.log(data.docs);
            console.log(data.docs.map((doc) => ({ doc })));
            console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        };
        getPosts();
    }, []);
    return (
        <div className='homePage'>
            <div className='postContents'>
                <div className='postHeader'>
                    <h1>タイトル</h1>
                </div>
                <div className='postTextContainer'>今はReactの学習中です</div>
                <div className='nameAndDeleteButton'>
                    <h3>@Shin</h3>
                    <button>削除</button>
                </div>
            </div>
        </div>
    )
}

export default Home
