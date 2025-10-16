import React from "react";

const Footer = () => {
  return (
    <footer className="font-body bg-background text-text px-6 py-10">
      <div className="border-accent mb-6 border-t-1"></div>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <h3 className="font-heading mb-2 text-2xl">AUREO</h3>
          <p className="text-sm opacity-80">
            Calm luxury for everyday spaces. Crafted with care.
          </p>
        </div>

        <div className="mt-8 text-center text-sm opacity-70">
          &copy; {new Date().getFullYear()} Aureo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
