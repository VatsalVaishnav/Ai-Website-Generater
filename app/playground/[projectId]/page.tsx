"use client"
import React, { use, useEffect, useState } from 'react'
import PlayGroundHeader from '../_component/PlayGroundHeader'
import ChatSection from '../_component/ChatSection'
import WebsiteDesine from '../_component/WebsiteDesine'
import ElementSettingSection from '../_component/ElementSettingSection'
import { useParams, useSearchParams } from 'next/navigation'
import axios from 'axios'
// import { log } from 'console'

export type Frame={
  projectId:string,
  frameId:string,
  designData:string,
  chartMessages:Messages[],
}
export type Messages={
  role:string,
  content:string

}

const PlayGround = () => {
    const {projectId}=useParams();
    const params=useSearchParams();
    const frameId=params.get('frameId');
    const [frameDetails,setFrameDetails]=useState<Frame>();
    console.log("frameDetails",frameDetails);
    
    const GetFrameDetails=async()=>{
        const result =await axios.get('/api/frames?frameId='+frameId+"&projectId="+projectId);
        // console.log("frame details",result.data);
        setFrameDetails(result.data);
        
    }

    useEffect(()=>{
     frameId&& GetFrameDetails();
    },[frameId])


    const SendMessages=async(userInput:string)=>{}
  return (
    <div>
        <PlayGroundHeader/>
        <div className='flex'>


        {/* chat section */}
        <ChatSection messages={frameDetails?.chartMessages||[]} onSend={(input:string)=>SendMessages(input)}/>
        {/* desine section */}
        <WebsiteDesine/>
        {/* setting section */}
        {/* <ElementSettingSection/> */}
        </div>
    </div>
  )
}

export default PlayGround