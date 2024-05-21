'use client'

import {ButtonHTMLAttributes, FC, useState} from "react";
import {Button} from "@/components/ui/Button";
import toast from "react-hot-toast";
import {Loader2, LogOut} from "lucide-react";

interface SignOutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SignOutButton: FC<SignOutButtonProps> = ({...props}) => {
	const [isSigningOut, setIsSigningOut] = useState(false)

	const handleSignOut = async () => {
		setIsSigningOut(true)

		try {

		} catch (error) {
			toast.error('There was a problem signing out')
		} finally {
			setIsSigningOut(false)
		}
	}

	return (
		<Button {...props} variant='ghost' onClick={handleSignOut}>
			{isSigningOut ? <Loader2 className='animate-spin h-4 w-4'/>: <LogOut className='h-4 w-4'/>}
		</Button>
	)
}