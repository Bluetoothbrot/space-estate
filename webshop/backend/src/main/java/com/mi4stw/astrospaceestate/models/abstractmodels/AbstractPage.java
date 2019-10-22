/**
 * # Author: om018 #
 */
package com.mi4stw.astrospaceestate.models.abstractmodels;

public abstract class AbstractPage {

    private int pageId;
    private String path;

    public AbstractPage() {
    }

    public AbstractPage(int pageId, String path) {
        this.pageId = pageId;
        this.path = path;
    }

    public int getPageId() {
        return pageId;
    }

    public void setPageId(int pageId) {
        this.pageId = pageId;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    @Override
    public String toString() {
        return "pageId=" + pageId +
                ", path='" + path + '\'' +
                '}';
    }
}
