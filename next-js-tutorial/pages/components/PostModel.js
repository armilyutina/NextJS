import classes from "../../styles/PostModel.module.css"

const PostModel = ({ children, post }) => {
    return  (
        <div className = {classes.card}>
            <div >
                <div className = {classes.wrapper}>
                    <div >
                        {children}
                    </div>
                    <div >
                        {post}
                    </div>
                    <div >
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PostModel;