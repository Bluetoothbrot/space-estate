/**
 * # Author: om018 #
 */
package com.mi4stw.astrospaceestate.models.modelmapper;

import com.mi4stw.astrospaceestate.models.CartItem;
import com.mi4stw.astrospaceestate.models.OrderItem;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.spi.MappingContext;

import javax.servlet.http.HttpSession;

import static com.mi4stw.astrospaceestate.helpers.AstroConstants.SESSION_LANGUAGE_ATTR;

public class ItemMapper {

        private Logger logger = LogManager.getLogger(this.getClass());

        public static OrderItem mapCartItemToOrderItem(CartItem cartItem, HttpSession httpSession) {

            // pass session settings in map
            String currentLanguage = httpSession.getAttribute(SESSION_LANGUAGE_ATTR).toString();

            // Create your mapper
            ModelMapper modelMapper = new ModelMapper();

            // Create OrderItem instance to be mapped to
            OrderItem orderItem = new OrderItem();

            // Create Converter for explicit mapping
            Converter<CartItem, OrderItem> myConverter = new Converter<CartItem, OrderItem>() {
                public OrderItem convert(MappingContext<CartItem, OrderItem> context) {

                    CartItem cartItem = context.getSource();
                    OrderItem orderItem = context.getDestination();

                    // Set parameters

                    orderItem.setSimpleName(cartItem.getSimpleName());
                    orderItem.setSizeSquareKm(cartItem.getSizeSquareKm());
                    orderItem.setAddedTime(cartItem.getAddedTime());

                    return orderItem;
                }
            };

            modelMapper.addConverter(myConverter);

            modelMapper.map(cartItem, orderItem);

            return orderItem;
        }


    }


