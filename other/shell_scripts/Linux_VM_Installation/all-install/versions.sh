#! /bin/sh
#script for printing versions on VM by Oliver Maicher, 14.04.2019

# activate super user
su -

java -version

mvn -v

mongod --version

mongo --version

ng version
