/**
 * # Author: om018 #
 */
package com.mi4stw.astrospaceestate.models.dtomodels;

// quickfix class...

public class UserDTO {
    String name;

    public UserDTO(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "UserDTO{" +
                "name='" + name + '\'' +
                '}';
    }
}
