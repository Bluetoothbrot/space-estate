/**
 * # Author: mk303, mk308, om018 #
 */

package com.mi4stw.astrospaceestate.deprecated;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class PlanetOld {

    @Id
    private ObjectId _id;

    private String name;
    private String description;
    private long total_size;
    private long price_km2;
    private long sold_size_km2;
    private String image;

    private boolean available;

    // Constructors
    public PlanetOld() {
    }

    public PlanetOld(ObjectId _id, String name, String description, long total_size, long price_km2,
                     long sold_size_km2, String image, boolean available) {

        this._id = _id;

        this.name = name;
        this.description = description;
        this.total_size = total_size;
        this.price_km2 = price_km2;
        this.sold_size_km2 = sold_size_km2;
        this.image = image;
        this.available = available;
    }

    // ObjectId needs to be converted to string
    public String get_id() {
        return _id.toHexString();
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public String getSize() {
        return Long.toString(total_size);
    }

    public void setSize(long size) {
        this.total_size = size;
    }


    public String getPrice() {
        return Long.toString(price_km2);
    }

    public void setPrice(long price) {
        this.price_km2 = price;
    }


    public String getSoldSize() {
        return Long.toString(sold_size_km2);
    }

    public void setSoldSize(long soldSize) {
        this.price_km2 = soldSize;
    }


    public String getImage() {
        return image;
    }

    public void setImage(String imagePath) {
        this.image = imagePath;
    }


    public String getAvailable() {
        return Boolean.toString(available);
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    @Override
    public String toString() {
        return "PlanetOld{" +
                "_id=" + _id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", total_size=" + total_size +
                ", price_km2=" + price_km2 +
                ", sold_size_km2=" + sold_size_km2 +
                ", image='" + image + '\'' +
                ", available=" + available +
                '}';
    }
}
