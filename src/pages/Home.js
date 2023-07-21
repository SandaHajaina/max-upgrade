import React from 'react';
import Navigation from '../components/Navigation';
import MainContent from '../components/MainContent';
import Agency from '../components/Agency';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';



const Home = () => {
    return (
        <div>
            <section className='home-header'>
                <div className='home-header-content'>

                    {/* Navigation Section */}
                    <div className='header-navigation'>
                        <Navigation />
                    </div>

                    <div className='header-text'>
                        <p>Climb to Success <br />
                            with elevated<br />
                            Communication.</p>
                    </div>
                </div>
            </section>

            {/* MainContent */}
            <section className='mainContent__section'>
                <MainContent />
            </section>

            {/* Agency */}
            <section className='agency__section'>
                <Agency />
            </section>

            {/* Contact */}
            <section className='newsletter__section'>
                <NewsLetter />
            </section>

            {/* Footer */}
            <section>
                <Footer />
            </section>
        </div>
    );
};

export default Home;