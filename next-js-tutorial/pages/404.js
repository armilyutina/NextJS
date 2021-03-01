import { Main } from 'next/document';
import Link from 'next/link'
import MainContainer from './components/MainContainer'

import classes from '../styles/error.module.css'

const Error = () => {
    return(
        <MainContainer>
            <Link href = "/" className = {classes.error}>
                <a className = {classes.link}>Go back, please</a>
            </Link>
        </MainContainer>
    )
}


export default Error;