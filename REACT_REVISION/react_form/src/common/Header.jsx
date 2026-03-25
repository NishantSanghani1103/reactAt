import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header() {
    const { cart } = useSelector((store) => store.cart)

    return (
        <header className="w-full bg-white shadow-sm border-b sticky top-0">
            {/* Top Bar */}
            <div className="hidden md:flex justify-between items-center text-sm px-6 py-2 bg-gray-50 text-gray-600">
                <p>Free shipping on orders over ₹999</p>
                <div className="flex gap-4">
                    <span className="cursor-pointer hover:text-black">Help</span>
                    <span className="cursor-pointer hover:text-black">Track Order</span>
                </div>
            </div>

            {/* Main Header */}
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
                {/* Left - Menu + Logo */}
                <div className="flex items-center gap-3">
                    <button className="md:hidden text-2xl">☰</button>
                    <div className="text-2xl font-bold text-gray-800">ShopEase</div>
                </div>

                {/* Center - Search */}
                <div className="hidden md:flex items-center border rounded-xl px-3 py-2 w-1/2">
                    <span className="text-gray-500 mr-2">🔍</span>
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="w-full outline-none text-sm"
                    />
                </div>

                {/* Right - Actions */}
                <div className="flex items-center gap-4 text-gray-700">
                    <div className="cursor-pointer hidden sm:block">❤️ Wishlist</div>
                    <Link to={'/cart'} className="cursor-pointer relative">
                        🛒
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">{cart.length}</span>
                    </Link>
                    <div className="cursor-pointer">👤</div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <nav className="hidden md:flex justify-center gap-8 py-3 border-t text-sm font-medium text-gray-700">
                <Link to={'/'}> <span className="cursor-pointer hover:text-black">Home</span></Link>
                <Link to={'/shop'}> <span className="cursor-pointer hover:text-black">Shop</span></Link>
                <Link to={'/form'}><span className="cursor-pointer hover:text-black">Form</span></Link>
                <Link to={'/form-final'}><span className="cursor-pointer hover:text-black">Form Final</span></Link>
                <span className="cursor-pointer hover:text-black">Deals</span>
                <span className="cursor-pointer hover:text-black">Contact</span>
            </nav>
        </header>
    )
}
