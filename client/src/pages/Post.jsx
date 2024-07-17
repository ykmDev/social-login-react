import { useLocation } from 'react-router';
const Post = ({posts}) => {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const post = posts.find(post => post.id.toString() === id);
    return (
        <div className="post">
            <img src={post.img} alt="" className="postImg" />
            <h1 className="postTitle">{post.title}</h1>
            <p className="postDesc">{post.desc}</p>
            <p className="postLongDesc">{post.longDesc}</p>
        </div>
    );
}
 
export default Post;