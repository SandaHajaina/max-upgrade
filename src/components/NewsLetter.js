import React from 'react';

const Contact = () => {
    return (
        <section className='newsletter__wrapper'>
            <div className='subtitle'>
                <h3>Subscribe to Our Newsletter</h3>
            </div>

            <form className="form__container">
                <div>
                    <input type="email" placeholder='Your email' />
                    <label htmlFor="email">send</label>
                </div>
            </form>
        </section>
    );
};

export default Contact;