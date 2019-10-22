/**
 * # Author: om018 #
 */
package com.mi4stw.astrospaceestate.deprecated;

import com.mi4stw.astrospaceestate.deprecated.Planet;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "*")
public interface PlanetRepositoryOld extends MongoRepository<Planet, String> {

    Planet findBySimpleName(String simpleName);

    List<Planet> findAll();

    List<Planet> findAllByAvailableIsTrue(boolean available);

    Planet findByPlanetId(int planetId);



}