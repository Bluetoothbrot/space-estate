/**
 * # Author: om018 #
 */
package com.mi4stw.astrospaceestate.aspect;

import java.util.Arrays;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.stereotype.Component;

@EnableAspectJAutoProxy
@Aspect
@Component
public class LoggingInterceptor {

    private static final String ANSI_RESET = "\u001B[0m";
    private static final String ANSI_RED = "\u001B[31m";
    private static final String ANSI_RED_BACKGROUND = "\u001B[41m";

    private Logger logger = LogManager.getLogger(this.getClass());

    @Around(value = "execution(* com.mi4stw.astrospaceestate.*.*.*(..)) && args(..))")
    public Object logAround(ProceedingJoinPoint joinPoint) throws Throwable {
        logger.info(ANSI_RED+this.getClass().getSimpleName()+".logAround, JoinPoint: " + joinPoint.getSignature().toShortString() + ", args : " + Arrays.toString(joinPoint.getArgs())+ANSI_RESET);
        return joinPoint.proceed();
    }




    public void logBefore(JoinPoint joinPoint) {

        logger.info("logBefore() is running!");
        logger.info("hijacked : " + joinPoint.getSignature().getName());
        logger.info("******");
    }

    public void logAfter(JoinPoint joinPoint) {

        logger.info("logAfter() is running!");
        logger.info("hijacked : " + joinPoint.getSignature().getName());
        logger.info("******");

    }

    public void logAfterReturning(JoinPoint joinPoint, Object result) {

        logger.info("logAfterReturning() is running!");
        logger.info("hijacked : " + joinPoint.getSignature().getName());
        logger.info("Method returned value is : " + result);
        logger.info("******");

    }

    public void logAfterThrowing(JoinPoint joinPoint, Throwable error) {

        logger.info("logAfterThrowing() is running!");
        logger.info("hijacked : " + joinPoint.getSignature().getName());
        logger.info("Exception : " + error);
        logger.info("******");

    }
}