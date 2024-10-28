import './header.css'

import Logo from '../../assets/img/Logo.png'
import Phone from '../../assets/img/Phone.png'
import Certificate from '../../assets/img/Certificate.png'
import ScrollDown from '../../assets/img/ScrollDown.png'
import Headset from '../../assets/img/Headset.png'

export default function Header(){
    return(
        <>
            <div className="absolute" id="ScrollDown"><img src={ScrollDown} alt="" /><p>Листайте вниз</p></div>
            <div className="absolute" id="Support"><p>Бесплатная консультация</p><div><button type="button"><img src={Headset} alt="" /></button></div></div>

            <header>
                <div className='header-con'>
                    <nav>
                        <a href=""><img src={Logo} alt="" /></a>
                        <div className='nav_left'>
                            <img src={Phone} alt="" />
                            <p>+ 82 (10) 7526-9192 </p>
                        </div>
                    </nav>
                    <div className='header-main'>
                        <div className='header-hello'>
                            <p>Добро пожаловать в онлайн школу </p>
                        </div>
                        <div className='header-title'>
                            <p>VeraVla edu!</p>
                        </div>
                        <div className='header-desc'>
                            <p>Переквалифицируйся в разработчика искусственного интеллекта и получи высокооплачиваемую работу    </p>
                        </div>
                        <div className='header-paper'>
                            <img src={Certificate} alt="" />
                            <div className='header-paper-text'>
                                <p>
                                    Мы обучаем с гарантией!
                                </p>
                                <p>
                                    Первый месяц действует гарантия 100% возврата 
                                    денег, если тебя не устроят наши курсы 
                                </p>                                
                            </div>

                        </div>
                        <div className='header-subscribe'>
                            <button type="button"><p>Записаться на ознакомительный вебинар</p></button>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}