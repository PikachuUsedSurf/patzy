import Link from "next/link";
import {Bell, CircleUserRound} from "lucide-react";
import {DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";


export default function Navbar () {
    return (
        <nav className="bg-white border-b">
            <div className="flex items-center justify-between mx-4 sm:mx-8 md:mx-16 h-16 px-4">
                <h1 className="font-extrabold sm:text-2xl">PA-TZ</h1>
                <div className="md:flex space-x-6 lg:space-x-10 text-lg xl:text-xl">
                    <Link className="hover:text-gray-600 transition-colors" href="/">Jobs</Link>
                    <Link className="hover:text-gray-600 transition-colors" href="/">Company</Link>
                </div>
                <div className="flex items-center space-x-6 sm:space-x-10">
                    <Bell className="h-6 w-6"/>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <CircleUserRound className="w-6 h-6"/>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-48">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem>Log in</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
}