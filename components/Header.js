import { SignInButton, SignOutButton, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "./ModeToggle"


const Header = () => {
  return (
    <header className="flex justify-between items-center">
    <Link href='' className="flex items-center space-x-2">
<div className="bg-blue-500 w-fit">
    <Image src={'https://www.shareicon.net/data/128x128/2017/04/22/885085_media_512x512.png'} width={50} height={50} className=' invert object-cover object-center'/>
</div>

        <h1 className="font-bold text-xl">Dropbox</h1>
    </Link>


    <div className="px-5 flex space-x-2 items-center">

    <ModeToggle/>

        <UserButton afterSignOutUrl="/"/>

    


        <SignedOut>
           <SignInButton afterSignInUrl="/dashboard" mode="modal"/>
        </SignedOut>

    
    </div>

    </header>
  )
}

export default Header