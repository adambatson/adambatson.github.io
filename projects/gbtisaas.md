---
layout: project
title: GBTISAAS
menu:
- header: Home
  url: /
- header: Introduction
  url: "#introduction"
- header: Dependencies
  url: "#dependencies"
- header: Usage
  url: "#usage"
- header: Administration
  url: "#administration"
---

# Introduction

GBTISAAS (Gesture Based Text Input System As A Service) is a companion web service application for [GBTIS](/projects/gbtis) that allows
for remote management and viewing of GuestBooks created through GBTIS.  It was built using Ruby on Rails 5.0.1

A demo of the application is available on [heroku](http://gbtisaas.herokuapp.com)

# Dependencies

* Ruby v2.3.3
* Ruby on Rails v5.0.1
* MySQL 2

# Usage

The main page shows the default guestbook as set by the adminstrator.  The entries in the guestbbok are shown and the user can up
or down vote entries as well as sort and search through the entries.  A list of other guestbooks available for viewing is shown
at the top of the page.

![The Home Page](/images/projects/gbtisaas/HomePage.png)  

# Administration

The administration panel available at `/admin` provides event administrators with a variety of management options
they are as follows.

## Manage Guestbooks

The manage Guestbooks tab allows administrators to create, edit, and delete guestbooks.  Admins may also `archive` books which closes 
them to new submissions and removes them from the main page.  Admins may also choose to download the guestbooks in `.csv` format.

![Guestbbok Management](/images/projects/gbtisaas/ManageGuestBooks.png)

## Manage Signatures

The Manage Signatures tab allows administrators to moderate the signatures in a guestbook.  The admins may also enable a profanity
filter that will auto remove profane messages, or set a guestbook to auto approve all incoming messages.

![Signature Management](/images/projects/gbtisaas/ManageSignatures.png)

## Manage Access Keys

The Manage Access keys tab allows admins to generate and revoke access keys used by client side instances of [gbtis](/projects/gbtis)
to interact with the application.  

![Manage Access Keys](/images/projects/gbtisaas/AccessKeys.png)

## Manage accounts

The manage accounts page allows admins to create and delete new admin accounts.