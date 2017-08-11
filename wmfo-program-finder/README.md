# WMFO Program Finder

- Check it out at: <https://junsooshin.github.io/comp20-jshin/wmfo-program-finder>

- Worked with Peter Lee, Rachel Marison, and Steven Manwaring.

- The team discussed the architecture of the program together. I was responsible
for making a page with information of each show ([showinfo.html](https://github.com/junsooshin/comp20-jshin/blob/master/wmfo-program-finder/frontend/showinfo.html) and parts of [showinfostyle.css](https://github.com/junsooshin/comp20-jshin/blob/master/wmfo-program-finder/frontend/showinfostyle.css)).

## Problem Statement:

It's hard to know which WMFO radio programs play the music you like.  

## Solution:

An application that uses data from WMFO playlists to create informative charts 
and graphs that show which genres of music are popular on a given Tufts program.
Users can search for programs that match their taste in music.

## Method

- SpinPapi API - Get playlist data of the school radio shows.

- Last.fm API - Retrieve genre for a given song using title and artist info.
Last.fm provides "tags" that we can match to specific genres we choose.

- MongoDB - Store playlist data in a database.