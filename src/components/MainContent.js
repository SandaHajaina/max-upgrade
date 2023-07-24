import React from 'react';
// import Lottie from "lottie-react";
import LottieAnimation from './LottieAnimation';
import animationDev from '../assets/json/dev.json';
import animationDesign from '../assets/json/design.json';
import animationMarketing from '../assets/json/marketing.json';


const MainContent = () => {
    return (
        <div>
            <div className='first__part'>
                <h3 className='subtitle'>This is how we're different</h3>

                <div className='our__differences'>

                </div>
            </div>

            <div id='services'>
                <h2>
                    What We Do ?
                </h2>

                <div className='mainContent__wrapper'>
                    <div>
                        <h4>Digital Marketing</h4>

                        <div className="lottie animation__marketing">
                            <LottieAnimation animationData={animationMarketing} />
                        </div>

                        {/* <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, molestias debitis officiis cupiditate quis sit quidem et eius earum culpa, tenetur aliquid fugit consequuntur magni sed repellat voluptatibus asperiores. Totam id illum, nesciunt veritatis sit accusamus recusandae sint molestiae. Beatae dignissimos est, corporis minus blanditiis ut nam fugiat nostrum, placeat at rem repudiandae quia error accusantium porro? Aliquam minima ipsam, neques</p>
                        </div> */}
                    </div>

                    <div>
                        <h4>Graphic Conception</h4>

                        <div className="lottie animation__graphic">
                            <LottieAnimation animationData={animationDesign} />
                        </div>

                        {/* <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, molestias debitis officiis cupiditate quis sit quidem et eius earum culpa, tenetur aliquid fugit consequuntur magni sed repellat voluptatibus asperiores. Totam id illum, nesciunt veritatis sit accusamus recusandae sint molestiae. Beatae dignissimos est, corporis minus blanditiis ut nam fugiat nostrum, placeat at rem repudiandae quia error accusantium porro? Aliquam minima ipsam, neques</p>
                        </div> */}
                    </div>

                    <div>
                        <h4>Web Developpement</h4>

                        <div className="lottie animation__dev">
                            <LottieAnimation animationData={animationDev} />
                        </div>

                        {/* <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, molestias debitis officiis cupiditate quis sit quidem et eius earum culpa, tenetur aliquid fugit consequuntur magni sed repellat voluptatibus asperiores. Totam id illum, nesciunt veritatis sit accusamus recusandae sint molestiae. Beatae dignissimos est, corporis minus blanditiis ut nam fugiat nostrum, placeat at rem repudiandae quia error accusantium porro? Aliquam minima ipsam, neques</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;