package com.mi4stw.astrospaceestate.helpers;

public class CheckPassword {
    public static boolean passwordCheck(String password) {
        if(password.length()>=8) {
            return true;
        }
        return false;
    }
}
