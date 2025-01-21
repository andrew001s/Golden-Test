package com.andres.golden.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.andres.golden.dto.PostDto;
import com.andres.golden.models.Posts;
import com.andres.golden.services.PostServices;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/post")
public class PostController {
    @Autowired
    private PostServices postService;

    @GetMapping()
    public ResponseEntity<Page<PostDto>> getAll(
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "4") int size
    ) {
        Page<Posts> postsPage = postService.GetAll(page, size);
        Page<PostDto> postDtoPage = postsPage.map(post -> new PostDto(post.id,post.username,post.text,post.created_at,post.likes,post.media,post.shares,post.comments));
        return ResponseEntity.ok(postDtoPage);
    }
    
    @GetMapping("/search")
    public ResponseEntity<Page<PostDto>> getByText(
        @RequestParam String q,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "4") int size
        ){ 
        Page<Posts> postsPage = postService.GetByText(q, page, size);
        Page<PostDto> postDtoPage = postsPage.map(post -> new PostDto(post.id,post.username,post.text,post.created_at,post.likes,post.media,post.shares,post.comments));
        return ResponseEntity.ok(postDtoPage);
    }

    @GetMapping("/{id}")
    public Optional<Posts> getById(@PathVariable String id){
        return postService.GetById(id);
    }


}
