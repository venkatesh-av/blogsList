import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  return (
    <div className="eachItem-des">
      <div className="top-section">
        <h1>{eachItem.title}</h1>
        <p>{eachItem.publishedDate}</p>
      </div>
      <p className="des">{eachItem.description}</p>
      <hr />
    </div>
  )
}
export default BlogItem
