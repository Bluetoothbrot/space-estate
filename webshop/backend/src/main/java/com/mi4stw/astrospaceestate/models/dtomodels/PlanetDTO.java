/**
 * # Author: om018 #
 */

package com.mi4stw.astrospaceestate.models.dtomodels;

import com.mi4stw.astrospaceestate.models.abstractmodels.AbstractPlanet;

import java.util.HashMap;

public class PlanetDTO extends AbstractPlanet {
    private HashMap<String,String> texts;

    public PlanetDTO(){}

    public PlanetDTO(String simpleName, HashMap<String, String> texts, long totalSize, long priceSquareKm, long soldSizeSquareKm, String image) {
        super(simpleName,totalSize,priceSquareKm,soldSizeSquareKm,image);
        this.texts = texts;
    }

    public HashMap<String, String> getTexts() {
        return texts;
    }

    public void setTexts(HashMap<String, String> texts) {
        this.texts = texts;
    }

    @Override
    public String toString() {
        return "PlanetDTO{" +
                "texts=" + texts
                + super.toString();
    }
}
