#! /bin/sh
#script for script transfer to VM by Oliver Maicher, 14.04.2019

# path to scripts on my machine
MY_PATH="/mnt/c/Users/Oliver/IdeaProjects/space-estate/other/shell_scripts/"

# path to directory for scripts on VM
VM_PATH="/root/astro"

# path to directory
ALLINST="Linux_VM_Installation/all-install/"

# mongo_inserts path
MNG="mongo_inserts/"

# terminal command
SCP="scp"

# file names
ALL="all-install.sh" JAVA="java-install.sh" MVN="maven-install.sh" NG="angular-install.sh" MONGO="mongodb-install.sh" INSERT="mongo_insert_script.sh"

# send to machine 65, productive system
echo "Webspec65: "
$SCP $MY_PATH/$ALLINST$ALL   root@webspec65.mi.hdm-stuttgart.de:$VM_PATH
$SCP $MY_PATH/$ALLINST$JAVA   root@webspec65.mi.hdm-stuttgart.de:$VM_PATH
$SCP $MY_PATH/$ALLINST$MVN   root@webspec65.mi.hdm-stuttgart.de:$VM_PATH
$SCP $MY_PATH/$ALLINST$NG   root@webspec65.mi.hdm-stuttgart.de:$VM_PATH
$SCP $MY_PATH/$ALLINST$MONGO   root@webspec65.mi.hdm-stuttgart.de:$VM_PATH

$SCP $MY_PATH/$MNG$INSERT  root@webspec65.mi.hdm-stuttgart.de:$VM_PATH

echo "Webspec64: "
# send to machine 64, Manuel
$SCP $MY_PATH/$ALLINST$ALL   root@webspec64.mi.hdm-stuttgart.de:$VM_PATH
$SCP $MY_PATH/$ALLINST$JAVA   root@webspec64.mi.hdm-stuttgart.de:$VM_PATH
$SCP $MY_PATH/$ALLINST$MVN   root@webspec64.mi.hdm-stuttgart.de:$VM_PATH
$SCP $MY_PATH/$ALLINST$NG   root@webspec64.mi.hdm-stuttgart.de:$VM_PATH
$SCP $MY_PATH/$ALLINST$MONGO   root@webspec64.mi.hdm-stuttgart.de:$VM_PATH

$SCP $MY_PATH/$MNG$INSERT  root@webspec64.mi.hdm-stuttgart.de:$VM_PATH

echo "Webspec63: "
# send to machine 63, Oliver
$SCP $MY_PATH/$ALLINST$ALL   root@webspec63.mi.hdm-stuttgart.de:$VM_PATH
$SCP $MY_PATH/$ALLINST$JAVA   root@webspec63.mi.hdm-stuttgart.de:$VM_PATH
$SCP $MY_PATH/$ALLINST$MVN   root@webspec63.mi.hdm-stuttgart.de:$VM_PATH
$SCP $MY_PATH/$ALLINST$NG   root@webspec63.mi.hdm-stuttgart.de:$VM_PATH
$SCP $MY_PATH/$ALLINST$MONGO   root@webspec63.mi.hdm-stuttgart.de:$VM_PATH

$SCP $MY_PATH/$MNG$INSERT  root@webspec63.mi.hdm-stuttgart.de:$VM_PATH

echo "Webspec62: "
# send to machine 62, Japhet
$SCP $MY_PATH/$ALLINST$ALL   root@webspec62.mi.hdm-stuttgart.de:$VM_PATH
$SCP $MY_PATH/$ALLINST$JAVA   root@webspec62.mi.hdm-stuttgart.de:$VM_PATH
$SCP $MY_PATH/$ALLINST$MVN   root@webspec62.mi.hdm-stuttgart.de:$VM_PATH
$SCP $MY_PATH/$ALLINST$NG   root@webspec62.mi.hdm-stuttgart.de:$VM_PATH
$SCP $MY_PATH/$ALLINST$MONGO   root@webspec62.mi.hdm-stuttgart.de:$VM_PATH

$SCP $MY_PATH/$MNG$INSERT  root@webspec62.mi.hdm-stuttgart.de:$VM_PATH

echo "Webspec61: "
# send to machine 61, Maximilian
$SCP $MY_PATH/$ALLINST$ALL   root@webspec61.mi.hdm-stuttgart.de:$VM_PATH
$SCP $MY_PATH/$ALLINST$JAVA   root@webspec61.mi.hdm-stuttgart.de:$VM_PATH
$SCP $MY_PATH/$ALLINST$MVN   root@webspec61.mi.hdm-stuttgart.de:$VM_PATH
$SCP $MY_PATH/$ALLINST$NG   root@webspec61.mi.hdm-stuttgart.de:$VM_PATH
$SCP $MY_PATH/$ALLINST$MONGO   root@webspec61.mi.hdm-stuttgart.de:$VM_PATH

$SCP $MY_PATH/$MNG$INSERT  root@webspec61.mi.hdm-stuttgart.de:$VM_PATH

# deploy protype directory via $SCP onto VM
# $SCP -r /mnt/c/Users/Oliver/IdeaProjects/space-estate/protype root@webspec63.mi.hdm-stuttgart.de:/usr/astro
