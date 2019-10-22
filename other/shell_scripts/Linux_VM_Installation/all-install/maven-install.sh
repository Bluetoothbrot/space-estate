#! /bin/sh
#script for mvn installation on VM by Oliver Maicher, 11.04.2019

# activate super user
su -

# add environment variables
echo 'M2_HOME="/opt/apache-maven-3.6.0"' >> /etc/environment

# download apache maven to /opt
sudo wget -P /opt http://mirror.funkfreundelandshut.de/apache/maven/maven-3/3.6.0/binaries/apache-maven-3.6.0-bin.tar.gz

# extract downloaded archive to /opt
sudo tar -xvzf /opt/apache-maven-3.6.0-bin.tar.gz -C /opt

# remove archive
rm /opt/apache-maven-3.6.0-bin.tar.gz

# update the mvn command
sudo update-alternatives --install "/usr/bin/mvn" "mvn" "/opt/apache-maven-3.6.0/bin/mvn" 0
sudo update-alternatives --set mvn /opt/apache-maven-3.6.0/bin/mvn

# add bash completion to mvn
sudo wget https://raw.github.com/dimaj/maven-bash-completion/master/bash_completion.bash --output-document /etc/bash_completion.d/mvn

# show mvn version
mvn -v
