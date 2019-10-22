/**
 * # Author: mk308, om018 #
 */

package com.mi4stw.astrospaceestate.deprecated;

import com.mongodb.BasicDBObject;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

import java.util.ResourceBundle;

public class OpenConnection {

    private ResourceBundle resourceBundle = ResourceBundle.getBundle("application");

    private MongoClient mongoClient = new MongoClient(new MongoClientURI("mongodb://localhost:27017"));
    private MongoDatabase database = mongoClient.getDatabase(resourceBundle.getString("spring.data.mongodb.database"));
    public MongoCollection<Document> collection;
    private static BasicDBObject basicDBObject;

    public OpenConnection(String resourceBundleKeyName){
        collection = database.getCollection(resourceBundle.getString(resourceBundleKeyName));
    }

    public MongoClient getMongoClient() {
        return mongoClient;
    }

    public static BasicDBObject createEmptyQueryObject() {
        basicDBObject = new BasicDBObject();
        return basicDBObject;
    }

    public void closeConn(){
        mongoClient.close();
    }
}
