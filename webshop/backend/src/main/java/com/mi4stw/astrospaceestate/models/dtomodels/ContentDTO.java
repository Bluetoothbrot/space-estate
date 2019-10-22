package com.mi4stw.astrospaceestate.models.dtomodels;

import com.mi4stw.astrospaceestate.models.abstractmodels.AbstractContent;

import java.util.HashMap;

public class ContentDTO extends AbstractContent {

    private HashMap<String,String> texts;

    public ContentDTO(){}

    public ContentDTO(HashMap<String, String> texts) {
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
        return "ContentDTO{" +
                "texts=" + texts +
                super.toString();
    }
}
