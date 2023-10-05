import '/src/styles/ContactForm.css';

function Contact() {
    return(
        <div>
            <form className="contact-cnt" action="">
                <div className="contact-fullname">
                    <label className="block-dp" htmlFor="">First Name</label>
                    <input className="block-dp" type="text" name="" id="" />
                </div>
                <div className="contact-email">
                    <label className="block-dp" htmlFor="">Email</label>
                    <input className="block-dp" type="email" name="" id="" />
                </div>
                <div className="contact-subject">
                    <label className="block-dp" htmlFor="">Subject</label>
                    <input className="block-dp" type="text" name="" id="" />
                </div>
                <div className="contact-message">
                    <label className="block-dp" htmlFor="">Message</label>
                    <textarea className="block-dp" name="" id="" cols="30" rows="10"></textarea>
                </div>
            </form>
        </div>
    );
}

export default Contact;