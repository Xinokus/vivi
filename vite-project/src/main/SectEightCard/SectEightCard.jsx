export default function SectEightCard({IMG, title}){
    return(
        <>
            <div className="sect-eight-card">
                <div className="sect-eight-card-img">
                    <img src={IMG} alt="" />
                </div>
                <div className="sect-eight-card-text">
                    <div>
                        <p>{title}</p>
                    </div>
                    <div>
                        <p>
                            Опыт работы . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . от 1 года <br />
                            Образование . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Высшее <br />
                            Возраст . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  21-35 лет
                        </p>
                    </div>
                </div>
                <div className="sect-eight-card-button">
                    <button type="button">Подробнее</button>
                </div>
            </div>
        </>
    )
}