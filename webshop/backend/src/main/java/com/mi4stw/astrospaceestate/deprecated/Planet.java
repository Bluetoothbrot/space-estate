/**
 * # Author: om018, mk303, mk308 #
 */

package com.mi4stw.astrospaceestate.deprecated;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

import java.util.HashMap;

public class Planet {

    private String simpleName;
    private int planetId;

    private HashMap<String,HashMap<String,String>> languages;

    private long totalSize;
    private long priceSquareKm;
    private long soldSizeSquareKm;
    private String image;
    private boolean available;

    public Planet(String simpleName, int planetId, HashMap<String, HashMap<String, String>> languages, long totalSize, long priceSquareKm, long soldSizeSquareKm, String image, boolean available) {
        this.simpleName = simpleName;
        this.planetId = planetId;
        this.languages = languages;
        this.totalSize = totalSize;
        this.priceSquareKm = priceSquareKm;
        this.soldSizeSquareKm = soldSizeSquareKm;
        this.image = image;
        this.available = available;
    }

    public String getSimpleName() {
        return simpleName;
    }

    public void setSimpleName(String simpleName) {
        this.simpleName = simpleName;
    }

    public int getPlanetId() {
        return planetId;
    }

    public void setPlanetId(int planetId) {
        this.planetId = planetId;
    }

    public HashMap<String, HashMap<String, String>> getLanguages() {
        return languages;
    }

    public void setLanguages(HashMap<String, HashMap<String, String>> languages) {
        this.languages = languages;
    }

    public long getTotalSize() {
        return totalSize;
    }

    public void setTotalSize(long totalSize) {
        this.totalSize = totalSize;
    }

    public long getPriceSquareKm() {
        return priceSquareKm;
    }

    public void setPriceSquareKm(long priceSquareKm) {
        this.priceSquareKm = priceSquareKm;
    }

    public long getSoldSizeSquareKm() {
        return soldSizeSquareKm;
    }

    public void setSoldSizeSquareKm(long soldSizeSquareKm) {
        this.soldSizeSquareKm = soldSizeSquareKm;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }



    @Override
    public String toString() {
        return "PlanetOld{" +
                ", simpleName='" + simpleName + '\'' +
                ", planetId=" + planetId +
                ", languages=" + languages +
                ", totalSize=" + totalSize +
                ", priceSquareKm=" + priceSquareKm +
                ", soldSizeSquareKm=" + soldSizeSquareKm +
                ", image='" + image + '\'' +
                ", available=" + available +
                '}';
    }
}
