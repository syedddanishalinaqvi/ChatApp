import { useRef, useState } from "react";
import SignUp from "./Components/SignUp";

import Cookies from "universal-cookie"
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
    <div>Chat</div>:
    <form>
      <h1>Room ID</h1>
      <input ref={roomInput}/>
      <button onClick={()=>{setRoom(roomInput.current.value)}} className="btn btn-primary">Go to Room</button>
    </form>
    }
    </div>
}

export default App;
