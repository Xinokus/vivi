import { styled } from 'styled-components'

const ButtonCon = styled.button`
    width: 479px;
    height: 60px;
    background: linear-gradient(180deg, rgba(3, 225, 255, 0.6), #13CDC2);
    border: none;
    border-radius: 9px;
    box-shadow: 0px 7px 20px -7px #00E0FF;
    cursor: pointer;
    margin-top: 50px;
    color: white;
    font-weight: 800;
    font-size: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
`

export default function Button(){
    return(
        <>
        <ButtonCon><p>Записаться на ознакомительный вебинар</p></ButtonCon>
        </>
    )
}