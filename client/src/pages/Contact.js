import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
    return (
        <Layout title={"Contact us"}>
            <div className="row contactus ">
                <div className="col-md-6">
                    <img
                        src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1687782368~exp=1687782968~hmac=5c6d3d5d4463fe4edf7d4cff72966f9a1b729dda00ee354c30260adc7c4a0734"
                        alt="contactus"
                        style={{ width: "60%" }}
                    />
                </div>
                <div className="col-md-4">
                    <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
                    <p className="text-justify mt-2">
                        any query and info about prodduct feel free to call anytime we 24X7
                        vaialible
                    </p>
                    <p className="mt-3">
                        <BiMailSend /> : www.help@ecommerceapp.com
                    </p>
                    <p className="mt-3">
                        <BiPhoneCall /> : 012-3456789
                    </p>
                    <p className="mt-3">
                        <BiSupport /> : 1800-0000-0000 (toll free)
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;