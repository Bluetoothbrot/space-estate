/**
 * # Author: om018 #
 */

package com.mi4stw.astrospaceestate.mappingcontrollers;

import com.mi4stw.astrospaceestate.helpers.SessionHandling;
import com.mi4stw.astrospaceestate.models.Cart;
import com.mi4stw.astrospaceestate.models.Order;
import com.mi4stw.astrospaceestate.models.OrderItem;
import com.mi4stw.astrospaceestate.models.Planet;
import com.mi4stw.astrospaceestate.models.modelmapper.ItemMapper;
import com.mi4stw.astrospaceestate.repositories.CartRepository;
import com.mi4stw.astrospaceestate.repositories.OrderRepository;
import com.mi4stw.astrospaceestate.repositories.PlanetRepository;
import com.mi4stw.astrospaceestate.repositories.UserRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import static com.mi4stw.astrospaceestate.helpers.AstroConstants.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/order")
public class OrderController {

    private Logger logger = LogManager.getLogger(OrderController.class);

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private PlanetRepository planetRepository;
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SessionHandling sessionHandling;


    @PostMapping("")
    @CrossOrigin(origins = "*")
    public boolean completeOrder(HttpSession httpSession) {

        final HttpSession httpSession1 = sessionHandling.handleSessionAttributes(httpSession);

        UUID userToken = null;
        try {
            userToken = UUID.fromString(httpSession1.getAttribute(USER_TOKEN_ATTR).toString());
        } catch (Exception e) {
            logger.error(e);
        }
        UUID userId = null;
        Cart cart = null;

        if (userToken != null) {
            userId = userRepository.findByUserToken(userToken).getUserId();
            cart = cartRepository.findByJsessionToken(httpSession.getId());
        }

        if (cart != null && userId != null) {

            Order order = new Order();

            //List<OrderItem> orderItemList = order.getOrderItemList();
            order.setCurrency(httpSession.getAttribute(SESSION_CURRENCY_ATTR).toString());
            order.setConversionRate(Double.valueOf(httpSession.getAttribute(SESSION_CONVERSION_ATTR).toString()));

            List<OrderItem> orderItemList = new ArrayList<>();
            cart.getCartItemList().stream().forEach(cartItem -> orderItemList.add(ItemMapper.mapCartItemToOrderItem(cartItem, httpSession1)));

            double priceCache = 0;


            // keep consistency in db, if chosen amount is not available or amount is smaller than 1 km2
            for (OrderItem orderItem : orderItemList) {
                Planet planet = planetRepository.findBySimpleName(orderItem.getSimpleName());

                long size = orderItem.getSizeSquareKm();
                if (size > planet.getTotalSize() - planet.getSoldSizeSquareKm() || size < 1) {
                    return false;
                }
            }

            for (OrderItem orderItem : orderItemList) {
                Planet planet = planetRepository.findBySimpleName(orderItem.getSimpleName());

                double convertedPrice = planet.getPriceSquareKm() * order.getConversionRate();

                orderItem.setPriceSquareKm(convertedPrice);
                orderItem.setAddedTime(new Date().toString());
                orderItem.setTotalPrice(convertedPrice * orderItem.getSizeSquareKm());
                priceCache += orderItem.getTotalPrice();

                long size = orderItem.getSizeSquareKm();


                planet.setSoldSizeSquareKm(planet.getSoldSizeSquareKm() + size);
                planetRepository.deleteBySimpleName(planet.getSimpleName());
                planetRepository.save(planet);
            }

            order.setTotalPrice(priceCache);
            order.setOrderItemList(orderItemList);
            order.setOrderId(UUID.randomUUID());

            // get userId via userToken in httpSession and write into Order
            order.setUserId(userId);
            Order resultOrder = orderRepository.insert(order);

            cartRepository.removeCartByJsessionToken(httpSession.getId());

            return true;

        } else {
            return false;
        }
    }

    @GetMapping("")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Order> getOrdersByUserToken(HttpSession httpSession) {
        UUID userToken = UUID.fromString(httpSession.getAttribute(USER_TOKEN_ATTR).toString());
        UUID userId = userRepository.findByUserToken(userToken).getUserId();
        List<Order> orderList = orderRepository.findOrdersByUserId(userId);
        logger.trace(LOGGER_REQUEST_RESOURCE + orderList.toString());
        return orderList;
    }

}




































