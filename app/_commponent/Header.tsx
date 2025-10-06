"use client"
import { Button } from '@/components/ui/button'
import { UserDetailContext } from '@/context/UserDetailContext'
import { SignInButton } from '@clerk/nextjs'
import { ArrowRight} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import path from 'path'
import React, { useContext } from 'react'


const MenuOption=[
    {
        name:'pricing',
        path:'/pricing'
    },
    {
        name:'contact us',
        path:'/contact-us'
    },

]

const Header = () => {
    const {userDetail} =useContext(UserDetailContext)

  return (
    <div className='flex items-center justify-between p-4 shadow'>
        <div className='flex items-center gap-2 '>


        <Image src={'/logo.svg'} alt='logo' width={35} height={35} />
        <h2 className='font-bold text-xl'>AI website Generated</h2>
        </div>

        <div className='flex items-center gap-3'>
            {MenuOption.map((item,index)=>(
               <Button key={index} variant='ghost' className='capitalize '>{item.name}</Button>
            ))}
        </div>

        <div>
            {!userDetail ?  
            <SignInButton mode='modal' forceRedirectUrl={'/workspace'}>
            <Button className='bg-blue-600 text-white hover:bg-blue-700'>Get Started <ArrowRight/> </Button>
            </SignInButton>
            :
            <>
            <Link href={'/workspace'}>
            <Button className='bg-blue-600 text-white hover:bg-blue-700'>Get Started <ArrowRight/> </Button>
            </Link>
            </>
            }
        </div>
    </div>

  )
}

export default Header