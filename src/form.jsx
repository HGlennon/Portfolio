import "./main.css";
import Swal from "sweetalert2";

function ContactForm() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ae90b6dc-6029-4cef-985d-03f412443394");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully.",
        icon: "success",
        confirmButtonText: "OK"
      });
      event.target.reset();
    }
  };
    
  return (
    <section id="contact">
        <form onSubmit={onSubmit}>
        <h2>Contact Me</h2>
        <div className='input-box'>
            <label>Full Name</label>
            <input type="text" className="field" placeholder="Enter your name" name="name" required />
        </div>
        <div className='input-box'>
            <label>Email Address</label>
            <input type="email" className="field" placeholder="Enter your email" name="email" required />
        </div>
        <div className='input-box'>
            <label>Your Message</label>
            <textarea className="field mess" placeholder="Enter your message" required></textarea>
        </div>  
        <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>
    )
}
export default ContactForm;
