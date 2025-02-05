// hooks  params  use 好用
import { useParams } from "react-router-dom"

const PostShow = () => {
  const { postId} = useParams()
  console.log(postId);
  useEffect(()=>{
    document.title = `文章id-${postId}`
  },[])
    return (
    <div>
      <h1>PostShow</h1>
    </div>
  )
}

export default PostShow