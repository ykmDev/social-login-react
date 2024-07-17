import posts from './../data';
import Card from './../components/Card';
const Home = () => {
    console.log(posts);
    return (
        <div className="home">
            {posts && posts.map(post => (
                <Card post={post} key={post.id}/>
            ))}
        </div>
    );
}
 
export default Home;