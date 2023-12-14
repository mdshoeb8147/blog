import "./SinglePost.css";
const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/2781760/pexels-photo-2781760.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>

            <i className=" singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:<b>Shoeb</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          necessitatibus eum fuga voluptas quas, maiores quod quaerat placeat
          hic unde labore suscipit delectus in at sit tempora et a iusto rerum
          dolore dolorem ipsum vel, modi sint. Atque, tempore omnis? Quae beatae
          doloribus rerum nulla aliquam itaque ipsam nisi autem.
        </p>
      </div>
    </div>
  );
};
export default SinglePost;
