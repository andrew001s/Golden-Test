package com.andres.golden.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.andres.golden.models.Posts;


public interface PostRepository extends MongoRepository<Posts, String> {
    @SuppressWarnings("null")
    List<Posts> findAll();
    @SuppressWarnings("null")
    Optional<Posts> findById(String id);
    @Query("{'text': {$regex: ?0, $options: 'i'}}")    
    List<Posts> findByTextIgnoreCase(String text);
}
