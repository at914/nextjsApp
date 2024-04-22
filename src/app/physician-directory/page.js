import style from "./page.css"
import Image from "next/image";
import LocationPlus from '../components/images/location-plus.svg'
export default function Page() {
    return (
        <>
            <div id="physician_search" className="kyruus-widget shell-card bg-primary background-pattern-dotted font-color-skin">
                <div className="container">
                    <div className="form-row d-inline">
                        <div className="col-12 mb-lg-5 center-content">
                            <h1 className="title-color-card-skin shell-card-title text-center text-white mb-0 h3 font-weight-normal">
                                Help Me Find a Doctor
                            </h1>
                            <div className="sub-heading text-sm-left text-md-center shell-card-sub-heading">
                                Find a Banner Health doctor near you.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="icon-svg">
                    <Image src={LocationPlus}
                        width={333}
                        height={44}
                        alt="LocationPlus" />
                </div>
            </div>
        </>
    );
}