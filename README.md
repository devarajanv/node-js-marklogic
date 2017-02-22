# Overview
A simple basic application in Node.js and MarkLogic

#Pre-requisite
Install Developer version of Marklogic (http://developer.marklogic.com/download) and admin console in http://localhost:8001/ should be running.
I've installed this installable in Microsoft Windows (7, 8, Server 2008, and Server 2012)
http://developer.marklogic.com/download/binaries/8.0/MarkLogic-8.0-6.3-amd64.msi 

# Install Node.js 
Install Node.js from https://nodejs.org/en/download/ 
I have installed it using Windows Installer (.msi) 64-bit (https://nodejs.org/dist/v6.10.0/node-v6.10.0-x64.msi) for my windows desktop

# Open Node.js command prompt 
Open Node.js command prompt so that it picks up the node executable
start(windows) --> All Programs --> Node.js --> Node.js command prompt

# Checkout project from Github
You probably might be aware of Github, so you can ignore and goto next step
but if you are new to github,
To go to your workspace and checkout the project from github
$ cd C:\workspace\
$ git clone  https://github.com/devarajanv/node-js-marklogic.git

# Install Marklogic
$npm install marklogic --save

# (Optional Step) In this sample, I've used "str-reverse" common JS library to reverse a string.
$npm install str-reverse
 
# Edit/Run the javascript 
Edit/Run the javascript file(ml-create-doc.js). This is a simple java script code which prints text in console output file(hello-world.js). 
$ node ml-create-doc.js

# Output
You'll get a similar JSON output in your command prompt
[
  "/16352601189547002890.json"
]
This document "/16352601189547002890.json" will be loaded into MarkLogic's default database named "Documents". 
If you want this to be loaded to different database, then please change the port from 8000 to your own REST API port. 
If you don't have a REST API port or not sure on what that is, then this javascript code should be good.
Open the MarkLogic QConsole which runs in http://localhost:8000/qconsole/ --> Select the Documents database --> Explore or cts:uri-match("*.json") and verify your JSON document in there.

In MarkLogic QConsole, 
Query: 
doc("/16352601189547002890.json") 
Output: 
{"text":"HelloWorld", "textReversed":"dlroWolleH"}


#FAQ or Frequently faced errors
If you have run this command $node ml-create-doc.sjs ahead of installing marklogic dependency for node.js, then you'll get this error.
Error: Cannot find module 'marklogic'
    at Function.Module._resolveFilename (module.js:469:15)
    at Function.Module._load (module.js:417:25)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (C:\workspace\node-js-marklogic\ml-create-doc.sjs:4:17)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)


