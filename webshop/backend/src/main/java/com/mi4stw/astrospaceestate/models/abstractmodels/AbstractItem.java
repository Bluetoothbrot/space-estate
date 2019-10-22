//Author: om018, mk308

package com.mi4stw.astrospaceestate.models.abstractmodels;

public abstract class AbstractItem {

    private String addedTime;
    private String simpleName;
    private long sizeSquareKm;

    public AbstractItem() {
    }


    public AbstractItem(String addedTime, String simpleName, long sizeSquareKm) {
        this.addedTime = addedTime;
        this.simpleName = simpleName;
        this.sizeSquareKm = sizeSquareKm;
    }

    public String getAddedTime() {
        return addedTime;
    }

    public void setAddedTime(String addedTime) {
        this.addedTime = addedTime;
    }

    public String getSimpleName() {
        return simpleName;
    }

    public void setSimpleName(String simpleName) {
        this.simpleName = simpleName;
    }

    public long getSizeSquareKm() {
        return sizeSquareKm;
    }

    public void setSizeSquareKm(long sizeSquareKm) {
        this.sizeSquareKm = sizeSquareKm;
    }

    @Override
    public String toString() {
        return "addedTime='" + addedTime + '\'' +
                ", simpleName='" + simpleName + '\'' +
                ", sizeSquareKm=" + sizeSquareKm +
                '}';
    }
}
