package com.andres.golden.repository;

import java.util.List;

import com.andres.golden.models.Posts;

public interface CustomPostRepository {
 List<Posts> findByText(String text);
}
