import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import './RoomPage.css'

const RoomPage = () => {

    const {roomId} =useParams();
    const nav=useNavigate();

    const navToHome=()=>{
nav(`/`);
    }

    const myMeeting = async (element) =>{
        const appID=1003551755;
        const serverSecret="bc386246551c8d21090ba3f2fb8e919d";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(),"Your Name")
        const zp=ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container:element,
            scenario : {
                mode : ZegoUIKitPrebuilt.VideoConference,
            }
        });
    }

  return (
    <div className='room-page'>
      <h1 className='room-easy'>EasyFace</h1>
      <div className="callclient" ref={myMeeting} />

      <button onClick={navToHome} className='btn btn-warning'>Join Another Room</button>
      

    </div>
  )
}

export default RoomPage
