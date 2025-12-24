import React, {useState, useEffect} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from '../appwrite/config'
import {useParams, useNavigate} from 'react-router-dom'

function EditPost() {
      const [post, setPosts] = useState(null)
      // user will click on edit and goes to a page, so slug will be available in url. To get any value from url we use useParams
      const {slug} = useParams()
      const navigate = useNavigate()

      useEffect(() => {
           if(slug) {
            appwriteService.getPost(slug).then((post) => {
               if(post) {
                setPosts(post)
               }
            })
           }
           else {
            navigate('/')
           }
      }, [slug, navigate])

      return post ? (
        <div>
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
      ) : null
}

export default EditPost