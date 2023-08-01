import { Link } from 'react-router-dom';

const OurWork = () => {
    return (
        <>
            <div className="secondary-banner">	
                <img className="about-background" src="./Tattoo-Parlor---Frontend/images/Gallery/background.jpg" alt=""/>
            </div>

            <section className="gallery-page">
                <div className="filter-section">

                </div>

                <div className="gallery">
                    <img src="./Tattoo-Parlor---Frontend/images/Gallery/gallery1.jpg" alt=""/> 
                    <img src="./Tattoo-Parlor---Frontend/images/Gallery/gallery2.jpg" alt=""/> 
                    <img src="./Tattoo-Parlor---Frontend/images/Gallery/gallery3.jpg" alt=""/> 
                    <img src="./Tattoo-Parlor---Frontend/images/Gallery/gallery4.jpg" alt=""/> 
                    <img src="./Tattoo-Parlor---Frontend/images/Gallery/gallery5.jpg" alt=""/> 
                    <img src="./Tattoo-Parlor---Frontend/images/Gallery/gallery6.jpg" alt=""/> 
                    <img src="./Tattoo-Parlor---Frontend/images/Gallery/gallery7.jpg" alt=""/> 
                    <img src="./Tattoo-Parlor---Frontend/images/Gallery/gallery8.jpg" alt=""/> 
                </div>

                <div className="contact-section">
                    <div className="text padding-inline">
                        <h2>Looking to Book?</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.ut.
                        </p>
                        <Link className="schedule-apt-button" to="/create">
                            <img src="./Tattoo-Parlor---Frontend/images/Gallery/btn-left.png" alt=""/>
                            Schedule Appointment
                            <img src="./Tattoo-Parlor---Frontend/images/Gallery/btn-right.png" alt=""/>
                        </Link>
                    </div>
                </div>
            </section>        
        </>
    );
}

export default OurWork; 