//Author: om018, mk308, mk303

package com.mi4stw.astrospaceestate.mappingcontrollers;

import com.mi4stw.astrospaceestate.models.dtomodels.PlanetDTO;
import com.mi4stw.astrospaceestate.helpers.SessionHandling;
import com.mi4stw.astrospaceestate.models.modelmapper.PlanetMapper;
import com.mi4stw.astrospaceestate.models.Planet;
import com.mi4stw.astrospaceestate.repositories.PlanetRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import static com.mi4stw.astrospaceestate.helpers.AstroConstants.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/planet")
public class PlanetController {
    private Logger logger = LogManager.getLogger(PlanetController.class);

    @Autowired
    private PlanetRepository planetRepository;
    @Autowired
    private SessionHandling sessionHandling;

    @GetMapping("/promoplanet")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<PlanetDTO> getPromoPlanet(HttpSession httpSession) {

        List<PlanetDTO> planetList = getPlanet(httpSession);
        List<PlanetDTO> list = new ArrayList<>();

        Random random = new Random();
        int rand1 = random.nextInt(planetList.size());
        int rand2 = random.nextInt(planetList.size());

        while (rand1 == rand2) {
            rand2 = random.nextInt(planetList.size());
        }

        list.add(planetList.get(rand1));
        list.add(planetList.get(rand2));

        return list;
    }

    //TODO: getAnyPlanet?
    @GetMapping("/extra/{simpleName}")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<PlanetDTO> getAnyPlanets(@PathVariable("simpleName") String simpleName, HttpSession httpSession) {

        //method for reducing duplicate code: session handling two in one
        httpSession = sessionHandling.handleSessionAttributes(httpSession);

        if (simpleName == null) {
            List<Planet> planetsList = planetRepository.findAll();
            logger.trace(LOGGER_REQUEST_RESOURCE + planetsList.toString());

            List<PlanetDTO> planetDTOList = new ArrayList<>();
            // lambda not possible: local vars referenced from a lambda expr must be (effectively) final
            //planetsList.parallelStream().forEach(planet -> planetDTOList.add(PlanetMapper.mapPlanetToPlanetDTO(planet, httpSession)));
            for (Planet planet : planetsList) {
                planetDTOList.add(PlanetMapper.mapPlanetToPlanetDTO(planet, httpSession));
            }

            return planetDTOList;

        } else {
            Planet planet = planetRepository.findBySimpleName(simpleName);

            logger.trace(LOGGER_REQUEST_RESOURCE + planet.toString());

            PlanetDTO planetDTO = PlanetMapper.mapPlanetToPlanetDTO(planet, httpSession);

            logger.trace(LOGGER_MAP_RESOURCE + planetDTO.toString());

            List<PlanetDTO> planetDTOList = new ArrayList<>();
            planetDTOList.add(planetDTO);

            return planetDTOList;
        }
    }

    @GetMapping("/{simpleName}")
    @CrossOrigin(origins = "http://localhost:4200")
    public PlanetDTO getSinglePlanet(@PathVariable("simpleName") String simpleName, HttpSession httpSession) {
        httpSession = sessionHandling.handleSessionAttributes(httpSession);

        Planet planet = planetRepository.findBySimpleName(simpleName);

        logger.trace(LOGGER_REQUEST_RESOURCE + planet.toString());

        PlanetDTO planetDTO = PlanetMapper.mapPlanetToPlanetDTO(planet, httpSession);

        logger.trace(LOGGER_MAP_RESOURCE + planetDTO.toString());

        return planetDTO;
    }

    @GetMapping("")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<PlanetDTO> getPlanet(HttpSession httpSession) {
        httpSession = sessionHandling.handleSessionAttributes(httpSession);

        List<Planet> planetsList = planetRepository.findAll();
        logger.trace(LOGGER_REQUEST_RESOURCE + planetsList.toString());

        List<PlanetDTO> planetDTOList = new ArrayList<>();
        //planetsList.parallelStream().forEach(planet -> planetDTOList.add(PlanetMapper.mapPlanetToPlanetDTO(planet, httpSession)));
        // lambda not possible: local vars referenced from a lambda expr must be (effectively) final
        for (Planet planet : planetsList) {
            planetDTOList.add(PlanetMapper.mapPlanetToPlanetDTO(planet, httpSession));
        }
        return planetDTOList;
    }
}
