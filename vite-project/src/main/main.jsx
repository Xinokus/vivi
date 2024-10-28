import './main.css'

// Section One IMGs
import Manager from '../../assets/img/Manager.png'
import Blockchain from '../../assets/img/Blockchain.png'
import Webdesign from '../../assets/img/Webdesign.png'
import Survey from '../../assets/img/Survey.png'
import People from '../../assets/img/People.png'
import Conference from '../../assets/img/Conference.png'
import Skyscraper from '../../assets/img/Skyscraper.png'
// Section One IMGs

export default function Main(){
    return(
        <>
            <main>
                <section className='sect-one'>
                    <div className='sect-one-con'>
                        <div className='sect-one-title'>
                            <p><span>7 причин</span> почему именно мы? </p>
                        </div>
                        <div className='sect-one-main-top'>
                            <div className='sect-one-main-card-small'>
                                <img src={Manager} alt="" />
                                <p>Ты станешь востребованным специалистом в области искусственного интеллекта</p>
                                <div className='sect-one-card-highlight-small'></div>
                            </div>
                            <div className='sect-one-main-card-small'>
                                <img src={Blockchain} alt="" />
                                <p>Будешь создавать свои модели искусственного интеллекта на языке программирования Python</p>
                                <div className='sect-one-card-highlight-small'></div>
                            </div>
                            <div className='sect-one-main-card-small'>
                                <img src={Webdesign} alt="" />
                                <p>Сумеешь создавать программы, связанные 
                                с компьютерным зрением и нейронными сетями.</p>
                                <div className='sect-one-card-highlight-small'></div>
                            </div>
                            <div className='sect-one-main-card-small'>
                                <img src={Survey} alt="" />
                                <p>Мы обучаем только тому, что тебе пригодится 
                                во время работы!</p>
                                <div className='sect-one-card-highlight-small'></div>
                            </div>
                        </div>
                        <div className='sect-one-main-bot'>
                            <div className='sect-one-main-card-big'>
                                <img src={People} alt="" />
                                <p>Ты найдешь единомышленников, 
                                с которыми сможешь создавать свои проекты</p>
                                <div className='sect-one-card-highlight-big'></div>
                            </div>
                            <div className='sect-one-main-card-big'>
                                <img src={Conference} alt="" />
                                <p>Мы создаём сообщество профессионалов, таких же как и мы, жаждущих развивать и изменять этот мир к лучшему с помощью IT технологий</p>
                                <div className='sect-one-card-highlight-big'></div>
                            </div>
                            <div className='sect-one-main-card-big'>
                                <img src={Skyscraper} alt="" />
                                <p>После успешного завершения курса, мы поможем тебе трудоустроиться 
                                в Южнокорейские IT компании!</p>
                                <div className='sect-one-card-highlight-big'></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}