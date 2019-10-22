/**
 * # Author: om018 #
 */

package com.mi4stw.astrospaceestate.mappingcontrollers;

import com.mi4stw.astrospaceestate.models.dtomodels.ContentDTO;
import com.mi4stw.astrospaceestate.helpers.SessionHandling;
import com.mi4stw.astrospaceestate.models.modelmapper.ContentMapper;
import com.mi4stw.astrospaceestate.models.Content;
import com.mi4stw.astrospaceestate.repositories.ContentRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

import static com.mi4stw.astrospaceestate.helpers.AstroConstants.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/content")
public class ContentController {

    private Logger logger = LogManager.getLogger(ContentController.class);

    @Autowired
    private ContentRepository contentRepository;
    @Autowired
    private SessionHandling sessionHandling;

    @GetMapping("/{contentId}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ContentDTO getContentByContentIdAndLangCode(@PathVariable("contentId") int contentId, HttpSession httpSession) {

        httpSession = sessionHandling.handleSessionAttributes(httpSession);

        Content content = contentRepository.findByContentId(contentId);
        logger.trace(LOGGER_REQUEST_RESOURCE + content.toString());

        ContentDTO contentDTO = ContentMapper.mapContentToContentDTO(content, httpSession);
        logger.trace(LOGGER_MAP_RESOURCE + contentDTO.toString());

        return contentDTO;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("")
    public List<ContentDTO> getAllContents(HttpSession httpSession) {

        httpSession = sessionHandling.handleSessionAttributes(httpSession);

        List<Content> contentList = contentRepository.findAll();
        logger.trace(LOGGER_REQUEST_RESOURCE + contentList.toString());

        List<ContentDTO> contentDTOList = new ArrayList<>();

        // lambda not possible: local vars referenced from a lambda expr must be (effectively) final
        //contentList.parallelStream().forEach(content -> contentDTOList.add(ContentMapper.mapContentToContentDTO(content,httpSession)));

        for (Content content : contentList) {
            contentDTOList.add(ContentMapper.mapContentToContentDTO(content, httpSession));
        }

        return contentDTOList;
    }


}
