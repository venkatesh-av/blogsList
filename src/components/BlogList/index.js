import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div className="container-blog">
      {blogsList.map(eachItem => (
        <BlogItem eachItem={eachItem} key={eachItem.id} />
      ))}
    </div>
  )
}

export default BlogList
