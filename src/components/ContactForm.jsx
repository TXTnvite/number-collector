import "../assets/CSS/components/contactform.css"

const ContactForm = () => {
    return(
        <form className="contact-form-container d-f-center-col">
            <h1>More Questions?</h1>
            <input type="text" placeholder="Anna Bolt"/>
            <input type="text" placeholder="Subject"/>
            <textarea placeholder="message"></textarea>
            <input type="submit"/>
        </form>
    )
}

export default ContactForm;