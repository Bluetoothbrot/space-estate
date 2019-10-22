//Author: om018, mk308

package com.mi4stw.astrospaceestate.mappingcontrollers;

import com.mi4stw.astrospaceestate.helpers.CheckPassword;
import com.mi4stw.astrospaceestate.helpers.LoginAttemptService;
import com.mi4stw.astrospaceestate.helpers.PasswordCryption;
import com.mi4stw.astrospaceestate.models.User;
import com.mi4stw.astrospaceestate.models.dtomodels.UserDTO;
import com.mi4stw.astrospaceestate.repositories.UserRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.UUID;

import static com.mi4stw.astrospaceestate.helpers.AstroConstants.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/user")
public class UserController {

    private Logger logger = LogManager.getLogger(UserController.class);

    @Autowired
    private LoginAttemptService loginAttemptService;
    @Autowired
    private HttpServletRequest request;
    @Autowired
    private UserRepository userRepository;

    // for testing purposes only: created users to copy into mongo insert script with correct hashed pws
    @PostMapping("/new")
    @CrossOrigin(origins = "*")
    public boolean createNewUser(@RequestBody User user) {
        User testUser = userRepository.findByEmail(user.getEmail());
        String hashedPw = null;

        //check if username is already used
        if (testUser == null) {
            //check if password correspond to conditions in class CheckPassword
            if (CheckPassword.passwordCheck(user.getPassword())) {
                try {
                    //Hash password
                    hashedPw = PasswordCryption.generatePasswordHash(user.getPassword());
                } catch (Exception e) {
                    logger.error(e);
                }
                //Set userId and Password in database
                user.setUserId(UUID.randomUUID());
                user.setPassword(hashedPw);
                userRepository.save(user);
                return true;
            } else logger.error(LOGGER_INSECURE_PASSWORD);
        } else {
            logger.error(LOGGER_USER_EXISTS + user.getEmail());
        }

        return false;
    }

    @PostMapping("")
    @CrossOrigin(origins = "*")
    public synchronized boolean loginUser(@RequestBody User tempUser, HttpSession httpSession) {
        String ip = getClientIP();
        //Research if current IP is blocked, and if so, deny access
        if (loginAttemptService.isBlocked(ip)) {
            logger.error(LOGGER_IP_BLOCKED);
            throw new RuntimeException("blocked");
        }


        //Search if username (email) exist
        User user = userRepository.findByEmail(tempUser.getEmail());

        if (user == null) {
            logger.error(LOGGER_EMAIL_NOT_EXIST);
            loginAttemptService.loginFailed(ip);
            return false;
        } else {
            //if exist, check password via password cryption
            try {
                if (PasswordCryption.validatePassword(tempUser.getPassword(), user.getPassword())) {
                    loginAttemptService.loginSucceeded(ip);

                    //set new user token
                    UUID uuid = UUID.randomUUID();
                    user.setUserToken(uuid);
                    httpSession.setAttribute(USER_TOKEN_ATTR, uuid);

                    //delete user with old user token
                    userRepository.deleteByUserId(user.getUserId());
                    userRepository.save(user);
                    logger.trace(LOGGER_LOGIN);
                    return true;
                } else {
                    loginAttemptService.loginFailed(ip);
                    logger.trace(LOGGER_WRONG_PASSWORD);
                }
            } catch (Exception e) {
                logger.error(LOGGER_VALDIATION_ERROR);
                e.printStackTrace();
            }
            return false;
        }
    }

    @GetMapping("/loggedin")
    @CrossOrigin(origins = "http://localhost:4200")
    public boolean isLoggedIn(HttpSession httpSession) {

        //find user by user token in httpSession in database
        UUID userToken;
        UUID userId = null;
        try {
            userToken = UUID.fromString(httpSession.getAttribute(USER_TOKEN_ATTR).toString());
            userId = userRepository.findByUserToken(userToken).getUserId();
        } catch (Exception e) {
            logger.error(e);
        }

        //check if user exists (is logged in)
        if (userId != null) {
            logger.trace(LOGGER_USER_FOUND + userId);
            return true;
        } else {
            logger.trace(LOGGER_USER_NOT_FOUND);
            return false;
        }
    }

    @PostMapping("/logout")
    @CrossOrigin(origins = "*")
    public boolean logoutUser(HttpSession httpSession) {
        //when user logs out, user token will be set to "" empty
        httpSession.removeAttribute(USER_TOKEN_ATTR);
        logger.trace(LOGGER_LOGOUT);
        return true;
    }

    @GetMapping("/name")
    @CrossOrigin(origins = "*")
    public UserDTO getLoggedInUsername(HttpSession httpSession) {
        UUID userToken;
        String userName = null;

        //find username by user token in httpSession in database
        try {
            userToken = UUID.fromString(httpSession.getAttribute(USER_TOKEN_ATTR).toString());
            userName = userRepository.findByUserToken(userToken).getName();
        } catch (Exception e) {
            logger.error(e);
        }
        logger.trace(LOGGER_USER_FOUND + userName);
        return new UserDTO(userName);
    }

    private String getClientIP() {
        //get IP to prevent brute force from same IP origin
        String xfHeader = request.getHeader("X-Forwarded-For");
        if (xfHeader == null) {
            return request.getRemoteAddr();
        }
        logger.trace(LOGGER_IP_EXTRACT);
        return xfHeader.split(",")[0];
    }
}