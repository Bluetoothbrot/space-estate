/**
 * # Author: mk308, om018 #
 */

package com.mi4stw.astrospaceestate.models;

import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Document(collection = "currencies")
public class Currency implements Serializable {

    private String code;
    private double value;

    public Currency() {
    }

    public Currency(String code, double value) {
        this.code = code;
        this.value = value;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "Currency{" +
                "code='" + code + '\'' +
                ", value=" + value +
                '}';
    }
}
