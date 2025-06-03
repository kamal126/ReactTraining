import React from "react";
import {Link} from 'react-router-dom'
import Logo from "../Logo";

function Footer() {
    return(
        <section>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <Logo width="100px"/>
                            </div>
                            <div>
                                <p>
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>
                                Company
                            </h3>
                            <ul>
                                <li>
                                    <Link className="" to="/">Features</Link>
                                </li>
                                <li>
                                    <Link className="" to="/">Pricing</Link>
                                </li>
                                <li>
                                    <Link className="" to="/">Affiliate Program</Link>
                                </li>
                                <li>
                                    <Link className="" to="/">Press Kit</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>
                                Support
                            </h3>
                            <ul>
                                <li>
                                    <Link className="" to="/">Account</Link>
                                </li>
                                <li>
                                    <Link className="" to="/">Help</Link>
                                </li>
                                <li>
                                    <Link className="" to="/">Contact Us</Link>
                                </li>
                                <li>
                                    <Link className="" to="/">Customer Support</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h3>
                                Leagals
                            </h3>
                            <ul>
                                <li>
                                    <Link className="" to="/">Tearm &amp; Conditions</Link>
                                </li>
                                <li>
                                    <Link className="" to="/">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link className="" to="/">Licencing</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Footer