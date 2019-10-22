/**
 * # Author: om018 #
 */
package com.mi4stw.astrospaceestate.aspect;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.stereotype.Component;
import java.util.logging.Level;

@EnableAspectJAutoProxy
@Aspect
@Component
public class PerformanceMeasurement {

    private Logger logger = LogManager.getLogger(this.getClass());

    private static final String ANSI_RESET = "\u001B[0m";
    private static final String ANSI_RED = "\u001B[31m";
    private static final String ANSI_RED_BACKGROUND = "\u001B[41m";

    @Around(value = "execution(* com.mi4stw.astrospaceestate.*.*.*(..)) && args(..))")
    public Object measure(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.nanoTime();
        try {
            return joinPoint.proceed();
        } finally {
            long duration = System.nanoTime() - start;
            logger.info(ANSI_RED+"### Aufruf von "+joinPoint.getSignature().toShortString()+" dauerte "+duration+" ns (~"+duration/Math.pow(10,9)+" s)."+ANSI_RESET);
        }
    }
}