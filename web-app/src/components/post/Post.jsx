import './post.css';

export default function Post() {
  return (
  <div className="post">
     <img className="postImg" src="https://source.unsplash.com/400x400/?nature" alt="" />
     
    <div className="postInfo">
         <div className="postCats">
             <span className="postCat">Music</span>
             <span className="postCat">Life</span>
         </div>
        
         <span className="postTitle">
             Lorem ipsum dolor sit amet.
         </span>
         <hr />
         <span className="postDate">1 hour ago</span>
     </div>
     <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique facilis rerum ab dolorum odio, totam necessitatibus, accusamus beatae optio natus ducimus aspernatur laboriosam expedita, molestiae saepe eum provident nesciunt eaque!
     adipisicing elit. Similique facilis rerum ab dolorum odio, totam necessitatibus, accusamus beatae optio natus ducimus aspernatur laboriosam expedita, molestiae saepe eum provident nesciunt eaque!
     adipisicing elit. Similique facilis rerum ab dolorum odio, totam necessitatibus, accusamus beatae optio natus ducimus aspernatur laboriosam expedita, molestiae saepe eum provident nesciunt eaque!</p>
 
  </div>
  )
}
