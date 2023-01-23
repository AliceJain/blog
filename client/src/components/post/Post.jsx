import "./post.css"

export default function Post() {
  return (
    <div className="post"> 
     <img className="postImg" src="/images/post.jpg" alt="" />
     <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
        <hr />
        <span className="postDate">1 hour ago</span>
     </div>
     <p className="postDesc">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.Possimus id magnam facere 
      praesentium ducimus adipisci voluptatum ex architecto,autem sapiente, explicabo
      suscipit dignissimos asperiores modi tenetur fugiat deseruntqui molestiae!
      </p>
    </div>

  )
}
