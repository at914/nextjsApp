import style from "./videocard.css"
import Link from "next/link";
const Videocard = () => {
    return (
        <>
            <div className="site-container">
                <div id="VideoCard" className="video-card-v2 bg-blue-100 font-color-skin ">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="video-card-body">
                                <h1 className="title-color-card-skin video-title">
                                    We’re here for you, from the comfort of home.
                                </h1>
                                <div className="row mt-5">
                                    <div className="col-12 mb-4 mt-2 col-md-6 mt-md-0 mb-md-0" align="center">
                                        <Link href="/components/physician-directory" className="btn btn-primary btn-jumbotron">Book An Appointment With Your Doctor</Link>
                                    </div>
                                    <div className="col-12 col-md-6 mb-4 mb-md-0" align="center">
                                        <a className="btn btn-outline-primary btn-jumbotron" href="https://www.bannerhealth.com/">Access Video Urgent Care</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12 p-0">
                            <div className="video-outer">
                                <div className="video-inner">
                                    <video>
                                        <source src="https://www.bannerhealth.com/-/media/videos/project/bh/telehealthhero.ashx" type="video/mp4"></source>
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Videocard;