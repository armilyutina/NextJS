import Link from 'next/link'
import Head from 'next/head'
import classes from "../../styles/MainContainer.module.css"



const MainContainer = ({ children }) => {
    return(
        <div>
            <Head>
                <meta keywords = {`nextJS, armilyutina`}></meta>
                <title>NextJS Tutorial</title>
            </Head>

            <div className = {classes.navbar}>

                <Link href = "/">
                    <a> HOME</a>
                </Link>

                <Link href = "/about">
                    <a> ABOUT</a>
                </Link>

                <Link href = "/posts">
                    <a> POSTS</a>
                </Link>

                <Link href = "/contacts">
                    <a> CONTACTS</a>
                </Link>
            </div>
            <div>
                { children }
            </div>
    </div>
    )
}


export default MainContainer;