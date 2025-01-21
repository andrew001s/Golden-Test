'use client'
import React, { useEffect, useState } from 'react'
import Card from '../components/common/Card'
import { getPostByText, getPosts } from '../api/post'
import InputSearch from '../components/common/InputSearch'
import Link from 'next/link'
import Pagination from '../components/common/Pagination'

const Posts = () => {
  interface Post {
    id: string;
    text: string;
    date: string;
    username: string;
    likes: number;
    comments: number;
    shares: number;
    media: string;
  }
  
  const [posts, setPosts] = useState<Post[]>([])
  const [pagination, setPagination] = useState({
    page: 0,
    pageSize: 4,
    total: 0
  })
  const [search, setSearch] = useState<string>('')
  const [page, setPage] = useState<number>(0)

  useEffect(() => {
    const fetchPosts = async () => {
     if (!search || search === '') {
      const response = await getPosts(page,4);
      const data = await response.content;
      console.log(data);
      setPagination({
        page: response.pageable.pageNumber,
        pageSize: response.pageable.pageSize,
        total: response.totalElements
      })
      setPosts(data);
     }
     else{
        const response = await getPostByText(search);
        const data = await response.content;
        setPosts(data);
     
     }
    }
    fetchPosts();
  }, [search, page])

  const handleSearch = (value: string) => {
    setSearch(value);
  }



  
  return (
    <div className='space-y-4'>
        <InputSearch onSearch={handleSearch}/>
        
        {posts.map((post, index) => (
        <Link href={`/pages/${post.id}`} key={index}>
          <Card 
            text={post.text} 
            date={post.date} 
            author={post.username} 
            likes={post.likes} 
            comments={post.comments} 
            shares={post.shares} 
            image={post.media}      
          />
        </Link>
        ))
        }
      <Pagination page={page} pageSize={4} total={posts.length} onPageChange={setPage} />
    </div>
  )
}

export default Posts

