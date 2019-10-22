/**
 * # Author: om018 #
 */

package com.mi4stw.astrospaceestate.repositories;

import com.mi4stw.astrospaceestate.models.Order;
import org.aspectj.weaver.ast.Or;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.UUID;

@Repository
@CrossOrigin(origins = "*")
public interface OrderRepository extends MongoRepository<Order, String> {

    List<Order> findOrdersByUserId(UUID userId);

    List<Order> findAll();

    @Override
    Order insert(Order order);
}
