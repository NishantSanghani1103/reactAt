import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold text-white mb-3">ShopEase</h2>
                    <p className="text-sm">
                        Your one-stop shop for all your needs. Quality products at best prices.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">Shop</li>
                        <li className="hover:text-white cursor-pointer">Categories</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Customer Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Help Center</li>
                        <li className="hover:text-white cursor-pointer">Returns</li>
                        <li className="hover:text-white cursor-pointer">Shipping Info</li>
                        <li className="hover:text-white cursor-pointer">Track Order</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Newsletter</h3>
                    <p className="text-sm mb-3">Get latest offers & updates</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="w-full bg-white px-3 py-2 text-sm rounded-l-md outline-none text-black"
                        />
                        <button className="bg-blue-600 px-4 rounded-r-md text-white text-sm">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 text-center py-4 text-sm">
                © {new Date().getFullYear()} ShopEase. All rights reserved.
            </div>
        </footer>
    )
}
