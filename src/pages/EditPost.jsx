import React, {useState, useEffect} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from '../appwrite/config'
import {useParams, useNavigate} from 'react-router-dom'
import {useSelector} from "react-redux"

function EditPost() {
      // user will click on edit and goes to a page, so slug will be available in url. To get any value from url we use useParams
      const [post, setPost] = useState(null)
      const {slug} = useParams()
      const navigate = useNavigate()
      const {posts} = useSelector((state) => state.post)

      useEffect(() => {
           if(slug) {
            const singlePost = posts.find((onePost) => onePost.$id === slug)
            setPost(singlePost)
           }
           else {
            navigate('/')
           }
      }, [slug, navigate, posts])

      return post ? (
        <div>
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
      ) : null
}

export default EditPost