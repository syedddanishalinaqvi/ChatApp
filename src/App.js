import { useRef, useState } from "react";
import SignUp from "./Components/SignUp";

import Cookies from "universal-cookie"
import Chat from "./Components/Chat";
const cookies=new Cookies();

function App() {
  const[isAuth,setIsAuth]=useState(cookies.get("auth-token"))
  const[room,setRoom]=useState(null);
  const roomInput=useRef();
  if(!isAuth){
  return (
    <div>
    <SignUp setIsAuth={setIsAuth} />
    </div>
  );
  }
    return <div>
    {room?
    <Chat room={room}/>:
    <form class="container text-center py-5">
      <h1 className="fw-bold py-4">Room ID</h1>
      <input className="mx-4 py-2" ref={roomInput}/>
      <button onClick={()=>{setRoom(roomInput.current.value)}} className="btn btn-primary">Go to Room</button>
    </form>
    }
    </div>
}

export default App;
