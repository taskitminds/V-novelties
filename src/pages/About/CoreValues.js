import React, { useEffect } from "react";
import "./CoreValues.css";
import "./AboutPage.css";
import qualityImg from "../../assets/images/about/quality.webp";
import integrityImg from "../../assets/images/about/integrity.webp";
import sustainableImg from "../../assets/images/about/sustainable.webp";
import innovationImg from "../../assets/images/about/innovation.webp";
import customer_focusImg from "../../assets/images/about/customer_focus.webp";
import teamworkImg from "../../assets/images/about/teamwork.webp";
import improvementImg from "../../assets/images/about/improvement.webp";
import ethicalImg from "../../assets/images/about/ethical.webp";


const CoreValues = () => {
    useEffect(() => {
        const valueBoxes = document.querySelectorAll(".value-box");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add active class with a delay for each box
                        valueBoxes.forEach((box, index) => {
                            setTimeout(() => {
                                box.classList.add("active");
                            }, index * 200); // 200ms delay between boxes
                        });
                        observer.unobserve(entry.target); // Stop observing once animation is triggered
                    }
                });
            },
            { threshold: 0.3 }
        );

        const section = document.querySelector(".values-grid");
        if (section) {
            observer.observe(section);
        }
    }, []);

    return (
        <section className="core-values">
            <h2 className="valueheading">Our Core Values</h2>
            <p className="valuecontent">
            At V Novelties Herbal Products, we’re more than just a brand—we’re your trusted companion in wellness. Thank you for choosing V Novelties Herbal Products. Let’s embrace nature’s goodness and redefine self-care together!
            </p>
            <div className="values-grid">
                <div className="value-box">
                    <img src={qualityImg} alt="Quality" />
                    <p><center>Quality</center></p>
                </div>
                <div className="value-box">
                    <img src={integrityImg} alt="Integrity" />
                    <p><center>Integrity</center></p>
                </div>
                <div className="value-box">
                    <img src={sustainableImg} alt="Sustainable" />
                    <p><center>Sustainable</center></p>
                </div>
                <div className="value-box">
                    <img src={innovationImg} alt="Innovation" />
                    <p><center>Innovation</center></p>
                </div>
                <div className="value-box">
                    <img src={customer_focusImg} alt="Customer Focus" />
                    <p><center>Customer Focus</center></p>
                </div>
                <div className="value-box">
                    <img src={teamworkImg} alt="Teamwork" />
                    <p><center>Teamwork</center></p>
                </div>
                <div className="value-box">
                    <img src={improvementImg} alt="Improvement" />
                    <p><center>Improvement</center></p>
                </div>
                <div className="value-box">
                    <img src={ethicalImg} alt="Ethical Practices" />
                    <p><center>Ethical Practices</center></p>
                </div>
            </div>
        </section>
    );
};

export default CoreValues;