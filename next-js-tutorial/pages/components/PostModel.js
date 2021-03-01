import classes from "../../styles/PostModel.module.css"

const PostModel = ({ children, post }) => {
    return  (
        <div className = {classes.card}>
            <div className = {classes.container}>
                <div className = {classes.wrapper}>
                    <div className = {classes.title}>
                        {children}
                    </div>
                    <div className = {classes.text}>
                        {post.body}
                    </div>
                    <div className = {classes.author}>
                        {post.author}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PostModel;