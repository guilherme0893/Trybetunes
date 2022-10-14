# Introduction

This projects allows the user to search and listen to their favorite musics and artists. Here an API from ITunes is used -- for the musics the endpoit is (https://itunes.apple.com/lookup?id=${id}&entity=song), and for the albums the endpoint (https://itunes.apple.com/search?entity=album&term=${artistNameURL}&attribute=allArtistTerm), and the data is displayed in the front-end using React and Material UI for styling. Please, notice that it is possible that the request of a certain artist may fail due to the API (then you will be redirect to a Not Found page), or it is possible that searched artist is not part of the ITunes API.

# How to use it 
   
1) First of all clone the repository via <code> git clone </code>  and enter into the folder 

2) Then install the dependencies via <code> npm install </code>

3) To run the application simply run <code> npm start </code>

4) Have fun

# Take a look at the application

https://trybetunes-alpha.vercel.app/

# Future updates

- Fix the local storage bug

- Create the option to make a song favorite and load it in the profile
