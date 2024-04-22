import style from "./header.css"
import Image from 'next/image'
import GlobalLogo from '../images/global-logo-v2.svg'
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-collapse navbar-main">
                <div className="container navbar-container"></div>
                <div className="navbar-brand branding">
                    <a className="header-logo" href="/" title="Go to home page">
                        {/* <Image src="https://www.bannerhealth.com/-/media/images/project/bh/logos/global-logo-v2.ashx" 
                    width={500}
                    height={500}
                    alt="global-logo-v2"/> */}
                        <Image src={GlobalLogo}
                            width={333}
                            height={44}
                            alt="global-logo-v2" />
                    </a>
                </div>
                <div className="utility-container">
                    <ul className="nav justify-content-end utility-menu">
                        <li className="nav-item">
                            <a className="nav-link" href="/physician-directory" target="">
                                Find a Doctor
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/find-a-location" target="">
                                Find a Location
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/services" target="">
                                Conditions and Services
                            </a>
                        </li>
                    </ul>
                    <ul className="nav justify-content-end utility-menu tablet">
                        <li className="nav-item">
                            <span className="navbar-text menu-item">
                                <a href="#" className="cta-button-hero" data-gtm-getcarenow="" data-toggle="modal" data-target="#gcnModal">
                                    Get Care Now
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default Header;