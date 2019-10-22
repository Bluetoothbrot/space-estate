#! /bin/sh
#script for java installation on VM by Oliver Maicher, 11.04.2019

# activate super user
su -

# remove leftovers of openjdk
sudo apt-get purge openjdk-\* -y

# clean unused packages automatically
apt-get autoremove -y

sudo apt update && sudo apt upgrade -y

# download JDK8 from Oracle
wget -P ~/astro wget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http%3a%2F%2Fwww.oracle.com%2Ftechnetwork%2Fjava%2Fjavase%2Fdownloads%2Fjdk8-downloads-2133151.html; oraclelicense=accept-securebackup-cookie;" "https://download.oracle.com/otn-pub/java/jdk/8u201-b09/42970487e3af4f5aa5bca3f542482c60/jdk-8u201-linux-x64.tar.gz"

cd ~/astro

# unzip file
tar -xvzf jdk-8u201-linux-x64.tar.gz

# remove zip file
rm jdk-8u201-linux-x64.tar.gz

# install paths
sudo update-alternatives --install  /usr/bin/java java /root/astro/jdk1.8.0_201/bin/java 1
sudo update-alternatives --install  /usr/bin/javac javac /root/astro/jdk1.8.0_201/bin/javac 1
#sudo update-alternatives --install  /usr/bin/javaws javaws /root/astro/jdk1.8.0_201/bin/javaws 1

# java version
java -version

#sudo update-alternatives --set  java /usr/local/jdk1.8.0_201/bin/java
#sudo update-alternatives --set  javac /usr/local/jdk1.8.0_201/bin/javac
#sudo update-alternatives --set  javaws /usr/local/jdk1.8.0_201/bin/javaw



# DEPRECATED:

# install default non-oracle java runtime environment
#sudo apt-get install default-jre --force-yes -y

# add variables to path and environment
#echo 'JAVA_HOME="/usr/lib/jvm/jdk-10.0.2"' >> /etc/environment
#echo 'PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/usr/lib/jvm/jdk-10.0.2/bin:/opt/apache-maven-3.6.0/bin"' >> /etc/environment

# install default non-oracle java development kit
#sudo apt-get install default-jdk --force-yes -y

# install oracle jdk 8 for support reasons
#sudo apt-get install oracle-java8-installer --force-yes -y
