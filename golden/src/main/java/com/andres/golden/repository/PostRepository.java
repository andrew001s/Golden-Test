package com.andres.golden.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.andres.golden.models.Posts;


public interface PostRepository extends MongoRepository<Posts, String> {
    @SuppressWarnings("null")
    Page<Posts> findAll(Pageable pageable);
    @SuppressWarnings("null")
    Optional<Posts> findById(String id);
    @Query("{'text': {$regex: ?0, $options: 'i'}}")    
    Page<Posts> findByTextIgnoreCase(String text,Pageable pageable);
}
