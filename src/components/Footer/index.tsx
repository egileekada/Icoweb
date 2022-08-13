import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#070610" }}>
      <div className="flex justify-evenly p-20">
        <div>
          <img src="/images/ICOWEB Logo 3 1.png" alt="" />
        </div>
        <div>
          <h2 className="text-white font-bold">Explore</h2>
          <ul>
            <li className="text-white">Home</li>
            <li className="text-white">Services</li>
            <li className="text-white">Projects</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-white">Team</li>
            <li className="text-white">Blog</li>
          </ul>
        </div>

        <div className="border border-neutral-100 rounded-md p-12">
          <h3 className="text-white text-center">Let's Talk</h3>
          <div className="flex justify-evenly">
            <div>
              <h6 className="text-white px-6">Phone Number</h6>
              <p className="text-white px-6">+2349077601790</p>
            </div>
            <div>
              <h6 className="text-white">Email Address</h6>
              <p className="text-white">Icowebagency@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
