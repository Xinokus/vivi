import { motion } from 'framer-motion'

export default function PageLoad(){
    return(
        <>
            <motion.div className='page-load' id='Loading'>
                <div className='page-load-con'>
                    <div className='page-load-circle'></div>
                    <div className='page-load-circle'></div>
                </div>
            </motion.div>
        </>
    )
}

function HideLoading(){
    let Loading = document.getElementById('Loading')
    Loading.style.display = 'none'
}

setTimeout(HideLoading, 2000)