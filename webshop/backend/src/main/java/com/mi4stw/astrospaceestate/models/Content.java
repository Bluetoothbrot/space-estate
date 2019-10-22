/**
 * # Author: om018 #
 */

package com.mi4stw.astrospaceestate.models;


import com.mi4stw.astrospaceestate.models.abstractmodels.AbstractContent;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.HashMap;

@Document(collection = "contents")
public class Content extends AbstractContent implements Serializable{

    private HashMap<String,HashMap<String,String>> languages;

    public HashMap<String, HashMap<String, String>> getLanguages() {
        return languages;
    }

    public void setLanguages(HashMap<String, HashMap<String, String>> languages) {
        this.languages = languages;
    }

    @Override
    public String toString() {
        return "Content{" +
                "languages=" + languages +
                super.toString();
    }
}


































