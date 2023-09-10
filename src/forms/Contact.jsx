import '/src/styles/ContactForm.css';

function Contact() {
    return(
        <div>
            <form action="">
                <div>
                    <span>
                        <label htmlFor="">First Name</label>
                        <input type="text" name="" id="" />
                    </span>
                    <span>
                        <label htmlFor="">Last Name</label>
                        <input type="text" name="" id="" />
                    </span>
                </div>
                <div>
                    <label htmlFor="">Subject</label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </form>
        </div>
    );
}

export default Contact;