/**
 * # Author: om018 #
 */

package com.mi4stw.astrospaceestate.models;

import com.mi4stw.astrospaceestate.models.abstractmodels.AbstractPlanet;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.HashMap;

@Document(collection = "planets")

public class Planet extends AbstractPlanet implements Serializable {

    private HashMap<String, HashMap<String, String>> languages;

    public Planet(String simpleName, HashMap<String, HashMap<String, String>> languages, long totalSize, double priceSquareKm, long soldSizeSquareKm, String image) {
        super(simpleName, totalSize, priceSquareKm, soldSizeSquareKm, image);
        this.languages = languages;
    }

    public HashMap<String, HashMap<String, String>> getLanguages() {
        return languages;
    }

    public void setLanguages(HashMap<String, HashMap<String, String>> languages) {
        this.languages = languages;
    }

    @Override
    public String toString() {
        return "Planet{"
                + "languages='" + languages
                + super.toString();
    }
}
