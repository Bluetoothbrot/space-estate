/**
 * # Author: om018 #
 */
package com.mi4stw.astrospaceestate.models.abstractmodels;

import java.util.HashMap;

public abstract class AbstractContent {

    private int contentId;
    private String simpleName;
    private HashMap<String, String> images;

    public int getContentId() {
        return contentId;
    }

    public void setContentId(int contentId) {
        this.contentId = contentId;
    }

    public String getSimpleName() {
        return simpleName;
    }

    public void setSimpleName(String simpleName) {
        this.simpleName = simpleName;
    }

    public HashMap<String, String> getImages() {
        return images;
    }

    public void setImages(HashMap<String, String> images) {
        this.images = images;
    }

    @Override
    public String toString() {
        return ", contentId=" + contentId +
                ", simpleName='" + simpleName + '\'' +
                ", images=" + images +
                '}';
    }
}



































