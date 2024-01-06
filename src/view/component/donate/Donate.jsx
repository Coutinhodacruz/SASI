import React from "react";
import hand from "../../../assets/image/hand.png";
import help from "../../../assets/image/help.jpg";
import DonateStyle from "../../../styles/donate/DonateStyle.css";
import { FaWallet, FaUser, FaGift, FaCamera } from "react-icons/fa";

const Donate = () => {
  const iconStyle = { color: "#777", opacity: 0.4 };

  return (
    <section className="donate">
      <div className="container">
        <div className="section-title">
          <h2>How Can You Help</h2>
          <div className="icon-img">
            <img src={hand} alt="" />
          </div>
          <p className="p">
            There are many variations of azer duskam of Lorem Ipsum available,
          </p>
        </div>
        <div className="col-help">
          <div className="help-banner">
            <img src={help} alt="" />
          </div>
        </div>
        <div className="column1">
          <div className="single-service">
            <FaWallet size={40} style={iconStyle} />
            <h3>Send Donation </h3>
            <p>
              There are many variations of passages <br /> of Lorem Ipsum
              available,
            </p>
          </div>
        </div>
        <div className="column2">
          <div className="single-service">
            <FaUser size={40} style={iconStyle} />
            <h3>Become Volunteer</h3>
            <p>
              There are many variations of passages <br /> of Lorem Ipsum
              available,
            </p>
          </div>
        </div>
        <div className="column-sec1">
          <div className="single-service">
            <FaGift size={40} style={iconStyle} />
            <h3>Make A Gift</h3>
            <p>
              There are many variations of passages <br /> of Lorem Ipsum
              available,
            </p>
          </div>
        </div>
        <div className="column-sec2">
          <div className="single-service">
            <FaCamera size={40} style={iconStyle} />
            <h3>Through Media</h3>
            <p>
              There are many variations of passages <br /> of Lorem Ipsum
              available,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;



// import React from 'react';

// const Donate = () => {
//   return (
//     <div className="help-area ptb-120 gray-bg">
//       <div className="container">
//         <div className="section-title text-center mb-75">
//           <h2>How Can You Help</h2>
//           <div className="icon-img">
//             <img src="assets/img/icon-img/1.png" alt="" />
//           </div>
//           <p>There are many variations of azer duskam of Lorem Ipsum available,</p>
//         </div>
//         <div className="row">
//           <div className="col-lg-6 col-md-12">
//             <div className="help-banner" data-overlay="15">
//               <img src="assets/img/banner/1.jpg" alt="" />
//             </div>
//           </div>
//           <div className="col-lg-6 col-md-12">
//             <div className="help-services">
//               <div className="row">
//                 <div className="col-lg-6 col-md-6 col-sm-6 text-center mb-65">
//                   <div className="single-service">
//                     <i className="icon-wallet"></i>
//                     <h3>Send Donation</h3>
//                     <p>There are many variations of passages of Lorem Ipsum available,</p>
//                   </div>
//                 </div>
//                 <div className="col-lg-6 col-md-6 col-sm-6 text-center mb-65">
//                   <div className="single-service">
//                     <i className="icon-profile-male"></i>
//                     <h3>Become Volunteer</h3>
//                     <p>There are many variations of passages of Lorem Ipsum available,</p>
//                   </div>
//                 </div>
//                 <div className="col-lg-6 col-md-6 col-sm-6 text-center">
//                   <div className="single-service mrg-30">
//                     <i className="icon-gift"></i>
//                     <h3>Make A Gift</h3>
//                     <p>There are many variations of passages of Lorem Ipsum available,</p>
//                   </div>
//                 </div>
//                 <div className="col-lg-6 col-md-6 col-sm-6 text-center">
//                   <div className="single-service">
//                     <i className="icon-camera"></i>
//                     <h3>Through Media</h3>
//                     <p>There are many variations of passages of Lorem Ipsum available,</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Donate;
