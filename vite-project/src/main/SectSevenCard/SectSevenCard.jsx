export default function SectSevenCard({IMG}){
    return(
        <>
            <div className="sect-seven-card">
                <div className="sect-seven-card-img">
                    <img src={IMG} alt="" />
                </div>
                <div className="sect-seven-card-text">
                    <div>
                        <p>Заголовок объявления из несколькиз слов</p>
                    </div>
                    <div>
                        <p>Искусственный интеллект - это не одна дисциплина, как думают многие, а совокупность различных между</p>
                    </div>
                </div>
                <div className="sect-seven-card-button">
                    <button type="button">Подробнее</button>
                </div>
            </div>
        </>
    )
}