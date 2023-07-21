import React from 'react';

const Agency = () => {
    return (
        <section className='agency__section'>
            <div className='heading'>
                <h3>Agency</h3>
                <p>Max Upgrade, Antananarivo</p>
            </div>

            <div>
                <div className="form__group">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' />
                    </div>
                    <div>
                        <label htmlFor="lastname">Lastname</label>
                        <input type="text" id='lastname' />
                    </div>
                </div>

                <div className="form__group">
                    <div>
                        <label htmlFor="mail">E-Mail</label>
                        <input type="mail" id='mail' />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="number" id='phone' />
                    </div>
                </div>

                <div className="form__message">
                    <textarea name="messages" id="" cols="30" rows="10" placeholder='Your text here ...'></textarea>
                </div>
            </div>
        </section>
    );
};

export default Agency;