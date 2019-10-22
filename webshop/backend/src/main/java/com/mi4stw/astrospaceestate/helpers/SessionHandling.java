/**
 * # Author: om018 #
 */
package com.mi4stw.astrospaceestate.helpers;

import com.mi4stw.astrospaceestate.models.Currency;
import com.mi4stw.astrospaceestate.models.Language;
import com.mi4stw.astrospaceestate.repositories.CurrencyRepository;
import com.mi4stw.astrospaceestate.repositories.LanguageRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.List;

import static com.mi4stw.astrospaceestate.helpers.AstroConstants.*;

//@Component
@Service
public class SessionHandling {

    private Logger logger = LogManager.getLogger(SessionHandling.class);

    @Autowired
    private CurrencyRepository currencyRepository;
    @Autowired
    private LanguageRepository languageRepository;

    public HttpSession handleSessionAttributes(HttpSession httpSession) {

        List<Currency> currencyList=currencyRepository.findAll();
        List<Language> languageList=languageRepository.findAll();

        // handle currency attr
        String httpSessionCurrencyAttr = (String) httpSession.getAttribute(SESSION_CURRENCY_ATTR);

        boolean foundCurrency = false;
        for (Currency currency : currencyList) {

            String currencyCode = currency.getCode();

            if (currencyCode.equals(httpSessionCurrencyAttr)) {
                httpSession.setAttribute(SESSION_CURRENCY_ATTR, currencyCode);
                httpSession.setAttribute(SESSION_CONVERSION_ATTR, currency.getValue());
                logger.trace(LOGGER_CHANGE_CUR + currencyCode);
                foundCurrency = true;
                break;
            }

        }

        if (!foundCurrency) {
            httpSession.setAttribute(SESSION_CURRENCY_ATTR, CURRENCY_STANDARD);
            httpSession.setAttribute(SESSION_CONVERSION_ATTR, CURRENCY_STANDARD_CONVERSION);
        }

        // handle language attr
        String httpSessionLangAttr = (String) httpSession.getAttribute(SESSION_LANGUAGE_ATTR);

        boolean foundLanguage = false;
        for (Language language : languageList) {

            String langCode = language.getLangCode();

            if (langCode == httpSessionLangAttr) {
                httpSession.setAttribute(SESSION_LANGUAGE_ATTR, langCode);
                logger.info(LOGGER_CHANGE_CUR + langCode);
                foundLanguage = true;
                break;
            }
        }

        if (!foundCurrency) {
            httpSession.setAttribute(SESSION_LANGUAGE_ATTR, LANG_STANDARD);
        }

        return httpSession;
    }

}
