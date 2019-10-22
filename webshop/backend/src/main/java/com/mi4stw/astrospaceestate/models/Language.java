/**
 * # Author: om018 #
 */

package com.mi4stw.astrospaceestate.models;

import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Document(collection = "languages")
public class Language implements Serializable {

    private String langCode;

    //Constructors
    public Language() {
    }

    public Language(String langCode) {
        this.langCode = langCode;
    }

    public String getLangCode() {
        return langCode;
    }

    public void setLangCode(String langCode) {
        this.langCode = langCode;
    }

    @Override
    public String toString() {
        return "Language{" +
                ", langCode='" + langCode + '\'' +
                '}';
    }
}
