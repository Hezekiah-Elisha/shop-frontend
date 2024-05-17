// import React from 'react'
import { HeartIcon, ShoppingBagIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline"

export default function Nav() {
  return (
    <>
        <nav className="bg-primary-400 text-white p-5 text-2xl flex flex-row justify-between align-middle">
            <h1 className="font-manrope font-thin border-dashed border-2 p-2 text-white">
            Olefa Shop
            </h1>
            <ul className="flex flex-row gap-2 font-manrope font-thin text-sm justify-center align-middle items-center">
                <li>
                    <a href="/" className="hover:underline">Home</a>
                </li>
                <li>
                    <a href="/contact" className="hover:underline">Contact</a>
                </li>
                <li>
                    <a href="/about" className="hover:underline">About</a>
                </li>
                <li>
                    <a href="/products" className="hover:underline">New & Featured</a>
                </li>
            </ul>
            <div className="flex flex-row items-center gap-3">
                <ShoppingBagIcon className="h-12 w-12 text-primary-400 bg-slate-50 p-4" />
                <HeartIcon className="h-4 w-4 text-white" />
                <UserIcon className="h-4 w-4 text-white" />
            </div>
        </nav>
        {/* <div className="font-manrope w-full bg-primary-400">
            <form action="" className="w-full flex flex-row bg-transparent-slate items-center">
                <input type="text" className="bg-transparent-slate rounded-full w-full px-4 py-2" placeholder="Search Product here" />
                <MagnifyingGlassIcon className="h-6 w-6 text-white"/>
            </form>
        </div> */}
    </>

  )
}
