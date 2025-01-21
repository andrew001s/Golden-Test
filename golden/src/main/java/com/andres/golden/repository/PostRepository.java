package com.andres.golden.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.andres.golden.models.Posts;


public interface PostRepository extends MongoRepository<Posts, String> {
    Posts findByUsername(String username);
}
