import React from 'react';
 import "./ContactPage.css"

const ContactUs = () => {
  return (
    <div className="contact-us">
      <header>
        <h1>Contact Us</h1>
      </header>
      <main>
        <section className="contact-info">
          <h2>Manufacturing Plant & Head Office</h2>
          <address>
            Village Nayagaon, Chandansingh Block Kotabagh,<br />
            Tehsil Kaladhungi, Distt Nainital,<br />
            Uttarakhand-263139, India<br />
            Email: <a href="mailto:info@herbal-creations.com">info@herbal-creations.com</a><br />
            Phone: +91-5947-287433, +91-5947-287432<br />
            Sales: +91-9897016110, <a href="mailto:sales1@herbal-creations.com">sales1@herbal-creations.com</a><br />
            Purchase: +91-6395061019, <a href="mailto:purchase@herbal-creations.com">purchase@herbal-creations.com</a>
          </address>
        </section>
        <section className="contact-info">
          <h2>USA Warehouse & Office</h2>
          <address>
            Herbal Creations USA, Unit-F03,<br />
            1001 Doubleday Avenue,<br />
            Ontario-91761, California, USA<br />
            West Coast Enquiries: +1(415)559-6137, <a href="mailto:sugam@herbal-creations.com">sugam@herbal-creations.com</a><br />
            East Coast Enquiries: <a href="mailto:shashank@herbal-creations.com">shashank@herbal-creations.com</a>
          </address>
        </section>
        <section className="contact-info">
          <h2>Bengaluru Warehousing cum Sales Office</h2>
          <address>
            Mr. V. Suresh Kumar - VP Sales (South)<br />
            No. C87, Devasandra Industrial Estate,<br />
            Bengaluru, Karnataka 560048<br />
            Email: <a href="mailto:suresh@herbal-creations.com">suresh@herbal-creations.com</a><br />
            Phone: +91-9902295788
          </address>
        </section>
        <section className="contact-info">
          <h2>New Delhi Office</h2>
          <address>
            Parveen Bhardwaj – VP Sales (Group)<br />
            903 Tolstoy House, Tolstoy Marg,<br />
            Connaught Place, New Delhi 110001<br />
            Email: <a href="mailto:parveen@herbal-creations.com">parveen@herbal-creations.com</a><br />
            Phone: +91-8130685900
          </address>
        </section>
        <section className="contact-form">
          <h2>Get In Touch</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Message:
              <textarea name="message" required></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;
