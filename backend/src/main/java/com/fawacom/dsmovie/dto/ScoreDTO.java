package com.fawacom.dsmovie.dto;

public class ScoreDTO {

    private Long movideId;
    private String email;
    private Double score;

    public ScoreDTO() {

    }

    public Long getMovideId() {
        return movideId;
    }

    public void setMovideId(Long movideId) {
        this.movideId = movideId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }
}
