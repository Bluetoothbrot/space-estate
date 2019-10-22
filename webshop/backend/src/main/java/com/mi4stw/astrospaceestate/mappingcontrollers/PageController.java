/**
 * # Author: om018 #
 */
package com.mi4stw.astrospaceestate.mappingcontrollers;


import com.mi4stw.astrospaceestate.helpers.SessionHandling;
import com.mi4stw.astrospaceestate.models.Page;
import com.mi4stw.astrospaceestate.models.dtomodels.PageDTO;
import com.mi4stw.astrospaceestate.models.modelmapper.PageMapper;
import com.mi4stw.astrospaceestate.repositories.PageRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

import static com.mi4stw.astrospaceestate.helpers.AstroConstants.LOGGER_REQUEST_RESOURCE;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/page")
public class PageController {

    private Logger logger = LogManager.getLogger(PageController.class);

    @Autowired
    private PageRepository pageRepository;
    @Autowired
    private SessionHandling sessionHandling;

    @GetMapping("")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<PageDTO> getAllPages(HttpSession httpSession) {

        httpSession = sessionHandling.handleSessionAttributes(httpSession);

        List<Page> pageList = pageRepository.findAll();
        logger.trace(LOGGER_REQUEST_RESOURCE + pageList.toString());

        List<PageDTO> pageDTOList = new ArrayList<>();
        //pageList.parallelStream().forEach(page -> pageDTOList.add(PageMapper.mapPageToPageDTO(page, httpSession)));
        // lambda not possible: local vars referenced from a lambda expr must be (effectively) final
        for (Page page : pageList) {
            pageDTOList.add(PageMapper.mapPageToPageDTO(page, httpSession));
        }
        return pageDTOList;
    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public PageDTO getPageById(@PathVariable("id") int id, HttpSession httpSession) {
        httpSession = sessionHandling.handleSessionAttributes(httpSession);

        Page page = pageRepository.findByPageId(id);
        PageDTO pageDTO = PageMapper.mapPageToPageDTO(page, httpSession);

        return pageDTO;
    }
}























