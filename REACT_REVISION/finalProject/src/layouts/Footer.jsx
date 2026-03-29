import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-dark text-light pt-4 mt-5">
            <div className="container">

                <div className="row">

                    {/* Brand Info */}
                    <div className="col-md-4 mb-3">
                        <h5 className="fw-bold text-primary">MiniShop</h5>
                        <p>
                            Your one-stop shop for all your daily needs.
                            Quality products at the best prices.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-2 mb-3">
                        <h6 className="fw-bold">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light text-decoration-none">Home</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Shop</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Categories</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="col-md-3 mb-3">
                        <h6 className="fw-bold">Customer Service</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light text-decoration-none">FAQ</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Returns</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Terms</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-3 mb-3">
                        <h6 className="fw-bold">Contact</h6>
                        <p className="mb-1">Email: support@minishop.com</p>
                        <p className="mb-1">Phone: +91 98765 43210</p>
                        <p>Location: India</p>
                    </div>

                </div>

                <hr className="border-light" />

                {/* Bottom Bar */}
                <div className="text-center pb-3">
                    <small>© 2026 MiniShop. All rights reserved.</small>
                </div>

            </div>
        </footer>
    )
}
