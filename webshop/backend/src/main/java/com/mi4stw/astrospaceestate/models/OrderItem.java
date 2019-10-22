/**
 * # Author: om018 #
 */
package com.mi4stw.astrospaceestate.models;

import com.mi4stw.astrospaceestate.models.abstractmodels.AbstractItem;

import java.io.Serializable;

public class OrderItem extends AbstractItem implements Serializable {

    private double priceSquareKm;
    private double totalPrice;

    public OrderItem() {
    }

    public OrderItem(String addedTime, String simpleName, int sizeSquareKm, double priceSquareKm, double totalPrice, String currency) {
        super(addedTime, simpleName, sizeSquareKm);
        this.priceSquareKm = priceSquareKm;
        this.totalPrice = totalPrice;
    }

    public double getPriceSquareKm() {
        return priceSquareKm;
    }

    public void setPriceSquareKm(double priceSquareKm) {
        this.priceSquareKm = priceSquareKm;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }


    @Override
    public String toString() {
        return "OrderItem{" +
                "priceSquareKm=" + priceSquareKm +
                ", totalPrice=" + totalPrice
                + super.toString();
    }
}
