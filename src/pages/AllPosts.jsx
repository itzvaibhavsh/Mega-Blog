import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components/index'
import appwriteService from "../appwrite/config";
import {useSelector} from "react-redux"

function AllPosts() {
// when we write the inside snippet of useEffect outside, then component is mounting, API call happens simultaneously, state (posts)
// changes, component re-renders, API call again, that's why lag. Using useEffect, we tell react, first show UI then do
// API calls(only once) that's why fast
    const {posts} = useSelector(state => state.post)
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts