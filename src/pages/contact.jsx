import React from "react";
import { FaPhone, FaEnvelope, FaGlobe, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import './contact.css';

const Contact = () => {
    return (
        <div>
            <div className="section" id="contact">
            <div className="content-fit">
                <div className="number">04</div>
                <div className="des">
                <div className="title">CONTACT</div>
                <table>
                <tbody>
                    <tr>
                    <td>Email</td>
                    <td>cainbuilders09@gmail.com</td>
                    </tr>
                    <tr>
                    <td>Phone</td>
                    <td>+91 98955 51323</td>
                    </tr>
                    <tr>
                    <td>Website</td>
                    <td>cainbuilders.in</td>
                    </tr>
                </tbody>
                </table>

                <div className="contact-icons">
                <a href="tel:+919895551323" title="Phone"><FaPhone /></a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=cainbuilders09@gmail.com" title="Email"><FaEnvelope /></a>
                <a href="https://cainbuilders.in" target="_blank" rel="noopener noreferrer" title="Website"><FaGlobe /></a>
                <a href="https://instagram.com/cain.builders" target="_blank" rel="noopener noreferrer" title="Instagram"><FaInstagram /></a>
                <a href="https://facebook.com/cainbuilders" target="_blank" rel="noopener noreferrer" title="Facebook"><FaFacebookF /></a>
                <a href="https://wa.me/+919895551323" target="_blank" rel="noopener noreferrer" title="WhatsApp"><FaWhatsapp /></a>

                </div>
                <div class="sign"></div>
                </div>
            </div>
            </div>
        </div>
    );
}
export default Contact;