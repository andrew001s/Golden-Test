package com.andres.golden.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.andres.golden.models.Posts;
import com.andres.golden.repository.PostRepository;

@Service
public class PostServices {
    @Autowired
    private PostRepository postRepository;

    public List<Posts> GetAll(){
        return postRepository.findAll();
    }
}
