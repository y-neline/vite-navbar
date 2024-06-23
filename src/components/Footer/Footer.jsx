import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-element"> {/* Generic element within footer */} </div>
      <div className="footer-content"> {/* Main content container */}
        <div className="contact-section">
          <h2 className="main-title">Контакты</h2> {/* Main title for contacts */}
          <div className="details">
            <div className="label">Адрес</div> {/* Label for address */}
            <div>пр Кабанбай батыр, 53</div> {/* Specific address */}
            <div>+7 777 777 77 77</div> {/* Phone number */}
            <div>really.good.company@gmail.com</div> {/* Company email */}
          </div>
        </div>
        <div className="social-media-section">
          <h2 className="section-title">Социальные сети</h2> {/* Title for social media */}
          <div className="social-media-icons"> {/* Container for social icons */}
            <img className="instagram-icon" loading="lazy" alt="" src="/social-net/Instagram.png" />
            <img className="facebook-icon" loading="lazy" alt="" src="/social-net/Facebook.png" />
            <img className="twitter-icon" loading="lazy" alt="" src="/social-net/TwitterX.png" />
            <img className="tiktok-icon" loading="lazy" alt="" src="/social-net/TikTok.png" />
            <img className="youtube-icon" loading="lazy" alt="" src="/social-net/YouTube.png" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
