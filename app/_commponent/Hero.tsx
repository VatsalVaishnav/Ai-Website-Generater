"use client"






import { Button } from '@/components/ui/button'
import { SignInButton, useUser } from '@clerk/nextjs'
import axios from 'axios'
import { set } from 'date-fns'
import { uuid } from 'drizzle-orm/gel-core'

import { ArrowUp, Ghost, HomeIcon, ImagePlay, Key, LayoutDashboard, Loader2Icon, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'
import { v4 as uuidv4 } from 'uuid';



const suggestion = [
  {
    label: 'Dashboard',
    prompt: 'Create an analytics dashboard to track customers and revenue data for a SaaS',
    icon: LayoutDashboard
  },
  {
    label: 'SignUp Form',
    prompt: 'Create a modern sign up form with email/password fields, Google and Github login options, and terms checkbox',
    icon: Key
  },
  {
    label: 'Hero',
    prompt: 'Create a modern header and centered hero section for a productivity SaaS. Include a badge for feature announcement, a title with a subtle gradient effect, subtitle, CTA, small social proof and an image.',
    icon: HomeIcon
  },
  {
    label: 'User Profile Card',
    prompt: 'Create a modern user profile card component for a social media website',
    icon: User
  }
]


const Hero = () => {

    const [userInput,setUserInput]=useState('')
    const {user} =useUser();
    const route=useRouter();
    const [loading,setloading]=useState(false);

    const createNewPage= async()=>{
      setloading(true);
      const projectId=uuidv4();
      const frameId=Math.floor(Math.random()*10000);
      const message=[
        {
          role:'user',
          content:userInput
        }
      ]
      
      try {
        const result =await axios.post('/api/projects',{
          projectId:projectId,
          frameId:frameId,
          message:message
        })
        console.log("result",result.data);
        toast.success('Project created successfully')
        route.push(`/playground/${projectId}?frameId=${frameId}`)
        setloading(false);
      
      } catch (error) {
        toast.error('Something went wrong')
        console.log("error",error);
        setloading(false);
        
      }
    }
  return (
        <div className='flex flex-col items-center h-[80vh] justify-center '>
    <div>
        {/* Header & Discription  */}

        <h2 className='font-bold text-6xl'>What should we desinr</h2>
        <p className='mt-2 text-2xl text-gray-500 '>Generate , Edit and Export the desine with AI ,Export code as well</p>
        </div>

        <div className='w-full max-w-xl p-5 border mt-5 rounded-2xl'>
            <textarea className='w-full h-24 focus:outline-none focus:ring-0 resize-none' placeholder='describe your pager desine' value={userInput} onChange={(event)=>(event.target.value)}></textarea>
            <div className='flex justify-between items-center'><Button variant={'ghost'} size={'icon'}><ImagePlay/></Button>
            <SignInButton mode='modal' forceRedirectUrl={'/workspace'}>
               <Button className='' disabled={!userInput || loading} onClick={createNewPage}  >{loading ? <Loader2Icon className='animate-spin'/> :<ArrowUp/>}</Button>
               </SignInButton>
            </div>

        </div>

        <div className='mt-4 flex gap-3'>
            {suggestion.map((item,index)=>(
                <Button key={index} variant={'outline'} onClick={()=>(setUserInput(item.prompt))}>
                    <item.icon className=''/>
                    {item.label}</Button>
            ))}
        </div>


    </div>
  )
}

export default Hero
