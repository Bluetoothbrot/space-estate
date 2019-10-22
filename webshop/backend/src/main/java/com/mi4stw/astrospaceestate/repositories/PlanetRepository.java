/**
 * # Author:  #
 */
package com.mi4stw.astrospaceestate.repositories;

import com.mi4stw.astrospaceestate.models.Planet;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Repository
@CrossOrigin(origins = "*")
public interface PlanetRepository extends MongoRepository<Planet, String> {

    Planet findBySimpleName(String simpleName);

    List<Planet> findAll();

    void deleteBySimpleName(String simpleName);


}