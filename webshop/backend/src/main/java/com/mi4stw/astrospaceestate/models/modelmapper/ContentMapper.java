/**
 * # Author: om018 #
 */

package com.mi4stw.astrospaceestate.models.modelmapper;

import com.mi4stw.astrospaceestate.models.dtomodels.ContentDTO;
import com.mi4stw.astrospaceestate.models.Content;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.spi.MappingContext;

import javax.servlet.http.HttpSession;

import static com.mi4stw.astrospaceestate.helpers.AstroConstants.SESSION_LANGUAGE_ATTR;

public class ContentMapper {

    private Logger logger = LogManager.getLogger(this.getClass());

    public static ContentDTO mapContentToContentDTO(Content content, HttpSession httpSession) {

        // pass session settings in map
        String currentLanguage = httpSession.getAttribute(SESSION_LANGUAGE_ATTR).toString();

        // Create your mapper
        ModelMapper modelMapper = new ModelMapper();

        // Create ContentDTO instance to be mapped to
        ContentDTO contentDTO = new ContentDTO();

        // Create Converter for explicit mapping
        Converter<Content, ContentDTO> myConverter = new Converter<Content, ContentDTO>() {
            public ContentDTO convert(MappingContext<Content, ContentDTO> context) {

                Content content = context.getSource();
                ContentDTO contentDTO = context.getDestination();

                // Set parameters

                contentDTO.setContentId(content.getContentId());
                contentDTO.setSimpleName(content.getSimpleName());

                if(content.getLanguages()!=null){
                    contentDTO.setTexts(content.getLanguages().get(currentLanguage));
                }

                if(content.getImages()!=null){
                    contentDTO.setImages(content.getImages());
                }

                return contentDTO;
            }
        };

        modelMapper.addConverter(myConverter);

        modelMapper.map(content, contentDTO);

        return contentDTO;
    }


}
