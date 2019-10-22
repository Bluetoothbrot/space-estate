//Author: mk308, om018

package com.mi4stw.astrospaceestate.models;

import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.List;

@Document(collection = "carts")
public class Cart implements Serializable {

    private String jsessionToken;
    private String creationTime;
    private String modificationTime;
    private List<CartItem> cartItemList;

    public Cart() {
    }

    public Cart(String jsessionToken, String creationTime, String modificationTime, List<CartItem> cartItemList) {
        this.jsessionToken = jsessionToken;
        this.creationTime = creationTime;
        this.modificationTime = modificationTime;
        this.cartItemList = cartItemList;
    }

    public String getJsessionToken() {
        return jsessionToken;
    }

    public void setJsessionToken(String jsessionToken) {
        this.jsessionToken = jsessionToken;
    }

    public String getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(String creationTime) {
        this.creationTime = creationTime;
    }

    public String getModificationTime() {
        return modificationTime;
    }

    public void setModificationTime(String modificationTime) {
        this.modificationTime = modificationTime;
    }

    public List<CartItem> getCartItemList() {
        return cartItemList;
    }

    public void setCartItemList(List<CartItem> cartItemList) {
        this.cartItemList = cartItemList;
    }

    @Override
    public String toString() {
        return "Cart{" +
                "jsessionToken='" + jsessionToken + '\'' +
                ", creationTime='" + creationTime + '\'' +
                ", modificationTime='" + modificationTime + '\'' +
                ", cartItemList=" + cartItemList +
                '}';
    }
}
