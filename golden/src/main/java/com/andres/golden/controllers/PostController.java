package com.andres.golden.controllers;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.andres.golden.models.Posts;
import com.andres.golden.services.PostServices;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/post")
public class PostController {
    @Autowired
    private PostServices postService;

    @GetMapping()
    public List<Posts> getAll() {
        return postService.GetAll();
    }
    
    @GetMapping("/search")
    public List<Posts> getByText(@RequestParam String q){ 
        return postService.GetByText(q);
    }

    @GetMapping("/{id}")
    public Optional<Posts> getById(@PathVariable String id){
        return postService.GetById(id);
    }


}
