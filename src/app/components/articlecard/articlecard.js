import style from "./articlecard.css"
async function fetchData(){
    const result = await fetch(
        'https://dummyjson.com/products/1'
    );
    const displayData = await result.json();
    return displayData;
}
const Articlecard = () => {
    const displayData = fetchData();
    return (
        <>
            <div uatid="TextCard" className="basic-list-card  bg-primary font-color-skin          pt-lg-1 pb-lg-1      ">
                <div className="card border-0 rounded-0" align="Center">
                    <div className="card-body">
                        <div className="content-container">
                            <div className="mb-5">
                                <h2 className="title-color-card-skin card-title mb-5">The flu is serious. Get your flu shot. </h2>
                            </div>

                            <div className="mb-5" align="Center">
                                <p>Vaccination is the most effective way to prevent getting sick with the flu. Get a flu shot each year to protect against new and different strains.&nbsp;</p>
                                <p><strong>Please visit a <a rel="noopener noreferrer" href="https://urgentcare.bannerhealth.com/" target="_blank">Banner Urgent Care</a> or <a href="/physician-directory">Banner Health Clinic</a>&nbsp;to get your shot today.</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}
export default Articlecard;