//Author: mk308, om018

package com.mi4stw.astrospaceestate.models;

import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.UUID;

@Document(collection = "users")
public class User implements Serializable {

    private String name;
    private String email; //TODO: type Email?
    private String password;
    private UUID userId;
    private UUID userToken;

    public User() {
    }

    public User(String name, String email, String password, UUID userId, UUID userToken) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.userId = userId;
        this.userToken = userToken;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public UUID getUserToken() {
        return userToken;
    }

    public void setUserToken(UUID userToken) {
        this.userToken = userToken;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String pw) {
        this.password = pw;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", userId=" + userId +
                ", userToken=" + userToken +
                '}';
    }
}
