"use client"






import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/nextjs'

import { ArrowUp, Ghost, HomeIcon, ImagePlay, Key, LayoutDashboard, User } from 'lucide-react'
import React, { useState } from 'react'


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
  return (
        <div className='flex flex-col items-center h-[80vh] justify-center '>
    <div>
        {/* Header & Discription  */}

        <h2 className='font-bold text-6xl'>What should we desinr</h2>
        <p className='mt-2 text-2xl text-gray-500 '>Generate , Edit and Export the desine with AI ,Export code as well</p>
        </div>

        <div className='w-full max-w-xl p-5 border mt-5 rounded-2xl'>
            <textarea className='w-full h-24 focus:outline-none focus:ring-0 resize-none' placeholder='describe your pager desine' value={userInput} onChange={(event)=>(event.target.value)}></textarea>
            <div className='flex justify-between items-center'><Button variant={'Ghost'} size={'icon'}><ImagePlay/></Button>
            <SignInButton mode='modal' forceRedirectUrl={'/workspace'}>
               <Button className='' disabled={!userInput}  ><ArrowUp/></Button>
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