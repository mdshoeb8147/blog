import "./Post.css";
const Post = () => {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/385976/pexels-photo-385976.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCat">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        orem ipsum dolor sit amet consectetur adipisicing elit. In reiciendis
        aliquid ex blanditiis eum libero. Aspernatur recusandae sint consequatur
        temporibus nostrum alias totam magni ea libero nam voluptatibus quasi,
        itaque rerum excepturi maiores dicta quibusdam, iusto vel delectus a
        repudiandae quam? Cupiditate possimus maxime facere ipsam facilis
        delectus repellendus itaque? orem ipsum dolor sit amet consectetur
        adipisicing elit. In reiciendis aliquid ex blanditiis eum libero.
        Aspernatur recusandae sint consequatur temporibus nostrum alias totam
        magni ea libero nam voluptatibus quasi, itaque rerum excepturi maiores
        dicta quibusdam, iusto vel delectus a repudiandae quam? Cupiditate
        possimus maxime facere ipsam facilis delectus repellendus itaque? orem
        ipsum dolor sit amet consectetur adipisicing elit. In reiciendis aliquid
        ex blanditiis eum libero. Aspernatur recusandae sint consequatur
        temporibus nostrum alias totam magni ea libero nam voluptatibus quasi,
        itaque rerum excepturi maiores dicta quibusdam, iusto vel delectus a
        repudiandae quam? Cupiditate possimus maxime facere ipsam facilis
        delectus repellendus itaque? orem ipsum dolor sit amet consectetur
        adipisicing elit. In reiciendis aliquid ex blanditiis eum libero.
        Aspernatur recusandae sint consequatur temporibus nostrum alias totam
        magni ea libero nam voluptatibus quasi, itaque rerum excepturi maiores
        dicta quibusdam, iusto vel delectus a repudiandae quam? Cupiditate
        possimus maxime facere ipsam facilis delectus repellendus itaque?
      </p>
    </div>
  );
};
export default Post;
