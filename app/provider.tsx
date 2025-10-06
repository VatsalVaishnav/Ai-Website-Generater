"use client"
import React, { use, useEffect, useState } from 'react'
import axios from 'axios';
import { useUser } from '@clerk/nextjs';
import { UserDetailContext } from '@/context/UserDetailContext';

const provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const {user}= useUser();
  const [userDetail,setUserDetail]=useState<any>(null);
  console.log(user);
  
  useEffect(()=>{
    console.log("sdfweferweefrfreferewrrfrer");
    
    CreateNewUser()
  },[])

    const CreateNewUser=async()=>{
      const result =await axios.post('/api/users',{
      })
      console.log(result.data)
      setUserDetail(result.data?.user)
        
    }
  return (

    <div>
      <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
      {children}
      </UserDetailContext.Provider>
      </div>
  )
}

export default provider