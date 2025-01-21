'use client'
import React, { useEffect, useState } from 'react'
import Card from './common/Card'
import { getPostByText, getPosts } from '../api/post'
import InputSearch from './common/InputSearch'

const Posts = () => {
  interface Post {
    text: string;
    date: string;
    username: string;
    likes: number;
    comments: number;
    shares: number;
    media: string;
  }
  
  const [posts, setPosts] = useState<Post[]>([])
  const [search, setSearch] = useState<string>('')
  const [page, setPage] = useState<number>(0)
  useEffect(() => {
    const fetchPosts = async () => {
     if (!search || search === '') {
      const response = await getPosts(page,4);
      const data = await response.content;
      console.log(data);
      setPosts(data);
     }
     else{
        const response = await getPostByText(search);
        const data = await response.content;
        setPosts(data);
     
     }
    }
    fetchPosts();
  }, [search])

  const handleSearch = (value: string) => {
    setSearch(value);
  }


  
  return (
    <div className='space-y-4'>
        <InputSearch onSearch={handleSearch}/>
        
        {posts.map((post, index) => (
          <Card 
            key={index}
            text={post.text} 
            date={post.date} 
            author={post.username} 
            likes={post.likes} 
            comments={post.comments} 
            shares={post.shares} 
            image={post.media}  
          />
        ))}
    </div>
  )
}

export default Posts

