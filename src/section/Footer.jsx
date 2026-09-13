import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 font-mono">
      <div className="text-white-500 flex gap-2">
        <p>Terms & conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <a
          href="https://github.com/ashutosh2712"
          className="social-icon"
          target="_blank"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://www.linkedin.com/in/ashutosh-k-roy-90b1753b5"
          className="social-icon"
          target="_blank"
        >
          <img
            src="/assets/linkedin.svg"
            alt="linkedin"
            className="w-1/2 h-1/2"
          />
        </a>
        <a
          href="https://leetcode.com/u/ashuNITH/"
          className="social-icon"
          target="_blank"
        >
          <img
            src="/assets/leetcode.svg"
            alt="leetcode"
            className="w-1/2 h-1/2"
          />
        </a>
      </div>
      <p className="text-white-500">
        © 2026 Ashutosh K Roy. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
