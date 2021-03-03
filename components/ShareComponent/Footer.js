import React from "react";
const Footer = () => {
  return (
    <div style={{ backgroundColor: '#FBD062' }} className='container-fluid'>

      <div >
            {/* <iframe className='w-75' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7230519.135312326!2d-75.53786901628555!3d44.13408989062044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce07bb13b1180d%3A0x7971611bb15bb7e0!2s1547%20Merivale%20Rd%2C%20Nepean%2C%20ON%20K2G%203J4!5e0!3m2!1sen!2sca!4v1614665876965!5m2!1sen!2sca"  allowfullscreen="" loading="lazy"></iframe> */}
      </div>
      <div className='text-center'>
        <p>helpmeottawareno@gmail.com</p>
        <p>613-861-1566</p>
      </div>
    <p className='text-center p-3 mt-0' >Copyright Ottawa-Reno {(new Date()).getFullYear()} </p>
</div>
  );
};

export default Footer;
