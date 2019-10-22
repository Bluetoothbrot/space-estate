package com.mi4stw.astrospaceestate.deprecated;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "planetLocale")
public class PlanetLocale {

    @Id
    private ObjectId _id;

    private String localeName;
    private String localeDescription;
    private int planetId;
    private String langCode;

    public PlanetLocale(ObjectId _id, String localeName, String localeDescription, int planetId, String langCode) {
        this._id = _id;
        this.localeName = localeName;
        this.localeDescription = localeDescription;
        this.planetId = planetId;
        this.langCode = langCode;
    }

    public ObjectId get_id() {
        return _id;
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public String getName() {
        return localeName;
    }

    public void setName(String localeName) {
        this.localeName = localeName;
    }

    public String getDescription() {
        return localeDescription;
    }

    public void setDescription(String localeDescription) {
        this.localeDescription = localeDescription;
    }

    public int getPlanetId() {
        return planetId;
    }

    public void setPlanetId(int planetId) {
        this.planetId = planetId;
    }

    public String getLangCode() {
        return langCode;
    }

    public void setLangCode(String langCode) {
        this.langCode = langCode;
    }

    @Override
    public String toString() {
        return "PlanetLocale{" +
                "_id=" + _id +
                ", localeName='" + localeName + '\'' +
                ", localeDescription='" + localeDescription + '\'' +
                ", planetId=" + planetId +
                ", langCode='" + langCode + '\'' +
                '}';
    }
}
