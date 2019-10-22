/**
 * # Author: om018 #
 */
package com.mi4stw.astrospaceestate.repositories;

import com.mi4stw.astrospaceestate.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.UUID;

@Repository
@CrossOrigin(origins = "*")
public interface UserRepository extends MongoRepository<User, String> {

    User findByEmail(String email);

    User findByUserToken(UUID uuid);

    void deleteByUserId(UUID uuid);

    List<User> findAll();
}