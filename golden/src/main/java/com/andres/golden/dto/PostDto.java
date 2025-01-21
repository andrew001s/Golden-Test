package com.andres.golden.dto;

public class PostDto {
public String id;
public String username;
public String text;
public String created_at;
public int likes;
public String media;  
public int shares;
public int comments;



public PostDto(String id, String username, String text, String created_at, int likes, String media, int shares,
        int comments) {
    this.id = id;
    this.username = username;
    this.text = text;
    this.created_at = created_at;
    this.likes = likes;
    this.media = media;
    this.shares = shares;
    this.comments = comments;
}
public String getId() {
    return id;
}
public void setId(String id) {
    this.id = id;
}
public String getUsername() {
    return username;
}
public void setUsername(String username) {
    this.username = username;
}
public String getText() {
    return text;
}
public void setText(String text) {
    this.text = text;
}
public String getCreated_at() {
    return created_at;
}
public void setCreated_at(String created_at) {
    this.created_at = created_at;
}
public int getLikes() {
    return likes;
}
public void setLikes(int likes) {
    this.likes = likes;
}
public String getMedia() {
    return media;
}
public void setMedia(String media) {
    this.media = media;
}
public int getShares() {
    return shares;
}
public void setShares(int shares) {
    this.shares = shares;
}
public int getComments() {
    return comments;
}
public void setComments(int comments) {
    this.comments = comments;
}

}
