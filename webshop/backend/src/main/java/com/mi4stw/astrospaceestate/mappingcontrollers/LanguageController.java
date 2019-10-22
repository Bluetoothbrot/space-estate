/**
 * # Author: om018, mk308 #
 */
package com.mi4stw.astrospaceestate.mappingcontrollers;

import com.mi4stw.astrospaceestate.models.Language;
import com.mi4stw.astrospaceestate.repositories.LanguageRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

import static com.mi4stw.astrospaceestate.helpers.AstroConstants.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/language")
public class LanguageController {

    @Autowired
    public LanguageRepository languageRepository;
    private Logger logger = LogManager.getLogger(PlanetController.class);

    @GetMapping("/currentLanguage")
    @CrossOrigin(origins = "http://localhost:4200")
    public Language getCurrentLanguage(HttpSession httpSession) {

        if (httpSession.getAttribute(SESSION_CURRENCY_ATTR) == null &&
                httpSession.getAttribute(SESSION_LANGUAGE_ATTR) == null) {
            httpSession.setAttribute(SESSION_CURRENCY_ATTR, CURRENCY_STANDARD);
            httpSession.setAttribute(SESSION_LANGUAGE_ATTR, LANG_STANDARD);
        }

        return new Language(httpSession.getAttribute(SESSION_LANGUAGE_ATTR).toString());
    }

    @GetMapping("/init")
    @CrossOrigin(origins = "http://localhost:4200")
    public Language initializeLanguage(HttpSession httpSession, HttpServletRequest httpServletRequest) {

        String currentRequestLanguage = httpServletRequest.getLocale().getLanguage();

        // initialize session attribute language

        if (currentRequestLanguage == null) {
            httpSession.setAttribute(SESSION_LANGUAGE_ATTR, LANG_STANDARD);
        } else {
            List<Language> langList = languageRepository.findAll();
            for (Language language : langList) {

                String langCode = language.getLangCode();

                if (currentRequestLanguage.contains(langCode))
                    httpSession.setAttribute(SESSION_LANGUAGE_ATTR, langCode);
                break;
            }
        }

        // initialize session attribute currency
        httpSession.setAttribute(SESSION_CURRENCY_ATTR, CURRENCY_STANDARD);

        // return standard language object
        return new Language(httpSession.getAttribute(SESSION_LANGUAGE_ATTR).toString());
    }

    @GetMapping("")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Language> getAllLanguages() {

        List<Language> languageList = languageRepository.findAll();

        logger.trace(LOGGER_REQUEST_RESOURCE + languageList.toString());

        return languageList;
    }

    @CrossOrigin(origins = "*")
    @PostMapping("")
    public Language setLang(HttpSession httpSession, @RequestBody Language language) {
        httpSession.setAttribute(SESSION_LANGUAGE_ATTR, language.getLangCode());
        return language;
    }
}
