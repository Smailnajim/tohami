import { useState } from 'react';
import { Header, Footer } from '../components';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
    };

    return (
        <>
            <Header />
            <main className="page-content">
                <section className="contact-hero">
                    <div className="section-container">
                        <div className="section-header">
                            <span className="section-label">Get In Touch</span>
                            <h2 className="section-title">Let's Create Together</h2>
                            <p className="section-subtitle">
                                Have a project in mind? We'd love to hear from you
                            </p>
                        </div>
                    </div>
                </section>

                <section className="contact-content">
                    <div className="section-container">
                        <div className="contact-grid">
                            <div className="contact-info">
                                <h3>Contact Information</h3>
                                <p>Ready to start your project? Reach out to us through any of these channels.</p>

                                <div className="contact-details">
                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>Address</h4>
                                            <p>123 Design Street, Casablanca, Morocco</p>
                                        </div>
                                    </div>

                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>Email</h4>
                                            <p>ynajim22@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>Phone</h4>
                                            <p>+212 5XX-XXXXXX</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-hours">
                                    <h4>Business Hours</h4>
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>

                            <div className="contact-form-wrapper">
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your@email.com"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+212 XXX-XXXXXX"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="subject">Subject</label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="project">New Project</option>
                                                <option value="consultation">Design Consultation</option>
                                                <option value="products">Product Inquiry</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your project..."
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Send Message
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default ContactPage;
