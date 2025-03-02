"use client";
import React from "react"
import Image from "next/image"
import Link from "next/link"; // ✅ Import Link
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import { useUser } from "@clerk/nextjs";
import { Button } from "../../components/ui/button";

function Header() {
    const { user, isSignedIn } = useUser();
    return (
        <div className='p-5 flex justify-between items-center border shadow-sm'>
            <div className="flex flex-row items-center">
                <Image src={'./logoipsum-225.svg'} alt="logo" width={40} height={25}/>
                <span className="text-black font-bold text-xl ml-2">BudgetBuddy</span>
            </div>
            {isSignedIn ? (
                <UserButton/>
            ) : (
                <div className="flex gap-2">
                    <Link href="/dashboard">
                        <Button variant="outline" className="rounded-full">Dashboard</Button>
                    </Link>
                    <Link href="/dashboard">
                        <Button className="rounded-full">Get Started</Button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Header;
