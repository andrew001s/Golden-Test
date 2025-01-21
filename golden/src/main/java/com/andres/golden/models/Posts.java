package com.andres.golden.models;


public class Posts {

    public String id;
    public String username;
    public String text;
    public String created_at;
    public int likes;
    public String media;
    public int shares;
    public int comments; 
    public int audiencia;
    public String gen;
    public String location;
    public String sent_prob;

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
    public String getMedia() {
        return media;
    }
    public void setMedia(String media) {
        this.media = media;
    }
    public int getAudiencia() {
        return audiencia;
    }
    public void setAudiencia(int audiencia) {
        this.audiencia = audiencia;
    }
    public String getGen() {
        return gen;
    }
    public void setGen(String gen) {
        this.gen = gen;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public String getSent_prob() {
        return sent_prob;
    }
    public void setSent_prob(String sent_prob) {
        this.sent_prob = sent_prob;
    }

    
}
