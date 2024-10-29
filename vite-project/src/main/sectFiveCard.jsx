export default function SectFiveCard({number, title, desc}){
    return(
        <>
            <div className="sect-five-card">
                <div className="sect-five-info-number">
                    <div>
                        <p>{number}</p>
                    </div>
                </div>
                <div className="sect-five-info-text">
                    <p>{title}</p>
                    <p>{desc}</p>
                </div>
            </div>
        </>
    )
}