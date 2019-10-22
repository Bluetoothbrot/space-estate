/**
 * # Author: om018 #
 */
package com.mi4stw.astrospaceestate.repositories;

import com.mi4stw.astrospaceestate.models.Cart;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;


import java.util.List;

@Repository
@CrossOrigin(origins = "*")
public interface CartRepository extends MongoRepository<Cart, String> {

    @Override
    Cart insert(Cart cart);

    Cart findByJsessionToken(String jsessionToken);

    List<Cart> findAll();

    void removeCartByJsessionToken(String jsessionToken);
}