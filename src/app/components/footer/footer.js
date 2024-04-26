import style from "./footer.css"
import Image from 'next/image'
import GlobalLogo from '../images/global-logo-v2.svg'
const Footer = () => {
    return (
        <>
            <footer className="global-footer">
                <div className="row">
                    <div className="mb-5 col-12 mb-xl-0 col-xl-3">
                        <div className="row">
                            <div className="col-10 col-sm-6 col-md-5 col-lg-4 col-xl-10">
                                <a className="header-logo" href="/" title="Go to home page">
                                    <Image src={GlobalLogo}
                                        width={333}
                                        height={44}
                                        alt="global-logo-v2" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-2 p-0">
                        <h4 className="footer-column-title">
                            <a href="/">
                                Banner Health
                            </a>
                        </h4>
                        <ul className="footer-column-list">
                            <li>
                                <a href="/physician-directory" target="">
                                    Doctors
                                </a>
                            </li>
                            <li>
                                <a href="/services" target="">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/locations" target="">
                                    Locations
                                </a>
                            </li>
                            <li>
                                <a href="/health-professionals" target="">
                                    For Health Professionals
                                </a>
                            </li>
                            <li>
                                <a href="/employees" target="">
                                    For Employees
                                </a>
                            </li>
                            <li>
                                <a href="/services/volunteer" target="">
                                    Volunteers
                                </a>
                            </li>
                            <li>
                                <a href="/about/insurance" target="">
                                    Insurance
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-2 p-0">
                        <h4 className="footer-column-title">
                            <a href="/about">
                                About
                            </a>
                        </h4>
                        <ul className="footer-column-list">
                            <li>
                                <a href="/about/leadership/executive" target="">
                                    Executive Leadership
                                </a>
                            </li>
                            <li>
                                <a href="/about/glance/quality" target="">
                                    Quality
                                </a>
                            </li>
                            <li>
                                <a href="/about/glance/news/connect" target="">
                                    News
                                </a>
                            </li>
                            <li>
                                <a href="https://www.bannerhealth.com/newsroom" target="">
                                    For Media
                                </a>
                            </li>
                            <li>
                                <a href="/ways-to-give" target="">
                                    Ways to Give
                                </a>
                            </li>
                            <li>
                                <a href="/ways-to-give/foundations" target="">
                                    Donate Now
                                </a>
                            </li>
                            <li>
                                <a href="/careers" target="">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-2 p-0">
                        <h4 className="footer-column-title">
                            <a href="/patients">
                                Patient Center
                            </a>
                        </h4>
                        <ul className="footer-column-list">
                            <li>
                                <a href="/patients/billing" target="">
                                    Bill Pay and Information
                                </a>
                            </li>
                            <li>
                                <a href="/calendar" target="">
                                    Classes and Events
                                </a>
                            </li>
                            <li>
                                <a href="/staying-well" target="">
                                    Health and Wellness
                                </a>
                            </li>
                            <li>
                                <a href="/patients/billing/financial-assistance" target="">
                                    Help Paying Your Bill
                                </a>
                            </li>
                            <li>
                                <a href="/patients/medical-records" target="">
                                    Medical Records
                                </a>
                            </li>
                            <li>
                                <a href="/patients/patient-account" target="">
                                    Patient Account
                                </a>
                            </li>
                            <li>
                                <a href="/patients/registration" target="">
                                    Patient Registration
                                </a>
                            </li>
                            <li>
                                <a href="/patients/billing/pricing-resources/hospital-price-transparency" target="|Custom">
                                    Price Transparency
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-2 p-0">
                        <h4 className="footer-column-title">
                            <a href="/about/glance/news/connect">
                                Connect With Us
                            </a>
                        </h4>
                        <ul className="footer-column-list">
                            <li>
                                <a href="/contact-us" target="">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="https://www.bannerhealth.com/healthcareblog" target="">
                                    Read Our Blog
                                </a>
                            </li>
                            <li>
                                <a href="/staying-well/expert" target="">
                                    Ask an Expert
                                </a>
                            </li>
                            <li>
                                <a href="/about/glance/news/connect" target="">
                                    Newsletter Sign Up
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;