import {ReactComponent as TgLogo} from "../../assets/footer-assets/tg.svg"
import {ReactComponent as GitGubLogo} from "../../assets/footer-assets/github.svg"
import {ReactComponent as InstaLogo} from "../../assets/footer-assets/insta.svg"
import './footer.component.style.scss'

const Footer  = ()=>{
    return(
        <div className='footer-background'>
            <div className='footer-container'>
            <div className='footer-aboutUs'>
                <p>ABOUT US</p>
                <span>At Mobka, we believe that everyone deserves to express themselves through their clothing. Our collection features a wide range of trendy and timeless pieces that cater to every style and occasion.
                We are committed to providing high-quality apparel that not only looks great but feels great too. Our team carefully curates each item to ensure it meets our standards of excellence. Whether you're looking for the latest trends or classic essentials, Mobka has something for everyone.
                Join us in celebrating individuality and confidence through fashion. At Mobka, we’re not just about clothes; we’re about creating a lifestyle that empowers you to be your best self.</span>
            </div>
            <div className='footer-contact'>
                <p>CONTACT</p>
                <span>tagankhozhaev@gmail.com</span>
                <span>+77777777777</span>
                <div className='footer-contact-links'>
                    <a href="https://www.instagram.com/"><InstaLogo /></a>
                    <a href="https://t.me/mobkukariku"><TgLogo /></a>
                    <a href="https://github.com/mobkukariku"><GitGubLogo /></a>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Footer;