---
title:  "Connecting to PAL3.0 on Linux"
description: "Access campus-only resources from anywhere!"
author: Chris Xiao
date:   2020-11-21 14:00:00 -0400
categories: [campus,technical]
---

### Introduction

PAL3.0 is Purdue's wireless network. It uses WPA2 Enterprise authentication, which means additional configurations may be needed to connect to it on Linux.

This tutorial will show you how to connect to PAL3.0 on desktop Linux. Note: Screenshots below show the GNOME 3 desktop environment. The process should be very similar to other environments.

#### Step 1

Open Wi-Fi settings, and select `PAL3.0` in the list of available wireless networks.

![Wi-Fi Settings](/assets/images/wiki/connect-pal3.0-linux/step1.png)

#### Step 2

Change the following settings:

- Set "Authentication" to `Protected EAP (PEAP)`
- Select `No CA certificate is required`

After changing these settings, your options page should look like this:

![PAL3.0 Settings](/assets/images/wiki/connect-pal3.0-linux/step2.png)

#### Step 3

Enter your Purdue username (without "@purdue.edu") and password (regular password, NOT BoilerKey), then click "Connect."

![PAL3.0 Completed settings](/assets/images/wiki/connect-vpn/step3.png)

#### Step 4

You should be connected to PAL3.0 in a few seconds! Check the Wi-Fi symbol on the top bar/panel to see if you're connected.
