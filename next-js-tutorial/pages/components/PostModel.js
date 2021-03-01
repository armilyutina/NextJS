import classes from "../../styles/PostModel.module.css"

const PostModel = ({ children, post }) => {
    return  (
        <div className = {classes.card}>
            <div >
                <div className = {classes.wrapper}>
                    <div className = {classes.title}>
                        {children}
                    </div>
                    <div >
                        
                    </div>
                    <div >
                        {post.author}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PostModel;