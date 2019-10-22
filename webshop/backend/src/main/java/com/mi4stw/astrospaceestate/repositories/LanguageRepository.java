package com.mi4stw.astrospaceestate.repositories;

import com.mi4stw.astrospaceestate.models.Language;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Repository
@CrossOrigin(origins = "*")
public interface LanguageRepository extends MongoRepository<Language, String> {
    
    List<Language> findAll();

}
