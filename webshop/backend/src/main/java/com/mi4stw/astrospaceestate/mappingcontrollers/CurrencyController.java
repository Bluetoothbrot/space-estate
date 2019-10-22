/**
 * # Author: om018 #
 */

package com.mi4stw.astrospaceestate.mappingcontrollers;

import com.mi4stw.astrospaceestate.models.Currency;
import com.mi4stw.astrospaceestate.repositories.CurrencyRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

import static com.mi4stw.astrospaceestate.helpers.AstroConstants.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/currency")
public class CurrencyController {

    @Autowired
    public CurrencyRepository currencyRepository;
    private Logger logger = LogManager.getLogger(CurrencyController.class);

    @GetMapping("/currentCurrency")
    @CrossOrigin(origins = "http://localhost:4200")
    public Currency getCurrentCurrency(HttpSession httpSession) {

        if (httpSession.getAttribute(SESSION_CURRENCY_ATTR) == null &&
                httpSession.getAttribute(SESSION_LANGUAGE_ATTR) == null) {
            httpSession.setAttribute(SESSION_CURRENCY_ATTR, CURRENCY_STANDARD);
            httpSession.setAttribute(SESSION_LANGUAGE_ATTR, LANG_STANDARD);
        }

        return new Currency(httpSession.getAttribute(SESSION_CURRENCY_ATTR).toString(), CURRENCY_STANDARD_CONVERSION);
    }

    @GetMapping("")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Currency> getCurrencies() {

        List<Currency> currenciesList = currencyRepository.findAll();
        logger.trace(LOGGER_REQUEST_RESOURCE + currenciesList.toString());
        return currenciesList;
    }

    @GetMapping("/{code}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Currency getCurrencyByCode(@PathVariable("code") String code) {
        Currency currency = currencyRepository.findByCode(code);
        logger.trace(LOGGER_REQUEST_RESOURCE + currency.toString());
        return currency;
    }

    @PostMapping("")
    @CrossOrigin(origins = "http://localhost:4200")
    public Currency changeCurrency(@RequestBody Currency currency, HttpSession httpSession) {

        logger.trace(LOGGER_HTTPSESSION + httpSession + ", " + httpSession.getId() + ", " + httpSession.getAttributeNames());

        String currencyCodeFromFrontEnd = currency.getCode();
        List<Currency> currencyList = getCurrencies();

        for (Currency element : currencyList) {
            if (element.getCode().equals(currencyCodeFromFrontEnd)) {
                httpSession.setAttribute(SESSION_CURRENCY_ATTR, element.getCode());
                httpSession.setAttribute(SESSION_CONVERSION_ATTR, element.getValue());
                logger.trace(LOGGER_ACCEPT_CUR + element);
                return element;
            }
        }
        return null;
    }

}




































