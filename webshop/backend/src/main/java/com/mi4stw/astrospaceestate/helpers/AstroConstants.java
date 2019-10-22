// Author: om018, mk308

package com.mi4stw.astrospaceestate.helpers;

import java.util.ResourceBundle;

public class AstroConstants {

    private static ResourceBundle resourceBundle = ResourceBundle.getBundle("application");

    public static final String LANG_STANDARD = resourceBundle.getString("astro.lang.standard");
    public static final String CURRENCY_STANDARD = resourceBundle.getString("astro.currency.standard");

    public static final double CURRENCY_STANDARD_CONVERSION = Double.valueOf(resourceBundle.getString("astro.currency.standard.conversion"));

    public static final String SESSION_LANGUAGE_ATTR = resourceBundle.getString("astro.session.language");
    public static final String SESSION_CURRENCY_ATTR = resourceBundle.getString("astro.session.currency");
    public static final String SESSION_CONVERSION_ATTR = resourceBundle.getString("astro.session.conversion");
    public static final String USER_TOKEN_ATTR = resourceBundle.getString("astro.session.userToken");

    public static final String PASSWORD_HASH_METHOD = resourceBundle.getString("astro.hashing.method");
    public static final String PASSWORD_SALT_METHOD = resourceBundle.getString("astro.salt.method");

    public static final String LOGGER_CONVERSION_RATE = resourceBundle.getString("astro.log.conversion");
    public static final String LOGGER_INSECURE_PASSWORD = resourceBundle.getString("astro.log.pw.insecure");
    public static final String LOGGER_USER_EXISTS = resourceBundle.getString("astro.log.user.exist");
    public static final String LOGGER_IP_BLOCKED = resourceBundle.getString("astro.log.ip.blocked");
    public static final String LOGGER_EMAIL_NOT_EXIST = resourceBundle.getString("astro.log.email.not.exist");
    public static final String LOGGER_LOGIN = resourceBundle.getString("astro.log.login");
    public static final String LOGGER_WRONG_PASSWORD = resourceBundle.getString("astro.log.pw.wrong");
    public static final String LOGGER_VALDIATION_ERROR = resourceBundle.getString("astro.log.pw.validation");
    public static final String LOGGER_USER_FOUND = resourceBundle.getString("astro.log.user.found");
    public static final String LOGGER_USER_NOT_FOUND = resourceBundle.getString("astro.log.user.not.found");
    public static final String LOGGER_LOGOUT = resourceBundle.getString("astro.log.logout");
    public static final String LOGGER_IP_EXTRACT = resourceBundle.getString("astro.log.ip");
    public static final String LOGGER_REQUEST_RESOURCE = resourceBundle.getString("astro.log.requested.resource");
    public static final String LOGGER_MAP_RESOURCE = resourceBundle.getString("astro.log.mapped.resource");
    public static final String LOGGER_HTTPSESSION = resourceBundle.getString("astro.log.httpSession");
    public static final String LOGGER_ACCEPT_CUR = resourceBundle.getString("astro.log.cur.accepted");
    public static final String LOGGER_CHANGE_CUR = resourceBundle.getString("astro.log.cur.changed");
}
