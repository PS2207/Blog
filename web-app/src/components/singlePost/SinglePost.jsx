import './singlePost.css';

export default function SinglePost() {
  return (
  <div className="singlePost">
    
          <div className="singlePostWrapper">
              <img src="https://source.unsplash.com/400/life" alt="" className="singlePostImg" />
          <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
           <div className="singlePostEdit">
            <i className=" singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon fas fa-trash"></i>
           </div>
          </h1>

          <div className="singlePostInfo">
              <span className="singlePostAuthor">
                  Author: <b>William</b>
               </span>
               <span className="singlePostDate">1 hour ago</span>
          </div>
          <p className="singlePostDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus adipisci facere vitae dolorem doloremque quam dolor error eum esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sit nihil blanditiis minus iure harum sequi, veritatis ea voluptatum temporibus eveniet reiciendis obcaecati aut facere dolore iste voluptatibus accusamus aperiam sunt commodi dolorem maxime earum eaque. Expedita libero vero mollitia?</p>
          </div>
     
  </div>
  )
}
