/**
 * # Author: om018 #
 */

package com.mi4stw.astrospaceestate.models.modelmapper;

import com.mi4stw.astrospaceestate.mappingcontrollers.PlanetController;
import com.mi4stw.astrospaceestate.models.Planet;
import com.mi4stw.astrospaceestate.models.dtomodels.PlanetDTO;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.spi.MappingContext;

import javax.servlet.http.HttpSession;

import static com.mi4stw.astrospaceestate.helpers.AstroConstants.SESSION_CONVERSION_ATTR;
import static com.mi4stw.astrospaceestate.helpers.AstroConstants.SESSION_LANGUAGE_ATTR;
import static com.mi4stw.astrospaceestate.helpers.AstroConstants.LOGGER_CONVERSION_RATE;

public class PlanetMapper extends ModelMapper {

    private static Logger logger = LogManager.getLogger(PlanetController.class);

    public static PlanetDTO mapPlanetToPlanetDTO(Planet planet, HttpSession httpSession) {

        // pass session settings in map
        double currentCurrencyConversion = (double) httpSession.getAttribute(SESSION_CONVERSION_ATTR);
        logger.trace(LOGGER_CONVERSION_RATE + currentCurrencyConversion);
        String currentLanguage = httpSession.getAttribute(SESSION_LANGUAGE_ATTR).toString();

        // Create your mapper
        ModelMapper modelMapper = new ModelMapper();

        // Create PlanetDTO instance to be mapped tp
        PlanetDTO planetDTO = new PlanetDTO();

        // Create Converter for explicit mapping
        Converter<Planet, PlanetDTO> myConverter = new Converter<Planet, PlanetDTO>() {
            public PlanetDTO convert(MappingContext<Planet, PlanetDTO> context) {

                Planet planet = context.getSource();
                PlanetDTO planetDTO = context.getDestination();

                // Set parameters
                planetDTO.setTexts(planet.getLanguages().get(currentLanguage));
                planetDTO.setSimpleName(planet.getSimpleName());
                planetDTO.setImage(planet.getImage());
                planetDTO.setPriceSquareKm(planet.getPriceSquareKm() * currentCurrencyConversion);
                planetDTO.setSoldSizeSquareKm(planet.getSoldSizeSquareKm());
                planetDTO.setTotalSize(planet.getTotalSize());

                return planetDTO;
            }
        };

        modelMapper.addConverter(myConverter);

        modelMapper.map(planet, planetDTO);

        return planetDTO;
    }
}
