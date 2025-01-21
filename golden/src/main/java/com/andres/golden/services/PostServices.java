package com.andres.golden.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.andres.golden.models.Posts;
import com.andres.golden.repository.PostRepository;

@Service
public class PostServices {
    @Autowired
    private PostRepository postRepository;
    

    public Page<Posts> GetAll(int page, int size){
        Pageable pageable = PageRequest.of(page,size);
        return postRepository.findAll(pageable);
    }
    public Page<Posts> GetByText(String text, int page, int size){
        Pageable pageable = PageRequest.of(page, size);
        return postRepository.findByTextIgnoreCase(text, pageable);
    }

    public Optional<Posts> GetById(String id){
        return postRepository.findById(id);
    }
}
