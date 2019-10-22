/**
 * # Author: om018, mk308 #
 */

package com.mi4stw.astrospaceestate.models;

import com.mi4stw.astrospaceestate.models.abstractmodels.AbstractItem;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Document(collection = "items")
public class CartItem extends AbstractItem implements Serializable {

    private String modificationTime;

    public CartItem(){}

    public CartItem(String simpleName, int sizeSquareKm, String addedTime, String modificationTime) {
        super(addedTime, simpleName, sizeSquareKm);
        this.modificationTime = modificationTime;
    }

    public String getModificationTime() {
        return modificationTime;
    }

    public void setModificationTime(String modificationTime) {
        this.modificationTime = modificationTime;
    }

    @Override
    public String toString() {
        return "CartItem{" +
                "modificationTime='" + modificationTime + '\''
                + super.toString();
    }
}
