/**
 * # Author: om018 #
 */
package com.mi4stw.astrospaceestate.repositories;

import com.mi4stw.astrospaceestate.models.Content;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;


import java.util.List;

@Repository
@CrossOrigin(origins = "*")
public interface ContentRepository extends MongoRepository<Content, String> {

    Content findByContentId(int contentId);

    List<Content> findAll();



}