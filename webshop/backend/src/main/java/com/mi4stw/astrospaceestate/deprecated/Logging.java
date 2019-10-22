/**
 * # Author: om018 #
 */
package com.mi4stw.astrospaceestate.deprecated;

import java.util.MissingResourceException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Logging extends Logger {

    private static final String ANSI_RESET = "\u001B[0m";
    private static final String ANSI_RED = "\u001B[31m";
    private static final String ANSI_RED_BACKGROUND = "\u001B[41m";


    @Override
    public void info(String msg) {
        log(Level.INFO, ANSI_RED+msg+ANSI_RESET);
    }

    /**
     * Protected method to construct a logger for a named subsystem.
     * <p>
     * The logger will be initially configured with a null Level
     * and with useParentHandlers set to true.
     *
     * @param name               A name for the logger.  This should
     *                           be a dot-separated name and should normally
     *                           be based on the package name or class name
     *                           of the subsystem, such as java.net
     *                           or javax.swing.  It may be null for anonymous Loggers.
     * @param resourceBundleName name of ResourceBundle to be used for localizing
     *                           messages for this logger.  May be null if none
     *                           of the messages require localization.
     * @throws MissingResourceException if the resourceBundleName is non-null and
     *                                  no corresponding resource can be found.
     */
    protected Logging(String name, String resourceBundleName) {
        super(name, resourceBundleName);
    }



}