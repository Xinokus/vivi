import './main.css'
import Button from '../header/button/button'

import ArrowToLeft from '../../assets/img/ArrowToLeft.png'
// Section One
import Manager from '../../assets/img/Manager.png'
import Blockchain from '../../assets/img/Blockchain.png'
import Webdesign from '../../assets/img/Webdesign.png'
import Survey from '../../assets/img/Survey.png'
import People from '../../assets/img/People.png'
import Conference from '../../assets/img/Conference.png'
import Skyscraper from '../../assets/img/Skyscraper.png'
//

// Section Two
import SectTwoIcon from '../../assets/img/SectTwoIcon.png'
//

// Secton Three
import SectThreeImgOne from '../../assets/img/SectThreeImgOne.png'
import SectThreeImgTwo from '../../assets/img/SectThreeImgTwo.png'
import SectThreeImgThree from '../../assets/img/SectThreeImgThree.png'
import SectThreeImgFour from '../../assets/img/SectThreeImgFour.png'
//

// Section Four
import SectFourIcon from '../../assets/img/SectFourIcon.png'
//

// Section Five
import SectFiveOpen from '../../assets/img/SectFiveOpen.png'
import SectFiveClose from '../../assets/img/SectFiveClose.png'
import SectFiveCard from './sectFiveCard'
import { CardArray } from './sectFiveArray'
//

// Section Six
import KimJiHoon from '../../assets/img/KimJiHoon.png'
//

// Section Seven
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import SectSevenCard from './SectSevenCard/SectSevenCard'
import SectSevenImgOne from '../../assets/img/SectSevenImgOne.png'
import SectSevenImgTwo from '../../assets/img/SectSevenImgTwo.png'
import SectSevenImgThree from '../../assets/img/SectSevenImgThree.png'
import SectSevenImgFour from '../../assets/img/SectSevenImgFour.png'
//

// Section Eight
import SectEightCard from './SectEightCard/SectEightCard'
//

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
                <section className='sect-two'>
                    <div className="sect-two-con">
                        <div className='sect-two-title'>
                            <p><span>Искусственный интеллект</span> - это круто? </p>
                        </div>
                        <div className='sect-two-main'>
                            <div className='sect-two-card'>
                                <div className='sect-two-card-img'>
                                    <img src={SectTwoIcon} alt="" />
                                </div>
                                <p>На данный момент только в Южной Корее ищут 10,000 специалистов в области AI!</p>
                                <div className="absolute" id="SectTwoFlash1"></div>
                            </div>
                            <div className='sect-two-card'>
                                <div className='sect-two-card-img'>
                                    <img src={SectTwoIcon} alt="" />
                                </div>
                                <p>Младшие разработчики искусственного интеллекта без опыта работы могут получать в Южной Корее 60,000,000 вон (51,000$) в год. Специалист со средним стажем работы может получать уже около 100,000,000 вон (85,000$) в год.</p>
                                <div className="absolute" id="SectTwoFlash2"></div>
                            </div>
                            <div className='sect-two-card'>
                                <div className='sect-two-card-img'>
                                    <img src={SectTwoIcon} alt="" />
                                </div>
                                <p>В США уровень зарплат ещё выше! Младший специалист без опыта работы получает в среднем 93,000$ в год. А инженер со средним стажем работы получает уже больше 140,000$ в год!</p>
                                <div className="absolute" id="SectTwoFlash3"></div>
                            </div>
                            <div className='sect-two-card'>
                                <div className='sect-two-card-img'>
                                    <img src={SectTwoIcon} alt="" />
                                </div>
                                <p>А самое вкусное то, что твоя зарплата будет расти вместе 
                                с твоими навыками. Стаж не так важен.</p>
                                <div className="absolute" id="SectTwoFlash4"></div>
                            </div>
                        </div>
                        <Button></Button>                    
                    </div>
                </section>
                <section className='sect-three'>
                    <div className="sect-three-con">
                        <div className='sect-three-title'>
                            <p><span>Важно</span> понимать что</p>
                        </div>
                        <div className='sect-three-main'>
                            <div className='sect-three-main-top'>
                                <div className='sect-three-img'>
                                    <img src={SectThreeImgOne} alt="" />
                                </div>
                                <div className='sect-three-text'>
                                    <p>Искусственный интеллект - <br />
                                    это не одна дисциплина, как думают многие, а совокупность различных между собой направлений.</p>
                                </div>
                                <div className='sect-three-img'>
                                    <img src={SectThreeImgTwo} alt="" />
                                </div>
                                <div className='sect-three-text'>
                                    <p>Подготовка реально хороших специалистов требует времени, краткосрочные курсы эффекта не дают.</p>
                                </div>
                            </div>
                            <div className='sect-three-main-bot'>
                                <div className='sect-three-text'>
                                    <p>Большинство менторов никогда не работали над реальными проектами. 
                                        Они изучали все по видеоурокам и книжкам, 
                                        и преподают без практики, что очень печально.</p>
                                </div>
                                <div className='sect-three-img'>
                                    <img src={SectThreeImgThree} alt="" />
                                </div>
                                <div className='sect-three-text'>
                                    <p>На многих курсах 
                                        преподают готовые/идеальные кейсы 
                                        без всяких сложностей, поэтому студенты после таких курсов не могут 
                                        решать реальные задачи 
                                        на работе. </p>
                                </div>
                                <div className='sect-three-img'>
                                    <img src={SectThreeImgFour} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='sect-four'>
                    <div className="sect-four-con">
                        <div className='sect-four-title'>
                            <p>Почему именно наш курс? <span>Все просто!</span></p>
                        </div>
                        <div className='sect-four-main'>
                            <div className='sect-four-card'>
                                <div className='sect-four-card-img'>
                                    <img src={SectFourIcon} alt="" />
                                </div>
                                <div className='sect-four-card-text'>
                                    <p>Объясняем сложные вещи простым и доходчивым языком.</p>
                                </div>
                                <div className="absolute" id="SectFourLight"></div>
                            </div>
                            <div className='sect-four-card'>
                                <div className='sect-four-card-img'>
                                    <img src={SectFourIcon} alt="" />
                                </div>
                                <div className='sect-four-card-text'>
                                    <p>Обучаем не просто языку программирования, или одной какой-то дисциплине, мы обучаем полностью всей специальности.</p>
                                </div>
                                <div className="absolute" id="SectFourLight"></div>
                            </div>
                            <div className='sect-four-card'>
                                <div className='sect-four-card-img'>
                                    <img src={SectFourIcon} alt="" />
                                </div>
                                <div className='sect-four-card-text'>
                                    <p>Ознакомляем с содержанием урока только в режиме реального времени. Ты сможешь сразу задать вопрос и тут же получить ответы. Мы всегда будем рядом. </p>
                                </div>
                                <div className="absolute" id="SectFourLight"></div>
                            </div>
                            <div className='sect-four-card'>
                                <div className='sect-four-card-img'>
                                    <img src={SectFourIcon} alt="" />
                                </div>
                                <div className='sect-four-card-text'>
                                    <p>Обучение ведет ведущий и действующий специалист в области искусственного интеллекта в Южной Корее.</p>
                                </div>
                                <div className="absolute" id="SectFourLight"></div>
                            </div>
                            <div className='sect-four-card'>
                                <div className='sect-four-card-img'>
                                    <img src={SectFourIcon} alt="" />
                                </div>
                                <div className='sect-four-card-text'>
                                    <p>Обучение проходит в группе по 15 человек, которая внутри делится на 3 команды, и каждая команда выполняет собственный проект. Таким образом, студенты смогут прочувствовать тонкости командной разработки, и уже на этапе обучения окунуться в рабочую атмосферу AI специалиста.</p>
                                </div>
                                <div className="absolute" id="SectFourLight"></div>
                            </div>
                        </div>
                        <Button></Button>     
                    </div>
                </section>
                <section className='sect-five'>
                    <div className="sect-five-con">
                        <div className="sect-five-title">
                            <p><span>Что я узнаю</span> из этих курсов? </p>
                        </div>
                        <div className="sect-five-desc">
                            <p>Полностью весь курс состоит из 3 частей</p>
                        </div>
                        <div className="sect-five-main">
                            <div className='sect-five-junior'>
                                <div className='five-junior-left'>
                                    <div className='junior-left-dot'>
                                        <div></div>
                                    </div>
                                    <div className='junior-left-text'>
                                        <p>AI - Junior Level. <span>Продолжительность 1 год</span></p>
                                    </div>
                                </div>
                                <div className='five-junior-right'>
                                    <img src={SectFiveOpen} alt="" />
                                </div>
                            </div>
                            <div className='sect-five-info'>
                                <SectFiveCard number={CardArray[0].number} title={CardArray[0].title} desc={CardArray[0].desc}/>
                                <SectFiveCard number={CardArray[1].number} title={CardArray[1].title} desc={CardArray[1].desc}/>
                                <SectFiveCard number={CardArray[2].number} title={CardArray[2].title} desc={CardArray[2].desc}/>
                                <SectFiveCard number={CardArray[3].number} title={CardArray[3].title} desc={CardArray[3].desc}/>
                                <SectFiveCard number={CardArray[4].number} title={CardArray[4].title} desc={CardArray[4].desc}/>
                                <SectFiveCard number={CardArray[5].number} title={CardArray[5].title} desc={CardArray[5].desc}/>
                                <SectFiveCard number={CardArray[6].number} title={CardArray[6].title} desc={CardArray[6].desc}/>
                                <SectFiveCard number={CardArray[7].number} title={CardArray[7].title} desc={CardArray[7].desc}/>
                                <SectFiveCard number={CardArray[8].number} title={CardArray[8].title} desc={CardArray[8].desc}/>
                                <SectFiveCard number={CardArray[9].number} title={CardArray[9].title} desc={CardArray[9].desc}/>
                                <SectFiveCard number={CardArray[10].number} title={CardArray[10].title} desc={CardArray[10].desc}/>
                            </div>
                            <div className='sect-five-senior'>
                                <div className='five-junior-left'>
                                    <div className='junior-left-dot'>
                                        <div></div>
                                    </div>
                                    <div className='junior-left-text'>
                                        <p>AI - Senior Level. <span>Продолжительность 1.5 года. </span></p>
                                    </div>
                                    <div className='junior-left-add-text'>
                                        <p>В разработке</p>
                                    </div>
                                </div>
                                <div className='five-junior-right'>
                                    <img src={SectFiveClose} alt="" />
                                </div>
                            </div>
                            <div className='sect-five-senior'>
                                <div className='five-junior-left'>
                                    <div className='junior-left-dot'>
                                        <div></div>
                                    </div>
                                    <div className='junior-left-text'>
                                        <p>AI - Senior Level V2.0. <span>Продолжительность 2 год</span></p>
                                    </div>
                                    <div className='junior-left-add-text'>
                                        <p>В разработке</p>
                                    </div>
                                </div>
                                <div className='five-junior-right'>
                                    <img src={SectFiveClose} alt="" />
                                </div>
                            </div>
                        </div>
                        <Button></Button>     
                    </div>
                </section>
                <section className='sect-six'>
                    <div className="sect-six-con">
                        <div className='sect-six-text'>
                            <p>Автор курса </p>
                            <p>
                                Основателем курса является Владимир Ким, действующий и ведущий специалист в области искусственного интеллекта в Южной Корее, который разрабатывал системы искусственного интеллекта для компаний Samsung SDS, LG science park <br />
                                и LG digital park. <br />
                                <br />
                                На данный момент, Владимир занимается разработкой виртуальных сенсоров на основе нейронных сетей. <br />
                                <br />
                                Является одним из авторов диссертации об обработке больших данных для Южнокорейского института по развитию Интернета. <br />
                                <br />
                                Действующий член ассоциации разработчиков программного обеспечения в Южной Корее. <br />
                                <br />
                                Активно участвует в R&D проектах по внедрению искусственного интеллекта для государственных предприятий Южной Кореи.
                            </p>
                        </div>
                        <div className='sect-six-img'>
                            <img src={KimJiHoon} alt="" />
                            <p><span>Владимир Ким</span> <br /> Ведущий специалист</p>
                        </div>
                    </div>
                </section>
                <section className='sect-seven'>
                    <div className='sect-seven-con'>
                        <div className='sect-seven-top'>
                            <div className='sect-seven-top-title'>
                                <p>Объявления школы</p>
                            </div>
                            <div className='sect-seven-top-button'>
                                <button type="button"><p>Все объявления</p></button>
                            </div>
                        </div>
                        <Swiper className='sect-seven-swiper' navigation={true} slidesPerView={3} modules={[Navigation]}>
                            <SwiperSlide>
                                <SectSevenCard IMG={SectSevenImgOne}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SectSevenCard IMG={SectSevenImgTwo}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SectSevenCard IMG={SectSevenImgThree}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SectSevenCard IMG={SectSevenImgFour}/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className='sect-eight'>
                    <div className='sect-eight-con'>
                        <div className='sect-eight-top'>
                            <div className='sect-eight-top-title'>
                                <p>Вакансии</p>
                            </div>
                            <div className='sect-eight-top-button'>
                                <button type="button"><p>Все вакансии</p></button>
                            </div>
                        </div>
                        <Swiper className='sect-eight-swiper' navigation={true} slidesPerView={3} modules={[Navigation]}>
                            <SwiperSlide>
                                <SectEightCard IMG={SectSevenImgFour} title={"Требуется администратор"}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SectEightCard IMG={SectSevenImgThree} title={"Требуется менеджер"}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SectEightCard IMG={SectSevenImgTwo} title={"Требуется администратор"}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SectEightCard IMG={SectSevenImgOne} title={"Требуется менеджер"}/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
            </main>
            <div className="absolute" id="GetUp"><div><button type="button"><img src={ArrowToLeft} alt="" /></button></div><p>Подняться вверх</p></div>
        </>
    )
}