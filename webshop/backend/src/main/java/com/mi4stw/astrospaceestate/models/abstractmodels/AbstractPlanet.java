/**
 * # Author: om018 #
 */

package com.mi4stw.astrospaceestate.models.abstractmodels;

public abstract class AbstractPlanet {

    private String simpleName;
    private long totalSize;
    private double priceSquareKm;
    private long soldSizeSquareKm;
    private String image;

    public AbstractPlanet() {
    }

    public AbstractPlanet(String simpleName, long totalSize, double priceSquareKm, long soldSizeSquareKm, String image) {
        this.simpleName = simpleName;
        this.totalSize = totalSize;
        this.priceSquareKm = priceSquareKm;
        this.soldSizeSquareKm = soldSizeSquareKm;
        this.image = image;
    }

    public String getSimpleName() {
        return simpleName;
    }

    public void setSimpleName(String simpleName) {
        this.simpleName = simpleName;
    }

    public long getTotalSize() {
        return totalSize;
    }

    public void setTotalSize(long totalSize) {
        this.totalSize = totalSize;
    }

    public double getPriceSquareKm() {
        return priceSquareKm;
    }

    public void setPriceSquareKm(double priceSquareKm) {
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

    @Override
    public String toString() {
        return ", simpleName='" + simpleName + '\'' +
                ", totalSize=" + totalSize +
                ", priceSquareKm=" + priceSquareKm +
                ", soldSizeSquareKm=" + soldSizeSquareKm +
                ", image='" + image + '\'' +
                '}';
    }
}


