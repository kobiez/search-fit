# Search-in-fit

#### New, nice looking, and convenient search engine for [Freefit](https://freefit.co.il/) website.

### Website

The app deployed to heroku, try it [here](https://search-in-fit.herokuapp.com/) .

### Website

The app deployed to heroku, try it [here](https://search-in-fit.herokuapp.com/) .

### Technologies

To create this app I used **Node.js** for the server and **React.js** for the client.
For the desigen I used **Material UI** library.

### Installation

- To install the app `npm install`

### Start

- To start the app `npm start`

- The app will run on localhost:5000

### Test

- To start tests `npm run test`

### Usage 

On the screen you will see the search box, this search box is a combo box, start typing and you will receive suggestions list to choose from,
You must select one parameter from the suggestions list, and the selected parameter will be added to the search box,
then just press the search button, to get the results.
Each result will be represented inside a card, the main section at the top of each card is a link to the activity
in freefit website. At the bottom of each card you will see two links, the first one will navigate you to the 
activity home page if it exist, the second one also navigates you to the activity page at freefit site.

Please note:

- You can search a maximum of two parameters for each search, one activity and one place.
- If you try to give as parameters two places or two activities, you will get results only for the first one,
    whether you search for places or activities.

### Contributing

Any suggestions, ideas and pull requests about how to improve the app will be welcome.