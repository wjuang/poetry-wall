# poetry-wall
Project Description

General App Idea/Purpose

A user-submitted database of poems. Uses Express.js and Mongoose. Styled with Bootstrap and uses ResponsiveVoice. Hosted on Heroku at https://poetry-wall.herokuapp.com/

Routes:

Title: string
Author: string
Content: string
Timestamp: date

A list of routes (e.g. POST /pins/ allows users to post a picture of a pin)
get:
-Index
-Show (index/:id) + comments
-New
-Edit

delete:
-Index/:id
-Index/:id/:commentId

post:
-Index

put:
-Index/:id

Wireframes
![image](https://user-images.githubusercontent.com/79492367/135719459-498c9a0a-b579-4192-b30f-ff9c2511e5c4.png)

User Stories

User stories detailing app functionality

Add user stories following the As a [type of user], I want [what the user wants], so that [what it helps accomplish] format.
As a user, I want to see previews of each poem on the front index page.
I want to see the correct info on the show page when each preview is clicked.
I want to be able to add my own new poems.
I want to be able to edit and delete poems.

MVP Goals

Poems can be submitted, viewed, edited, and deleted.
Page is styled in an aesthetically pleasing manner.
Poems are properly stored and ordered chronologically in the database/on the index page.

Stretch Goals

Add comments section to each show page
Add logins and display usernames as authors of both posts and comments
Add text to speech function to read poem out loud
Add audio recording in browser and playback so people can hear themselves and others reading back their poetry
