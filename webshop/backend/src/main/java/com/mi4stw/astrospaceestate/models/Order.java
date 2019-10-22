//Author: mk308, om018

package com.mi4stw.astrospaceestate.models;

import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.List;
import java.util.UUID;

@Document(collection = "orders")
public class Order implements Serializable {

    private UUID userId;
    private UUID orderId;
    private String currency;
    private double conversionRate;
    private double totalPrice;
    private List<OrderItem> orderItemList;

    public Order() {
    }

    public Order(UUID userId, UUID orderId, String currency, double conversionRate, List<OrderItem> orderItemList, double totalPrice) {
        this.userId = userId;
        this.orderId = orderId;
        this.conversionRate = conversionRate;
        this.totalPrice = totalPrice;
        this.orderItemList = orderItemList;
        this.currency = currency;
    }

    public UUID getOrderId() {
        return orderId;
    }

    public void setOrderId(UUID orderId) {
        this.orderId = orderId;
    }

    public double getConversionRate() {
        return conversionRate;
    }

    public void setConversionRate(double conversionRate) {
        this.conversionRate = conversionRate;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    public List<OrderItem> getOrderItemList() {
        return orderItemList;
    }

    public void setOrderItemList(List<OrderItem> orderItemList) {
        this.orderItemList = orderItemList;
    }

    @Override
    public String toString() {
        return "Order{" +
                "userId=" + userId +
                ", orderId=" + orderId +
                ", currency='" + currency + '\'' +
                ", conversionRate=" + conversionRate +
                ", totalPrice=" + totalPrice +
                ", orderItemList=" + orderItemList +
                '}';
    }
}
