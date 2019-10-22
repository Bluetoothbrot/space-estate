/**
 * # Author: om018 #
 */
package com.mi4stw.astrospaceestate.models;

import com.mi4stw.astrospaceestate.models.abstractmodels.AbstractPage;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.HashMap;

@Document(collection = "pages")
public class Page extends AbstractPage implements Serializable{

    private HashMap<String, HashMap<String, String>> languages;

    public Page() {
    }

    public Page(int pageId, String path, HashMap<String, HashMap<String, String>> languages) {
        super(pageId, path);
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
        return "Page{" +
                "languages=" + languages
                + super.toString();
    }
}
