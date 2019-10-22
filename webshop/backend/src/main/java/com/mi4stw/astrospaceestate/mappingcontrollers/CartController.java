// Author: om018, mk308

package com.mi4stw.astrospaceestate.mappingcontrollers;

import com.mi4stw.astrospaceestate.helpers.SessionHandling;
import com.mi4stw.astrospaceestate.models.Cart;
import com.mi4stw.astrospaceestate.models.CartItem;
import com.mi4stw.astrospaceestate.models.Planet;
import com.mi4stw.astrospaceestate.repositories.CartRepository;
import com.mi4stw.astrospaceestate.repositories.PlanetRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import static com.mi4stw.astrospaceestate.helpers.AstroConstants.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/cart")
public class CartController {

    private Logger logger = LogManager.getLogger(CartController.class);

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private PlanetRepository planetRepository;

    @Autowired
    private SessionHandling sessionHandling;

    @PostMapping("")
    @CrossOrigin(origins = "*")
    public Cart createCartOrAddItem(@RequestBody CartItem cartItem, HttpSession httpSession) {

        // session validation for currency and language
        httpSession = sessionHandling.handleSessionAttributes(httpSession);

        String jsessionToken = httpSession.getId();
        Planet planet = planetRepository.findBySimpleName(cartItem.getSimpleName());

        if (planet != null) {

            //TODO: Planet to CartItem Mapper?

            cartItem.setAddedTime(new Date().toString());
            cartItem.setModificationTime(new Date().toString());

            Cart cart = cartRepository.findByJsessionToken(jsessionToken);

            if (cart == null) {
                List<CartItem> cartItemList = new ArrayList<>();
                cartItemList.add(cartItem);
                cart = new Cart(jsessionToken, new Date().toString(), new Date().toString(), cartItemList);
            } else {
                List<CartItem> cartItemList = cart.getCartItemList();
                cart.setModificationTime(new Date().toString());

                boolean simpleNameToBeAdded = true;
                for (CartItem cartItemElement : cartItemList) {
                    if (cartItemElement.getSimpleName().equals(cartItem.getSimpleName())) {

                        long sizeBefore = cartItemElement.getSizeSquareKm();
                        cartItemElement.setSizeSquareKm(sizeBefore + cartItem.getSizeSquareKm());
                        cartItemElement.setModificationTime(new Date().toString());
                        simpleNameToBeAdded = false;
                    }
                }

                if (simpleNameToBeAdded) {
                    cartItemList.add(cartItem);
                }
                cart.setCartItemList(cartItemList);
            }

            List<CartItem> cartItemList = cart.getCartItemList();
            double priceCache = 0;
            cart.setCartItemList(cartItemList);

            removeCart(httpSession);
            Cart newCart = cartRepository.save(cart);
            logger.trace(LOGGER_MAP_RESOURCE + cart.toString());
            newCart.setJsessionToken(null);
            return newCart;
        } else {
            return null;
        }
    }

    @DeleteMapping("")
    @CrossOrigin(origins = "*")
    public Cart removeItem(@RequestBody CartItem cartItem, HttpSession httpSession) {
        String jsessionToken = httpSession.getId();
        Cart cart = cartRepository.findByJsessionToken(jsessionToken);

        logger.trace(LOGGER_REQUEST_RESOURCE + cart.toString());

        if (cart != null) {
            List<CartItem> cartItemList = cart.getCartItemList();
            cart.setModificationTime(new Date().toString());

            boolean foundItem = false;
            // use of Iterator because otherwise there'd be a: ConcurrentModificationException
            for (Iterator<CartItem> itemIterator = cartItemList.iterator(); itemIterator.hasNext(); ) {
                CartItem cartItemElement = itemIterator.next();
                if (cartItemElement.getSimpleName().equals(cartItem.getSimpleName())) {
                    itemIterator.remove();
                    foundItem = true;
                }
                if (foundItem) {
                    break;
                }
            }
            cart.setCartItemList(cartItemList);

            //TODO: maybe rather do a real update!
            removeCart(httpSession);
            Cart newCart = cartRepository.save(cart);
            logger.info("Successfully saved cart: " + cart.toString());
            newCart.setJsessionToken(null);
            return newCart;
        } else {
            return null;
        }
    }

    @PatchMapping("")
    @CrossOrigin(origins = "*")
    public Cart updateItem(@RequestBody CartItem cartItem, HttpSession httpSession) {
        String jsessionToken = httpSession.getId();
        Cart cart = cartRepository.findByJsessionToken(jsessionToken);

        if (cart != null) {
            List<CartItem> cartItemList = cart.getCartItemList();
            cart.setModificationTime(new Date().toString());

            int counter = -1;
            boolean foundItem = false;
            // use of Iterator because otherwise there'd be a: ConcurrentModificationException
            for (Iterator<CartItem> itemIterator = cartItemList.iterator(); itemIterator.hasNext(); ) {
                CartItem cartItemElement = itemIterator.next();
                if (cartItemElement.getSimpleName().equals(cartItem.getSimpleName())) {
                    foundItem = true;
                }
                counter++;
                if (foundItem) {
                    break;
                }
            }

            if (foundItem) {
                cartItemList.get(counter).setSizeSquareKm(cartItem.getSizeSquareKm());
                cartItemList.get(counter).setModificationTime(new Date().toString());
            } else {
                return null;
            }
            cart.setCartItemList(cartItemList);

            //TODO: maybe rather do a real update!
            removeCart(httpSession);
            Cart newCart = cartRepository.save(cart);
            logger.trace(LOGGER_MAP_RESOURCE + cart.toString());

            newCart.setJsessionToken(null);
            return newCart;
        } else {
            return null;
        }
    }

    @GetMapping("")
    @CrossOrigin(origins = "http://localhost:4200")
    public Cart getByJSessionToken(HttpSession httpSession) {
        Cart cart = cartRepository.findByJsessionToken(httpSession.getId());
        if (cart != null) {
            logger.trace(LOGGER_REQUEST_RESOURCE + cart.toString());
            cart.setJsessionToken(null); // pitily no time for a CartDTO Class
            return cart;
        } else {
            return null;
        }
    }

    @GetMapping("/size")
    @CrossOrigin(origins = "http://localhost:4200")
    public int getNumberOfItemsInCart(HttpSession httpSession) {
        Cart cart = cartRepository.findByJsessionToken(httpSession.getId());
        if(cart!=null){
            return cart.getCartItemList().size();
        }else {
         return 0; 
        }
    }

    public void removeCart(HttpSession httpSession) {
        cartRepository.removeCartByJsessionToken(httpSession.getId());
    }
}