# HappyFace
Project 2

# Technical Requirements

* Have at least 2 models (more if they make sense) -- ideally a user model and one that represents the main functional idea for your app

* Include sign up/log in functionality, with hashed passwords & an authorization flow

* Incorporate at least one API. Examples include Yelp, Tumblr, Facebook, and others on Mashape.

* Have complete RESTful routes for at least one of your resources with GET, POST, PUT, and DELETE

* Utilize an ORM to create a database table structure and interact with your relationally-stored data

* Include wireframes that you designed during the planning process

* Have semantically clean HTML and CSS

* Be deployed online and accessible to the public

# User Stories
Jude is 25, she cares about the environment, animals, and likes to wear a little makeup on special occasions. It's important to her that the products she purchases allign with her ethics.
  * As a user Jude wants to be able to conveniently check in her makeup is vegan or fair trade.

Christina is 22, she loves makeup but is allergic to gluten and can be a little forgetful of what's currently in her collection. Reading makeup labels can be difficult as they don't really follow universal labeling practices. Christina needs a simpler way to know that the product she's looking at in gluten free and she wants to be able to save a list of the products she owns to help her avoid purchasing duplicates so she can purchase more unique products.
  * As a user Christina wants to be able to check if a product is gluten free.
  * As a user Christina wants to be able to save her products to help her avoid purchasing the same product mutiple times.

# Progress Pictures:
 <img src="/img/wireframe1.jpg"/ width="350">

 <img src="/img/wireframe2.jpg"/ width="350">

# Day 1
I drew out a rough draft of what I wanted my views to look like, how I wanted to plan my tables, and read into how the makeup API works. I started working on some basic styling and getting authentication up and running.

# Day 2
I finished getting authentication running. I did a little more light styling and found images to be used later. I started working on getting the search information from my form and submitting it to my API.

# Day 3
Finished selecting what API data I wanted to keep and work with. Started working on saving products to the vanity.

# Day 4
Got products to save to the products table and displayed products in the various vanity sections and created delete functionality.

# Day 5
Figured out how to send search term information to results view and got search term functionality working, reguardless of case. Did some styling work. Discovered tag searches weren't working properly and fixed it to work when only checking for a single tag.

# Day 6
Created a profile view and created edit and delete profile functionality. Did some more styling. Also fixed it so that eyebrow products wouldn't show up in the search results because the API doesn't have any information for those products other then brand name.

# Technologies Used

* Makeup API (http://makeup-api.herokuapp.com/)
* Express
* Node.js
* HTML
* CSS & Bootstrap

# Bumps in the Road

I struggled a lot with the Node/Express concepts. I found out I had been working off a misconception and once that was cleared up it made things a lot easier. I found a lot of the things that I had done before couldn't be implemented in the same ways but I was eventually able to work around that and figure out how to make it work.

# Next Steps

* Style

* Use second API to allow for searches by barcode
