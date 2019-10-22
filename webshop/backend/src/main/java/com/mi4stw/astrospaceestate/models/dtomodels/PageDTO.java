/**
 * # Author: om018 #
 */
package com.mi4stw.astrospaceestate.models.dtomodels;

import com.mi4stw.astrospaceestate.models.abstractmodels.AbstractPage;

import java.util.HashMap;

public class PageDTO extends AbstractPage {

    HashMap<String, String> texts;

    public PageDTO() {
    }

    public PageDTO(int pageId, String path, HashMap<String, String> texts) {
        super(pageId, path);
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
        return "PageDTO{" +
                "texts=" + texts
                + super.toString();
    }
}
