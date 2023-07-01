import React, { useEffect, useState } from 'react'
import { query, addDoc, collection, onSnapshot, serverTimestamp, where, orderBy } from "firebase/firestore"
import { auth, db } from "../firebase-config"

const Chat = (props) => {
    const { room } = props;
    const [message, setMessage] = useState("");
    const [data, setData] = useState([]);
    const messageRef = collection(db, "message");
    useEffect(() => {
        const queryList = query(messageRef, where("room", "==", room),orderBy("time"));
        const baat=onSnapshot(queryList, (snapshot) => {
            let messages = [];
            snapshot.forEach((element) => {
                messages.push({ ...element.data(), id: element.id })
            })
            setData(messages);
        })
        return ()=>baat();
    })
    const handleMessage = async (e) => {
        e.preventDefault();
        if (message === "") return;
        await addDoc(collection(db, "message"), {
            name: auth.currentUser.displayName,
            time: serverTimestamp(),
            room,
            message,
        })
        setMessage("");
    }
    return (
        <div class="container justify-content-center text-left">
            <h1 className='text-center'>Room: {room}</h1>
            <div class="fs-5 py-2 bg-light">
                {
                    data.map((element) => {
                        return <div class="py-2"><b>{element.name} -</b> {element.message}</div>
                    })
                }
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" value={message} onChange={(e) => { setMessage(e.target.value) }} placeholder="Enter you message" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button onClick={(e) => { handleMessage(e) }} class="btn btn-outline-primary" type="button" id="button-addon2">Button</button>
            </div>
        </div>
    )
}

export default Chat
