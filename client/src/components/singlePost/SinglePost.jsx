import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
        <img src="/images/singlePost.jpg" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">Lorem ipsum dolor sit
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
            <span classname="singlePostAuthor">Author: <b>Alice Jain</b></span>
            <span classname="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Praesentium labore magni debitis eius a laudantium voluptates explicabo, asperiores quam, 
            quia vel porro iure possimus temporibus aut esse, ratione adipisci excepturi.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Praesentium labore magni debitis eius a laudantium voluptates explicabo, asperiores quam, 
            quia vel porro iure possimus temporibus aut esse, ratione adipisci excepturi.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Praesentium labore magni debitis eius a laudantium voluptates explicabo, asperiores quam, 
            quia vel porro iure possimus temporibus aut esse, ratione adipisci excepturi.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Praesentium labore magni debitis eius a laudantium voluptates explicabo, asperiores quam, 
            quia vel porro iure possimus temporibus aut esse, ratione adipisci excepturi.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Praesentium labore magni debitis eius a laudantium voluptates explicabo, asperiores quam, 
            quia vel porro iure possimus temporibus aut esse, ratione adipisci excepturi.
        </p>
        </div>
    </div>
  )
}
