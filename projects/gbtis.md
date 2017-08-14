---
layout: project
title: GBTIS
menu:
- header: Home
  url: /
- header: Introduction
  url: "#introduction"
- header: Web Service
  url: "#web-service"
- header: Setup
  url: "#setup"
- header: Configuration
  url: "#configuration"
- header: Usage
  url: "#usage"
---

# Introduction

GBTIS (Gesture Based Text Input System) was a capstone project written by myself, Richard Carson, and Max DeMelo.  The system uses a Microsoft Kinect to track
a users finger-tip and interpret the users hand motions as text, allowing a user to "Write in the air".  The project was completed in fulfilment of SYSC4927 and
earned our group an A. 

# Web Service
A web service is available for remote storage, and management of guestbooks.  The repo is available [here](https://github.com/adambatson/gbtisaas)

# Setup

The repo provides a solution compatible with Microsoft visual studio 2015 and later.  The [Microsoft Kinect SDK](https://developer.microsoft.com/en-us/windows/kinect)
is also required.  Once the SDK is installed simply import the solution into visual studio and run.  

# Configuration

Configuration is handled through the App.config file, the following parameters can be configured
* DemoMode 
    * When DemoMode is set to True the application will exit following every user interaction, this allows GBTIS to be modularized into other applications
* GBTISaaSAddress 
    * The address of the web service deployment if applicable
* AuthorizationKey 
    * The authorization key used to communicate with the web service deployment if applicable

# Usage

To start the application simply run the executable file produced by Visual Studio.

## The Standby Screen

The Standby Screen is the first screen that will be shown to the user.  On the left-hand side, a list of names randomly selected from the active guestbook is shown.
The right-hand side shows the view from the Kinect camera in order to help orient the user.  The user can begin writing by simply waving as instructed.  

![standby](/images/projects/gbtis/standby.png)

If multiple users are in the frame, then the user that waves will become the active user.

## The Canvas

The canvas screen is the main point of user interaction.  When launched the screen will show a blank canvas with an overlay of the camera feed to help the user orient themselves. 

The users writing is interpreted using OCR and the result is shown at the bottom of the screen.

The user can draw by extending two fingers, or erase with an open palm.  A closed fist will show an idle cursor showing the users current position on the canvas.

![idle_canvas](/images/projects/gbtis/Idle_Canvas.png)

![canvasshowingtext](/images/projects/gbtis/canvas_text.png)

The button bar at the top of the screen contains 4 user clickable buttons.  The buttons are activated by hovering over the buttons for 1 second.  The buttons work as follows:

* Help - Activates an animated overlay that explains how to use the system
* Clear - Resets the canvas to a blank state
* Cancel - Cancels the user session and returns to the Standby Screen
* Continue - Saves the current message and returns to the Standby Screen

## The Admin Window

The Admin Window is displayed in the background of the system and is not visible to the users.  If multiple screens are being used the admin window can be configured
to display on a separate screen to that of the canvas/standby windows.  The admin windows allows administrators to manage the system including shutdown, returning the system to standby and overriding the active user.