/**
 * # Author: om018 #
 */
package com.mi4stw.astrospaceestate.repositories;

import com.mi4stw.astrospaceestate.models.Page;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Repository
@CrossOrigin(origins = "*")
public interface PageRepository extends MongoRepository<Page, String> {

    Page findByPageId(int pageId);

    List<Page> findAll();



}
