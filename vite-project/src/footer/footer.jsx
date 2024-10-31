import './footer.css'

import Logo from '../../assets/img/Logo.png'
import Mail from '../../assets/img/Mail.png'
import Phone from '../../assets/img/Phone.png'

import Facebook from '../../assets/img/Facebook.png'
import FacebookMessenger from '../../assets/img/FacebookMessenger.png'
import Youtube from '../../assets/img/Youtube.png'
import Whatsup from '../../assets/img/Whatsup.png'
import Talk from '../../assets/img/Talk.png'

import Afreeca from '../../assets/img/Afreeca.png'

export default function Footer(){
    return(
        <>
            <footer>
                <div className='footer-top'>
                    <div className='footer-top-con'>
                        <div className='footer-top-left'>
                            <img src={Logo} alt="" />
                        </div>
                        <div className='footer-top-right'>
                            <div className='footer-top-right-top'>
                                <div className='footer-top-right-top-left'>
                                    <img src={Mail} alt="" />
                                    <a href="">veravlaedu@gmail.com </a>
                                </div>
                                <div className='footer-top-right-top-right'>
                                    <img src={Phone} alt="" />
                                    <p>+ 82 (10) 7526-9192 </p>
                                </div>
                            </div>
                            <div className='footer-top-right-bot'>
                                <div className='footer-top-right-bot-left'>
                                    <p>Мы в соц сетях</p>
                                </div>
                                <div className='footer-top-right-bot-right'>
                                    <img src={Facebook} alt="" />
                                    <img src={FacebookMessenger} alt="" />
                                    <img src={Youtube} alt="" />
                                    <img src={Whatsup} alt="" />
                                    <img src={Talk} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-mid'>
                    <div className='footer-mid-line'>

                    </div>
                    <div className='footer-mid-center'>
                        <p>Copyright © 2021 VeraVla edu. All rights reserved</p>
                    </div>
                    <div className='footer-mid-line'>

                    </div>
                </div>
                <div className='footer-bot'>
                    <div>

                    </div>
                    <div>
                        <p>developed by afreeca</p>
                        <img src={Afreeca} alt="" />
                    </div>
                </div>
            </footer>
        </>
    )
}