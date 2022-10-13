import React from "react";

const ContactForm = () => {
    return (
        <div>
            <div className="container">
                <h3 style={{ display: 'flex', justifyContent: 'center' }}>Contact Form</h3>
                <form className="form">
                    <label for="fname">First Name</label>
                    <input
                        className="contactInput"
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Your name.."
                    />

                    <label for="lname">Last Name</label>
                    <input
                        className="contactInput"

                        type="text"
                        id="lname"
                        name="lastname"
                        placeholder="Your last name.."
                    />

                    <label for="subject">Subject</label>
                    <textarea
                        id="subject"
                        name="subject"
                        placeholder="Write something.."
                    ></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
