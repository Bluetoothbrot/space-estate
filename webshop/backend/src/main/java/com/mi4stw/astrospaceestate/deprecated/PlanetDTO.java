/**
 * # Author: om018, mk303, mk308 #
 */

package com.mi4stw.astrospaceestate.deprecated;

import java.util.HashMap;

public class PlanetDTO {

    private String simpleName;
    private HashMap<String,String> texts;

    private long totalSize;
    private long priceSquareKm;
    private long soldSizeSquareKm;
    private String image;
    private boolean available;

    public PlanetDTO(){}

    public PlanetDTO(String simpleName, HashMap<String, String> texts, long totalSize, long priceSquareKm, long soldSizeSquareKm, String image, boolean available) {
        this.simpleName = simpleName;
        this.texts = texts;
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

    public HashMap<String, String> getTexts() {
        return texts;
    }

    public void setTexts(HashMap<String, String> texts) {
        this.texts = texts;
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
        return "PlanetDTO{" +
                "simpleName='" + simpleName + '\'' +
                ", texts=" + texts +
                ", totalSize=" + totalSize +
                ", priceSquareKm=" + priceSquareKm +
                ", soldSizeSquareKm=" + soldSizeSquareKm +
                ", image='" + image + '\'' +
                ", available=" + available +
                '}';
    }
}
