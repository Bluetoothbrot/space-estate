#! /bin/sh
#script for JaaS installation on VM by Oliver Maicher, 11.04.2019
# found on: https://wrapper.tanukisoftware.com/doc/english/qna-unix-daemon.html

# activate super user
su -
cd ~/astro

# vars
JAVA_BACKEND="backend-0.0.1-SNAPSHOT.jar"
WRAPPER_HOME="/opt"
EXAMPLE_HOME="ServiceWrapper"

#sudo mkdirs
sudo mkdir -p $EXAMPLE_HOME
sudo mkdir -p $EXAMPLE_HOME/bin
sudo mkdir -p $EXAMPLE_HOME/conf
sudo mkdir -p $EXAMPLE_HOME/lang
sudo mkdir -p $EXAMPLE_HOME/lib
sudo mkdir -p $EXAMPLE_HOME/lib/classes
sudo mkdir -p $EXAMPLE_HOME/logs

# download
sudo wget -P /opt https://download.tanukisoftware.com/wrapper/3.5.39/wrapper-linux-x86-64-3.5.39.tar.gz

# extract downloaded archive to /opt
sudo tar -xvzf /opt/wrapper-linux-x86-64-3.5.39.tar.gz -C /opt

# copy to working dir
cp -rf /opt/wrapper-linux-x86-64-3.5.39/bin/wrapper $EXAMPLE_HOME/bin/wrapper
cp -rf /opt/wrapper-linux-x86-64-3.5.39/lib/wrapper.jar $EXAMPLE_HOME/lib/wrapper.jar
cp -rf /opt/wrapper-linux-x86-64-3.5.39/lib/libwrapper.so $EXAMPLE_HOME/lib/libwrapper.so
cp -rf /opt/wrapper-linux-x86-64-3.5.39/src/bin/sh.script.in $EXAMPLE_HOME/bin/helloworldserver
cp -rf /opt/wrapper-linux-x86-64-3.5.39/src/conf/wrapper.conf.in $EXAMPLE_HOME/conf/wrapper.conf

# rm after cp -rf
rm -rf /opt/wrapper-linux-x86-64-3.5.39

# install replace for console
sudo apt-get install rpl

# rpl
echo "Replace #1"
rpl "wrapper.app.parameter.1=" "wrapper.app.parameter.1=com.mi4stw.astrospaceestate.AstroSpaceEstateApplication" $EXAMPLE_HOME/conf/wrapper.conf

# make the script file executable
chmod +x $EXAMPLE_HOME/bin/helloworldserver

# remove archive
rm /opt/wrapper-linux-x86-64-3.5.39.tar.gz

echo "Replace #2 and #3"
# rpl
rpl "APP_NAME=\"@app.name@\"" "APP_NAME=\"backend-0.0.1-SNAPSHOT.jar\"" $EXAMPLE_HOME/bin/helloworldserver
rpl "APP_LONG_NAME=\"@app.long.name@\"" "APP_LONG_NAME=\"astro backend wrapped service\"" $EXAMPLE_HOME/bin/helloworldserver
