package com.mi4stw.astrospaceestate.models.modelmapper;


import com.mi4stw.astrospaceestate.mappingcontrollers.PageController;
import com.mi4stw.astrospaceestate.models.Page;
import com.mi4stw.astrospaceestate.models.dtomodels.PageDTO;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.spi.MappingContext;

import javax.servlet.http.HttpSession;

import static com.mi4stw.astrospaceestate.helpers.AstroConstants.LOGGER_CONVERSION_RATE;
import static com.mi4stw.astrospaceestate.helpers.AstroConstants.SESSION_CONVERSION_ATTR;
import static com.mi4stw.astrospaceestate.helpers.AstroConstants.SESSION_LANGUAGE_ATTR;

public class PageMapper extends ModelMapper {

    private static Logger logger = LogManager.getLogger(PageController.class);

    public static PageDTO mapPageToPageDTO(Page page, HttpSession httpSession) {

        // pass session settings in map
        double currentCurrencyConversion = (double) httpSession.getAttribute(SESSION_CONVERSION_ATTR);
        logger.info(LOGGER_CONVERSION_RATE + currentCurrencyConversion);
        String currentLanguage = httpSession.getAttribute(SESSION_LANGUAGE_ATTR).toString();

        // Create your mapper
        ModelMapper modelMapper = new ModelMapper();

        // Create PageDTO instance to be mapped tp
        PageDTO pageDTO = new PageDTO();

        // Create Converter for explicit mapping
        Converter<Page, PageDTO> myConverter = new Converter<Page, PageDTO>() {
            public PageDTO convert(MappingContext<Page, PageDTO> context) {

                Page page = context.getSource();
                PageDTO pageDTO = context.getDestination();




                // Set parameters
                pageDTO.setTexts(page.getLanguages().get(currentLanguage));
                pageDTO.setPageId(page.getPageId());
                pageDTO.setPath(page.getPath());

                return pageDTO;
            }
        };

        modelMapper.addConverter(myConverter);

        modelMapper.map(page, pageDTO);

        return pageDTO;
    }
}