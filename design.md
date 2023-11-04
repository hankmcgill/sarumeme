# Sarumeme: you "shall not pass" by this PR without cloning this repo!

## Hank's Notes:

### Assumptions:

Here are some of the snippets of the overview that stuck out to me, how I interpreted them, and how I decided to implement my approach to the application.

- "build a front-end application" - ie. no back end, static site
- "consumes the API from LOTR and displays the information in your website" - ie. data should be passed on render from the API to the front end, rather than querying an external database
- "only display the movies, characters, and quotes models. You can ignore the other models" - no need to pass other data from API call to application.
  #### NOTE:
  "the website should make accessible all of the information provided by the API for the movies, characters, and quotes models"
  - I saw this as a sign that I should be passing ALL values associated with these three keys from the API to the application - no more, no less - and that I should be able to render and utilize all nested values associated w/ these keys.
- "feel free to use any additional library you want as long as you use React and TypeScript"
- "users will be using this for web and mobile" - use mobile first design
- "envision a robust data-handling strategy that includes concepts like caching, scalability, and efficient data management"
  #### I found this an interesting idea to think about.
  - Given the stated objectives for this app - for which the goal is not to build a full-stack, but a front-end application - I think the logical approach is to store my API results in local storage, as a means of caching (without using an external server option like Redis), and that I should think about how I can restrict API calls FROM THE FRONT END, so the first thought that came to mind for me is to base calls on whether data is locally cached or not, which applied to a real world situation would both save costs and prevent DOS (but not DDOS) attacks. By storing API data locally, I can prevent unneeded calls to the API, accounting for the API's rate limitations.

### Observations/Pitfalls:

- I need to address a few spots in my codebase where I'm not effectively declaring types for the data I'm passing from component to component.
- Upon reaching the stage of the assessment where I started building the "Quotes" component, I realized that...the data is relational. In retrospect, I could have perhaps better structured my application's API calls and/or state management to associate characters/movies/quotes. I ultimately settled on an iterative approach to finding the relational data via foreign keys, but I think this is an area that I could optimize in the future.

## Styling:

- I chose to take a mobile-first approach to creating my application. To do so I used global CSS variables for styling as much as possible. Make sure you check out the app on multiple sets of media dimensions!

## Accessibility:

- In order to make my application accessible both for developers and for users, I used semantically written TSX components and a high-contrast, easy to read and understand color scheme and language for the UI.

## Deployment:

- I chose to deploy the application using Netflify for the sake of cost saving - while I'd typically deploy a full stack or front-end app to AWS via a CI/CD pipeline (using either CodePipeline, Amplify, or Elastic Beanstalk w/ Github Actions), part of development is looking to save money!

Check out the deployed version of the app here:
https://6546905030cd2a3a54448dc6--famous-sunflower-45f666.netlify.app/
