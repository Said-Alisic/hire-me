# Interested in working for shield?

Give us a chance to see your beautiful code! 🤩 

How to get started:
- Fork this repository
- Use [Nx](https://nx.dev/) to generate a small application with [Angular](https://angular.io/) + [NestJS](https://nestjs.com/)
- Setup [Ant Design for Angular](https://ng.ant.design/docs/introduce/en)
- Create a *sign up application* that utilize the components from the UI framework
- Describe your design decisions and setup instructions in the README.md of the forked repository

The application should be able to do 3 things:
1. Enable users to sign up via a form (`firstName`, `lastName`, and `email`)
3. Only allow users to sign up once (based on `email`)
4. Show a list of users who signed up

There are no other requirements than that — take a look at the [Wireframes](#wireframes) for inspiration.

If you have any questions feel free to reach out to jobs@shieldapp.ai ☺️

## FAQ
- **Should I use a real database like Postgres to store the information or can I simply store it in a variable?**
    - It's perfectly fine if you use a variable 👌 Please add a `docker-compose.yml` file in case you decide to use a database like Postgres
- **How long should it take me to complete the assignment?**
    - It should take you less than 8 hours but it depends on your Typescript wizard magic skills 🪄
- **What about tests?**
    - Unit [jest](https://jestjs.io/), E2E using [Cypress](https://www.cypress.io/) and [supertest](https://github.com/visionmedia/supertest) are heavily used here at @shieldapp so it won't hurt if you include them 😎 

## Wireframes

### Sign up

![image](https://user-images.githubusercontent.com/16419971/114538338-928f1000-9c53-11eb-8be9-702381d7dbde.png)


### Users

![image](https://user-images.githubusercontent.com/16419971/114539208-8ce5fa00-9c54-11eb-81bd-70387184cd2d.png)


# Documentation - Said-Alisic

Finished development of application with basic design from Ant Design for Angular (ng-zorro-antd) according to the wireframes

### Technologies Used
- npx create-nx-workspace
- Nest.js
- Angular
- Typescript
- Ant Design for Angular - ng-zorro-antd
- Jest and Cypress for testing
- Heroku for production build deployment

## Demo 
Although it wasn't a requirement, a demo of the application can be found [here](https://sign-up-app-saidalisic.herokuapp.com/)! It was mostly done for my satisfaction and self-improvement to research deploying with Heroku.


## Building and running project on local machine

**Prerequisites for running on local machine**
1. Node.js
2. npm

**Running the application on the local machine**
1. Pull or clone the repository to a folder of your choosing with git
2. Navigate to the `sign-up-app`
3. Run `npm install` to install all necessary dependencies
4. Run `npm run dev` to run both the api and client server concurrently for development
5. Navigate to `localhost:4200` to access the application
6. Navigate to `localhost:3333/api/users` to access the users API data from our backend

**Building and running the production build**
1. Run `npm run build` to build both the api and client server production builds
2. Run `npm start` to start the production build server
3. Navigate to `localhost:3333/` to access the production build application


## Design Decisions

**Angular.json**
- Added `dev` command under `scripts` to run both the backend and client servers concurrently in one terminal to save time during development
- Overrode the `build` command under `scripts` to build both the backend and client concurrently for building the project on Heroku
- Overrode the `start` command under `scripts` to serve only the backend server which will then serve the client from its root path

**api/**
- `app.module.ts`: Imported the  `ServeStaticModule` and `join` modules to serve static files and join the client production build with the api build to run both the back- and frontend servers together (this was mainly done for deploying the application on Heroku).
- Although the API handles models by the name of `User` or `Users`, as the api will not be expanded upon and I focused on the functionality of the API, I decided to keep the naming of the files as `app.[name].ts` instead of renaming them to begin with `users`.
- `app.service.ts`: Holds our business logic (or the *fake database* connection using a locally stored variable :sweat_smile:) and handles the `GET` and `POST` function of the API. I kept the `getUser` for getting a single user from our *database*, because I originally wished to use this to check if a user with an email already exists but couldn't come up with any bright ideas on how to implement it neatly, so I just kinda...left it...there...
- `app.controller.ts`: Not much to say, it does what a controller does and the `postUser` throws an error if a user with an email identical to an existing user's email is found. 

**client/**
- `app.routing.ts`: Our routing module which will render the correct component depending on the URL route. Routes are split into another module instead of the main `app.module.ts` to promote high cohesion and code understandablity 
- `app-antd.module.ts`: Our Ant-Design module that holds the necessary UI design imports for our components to render. Split into another module for better understandability and faster code restructuring
- The components for different pages (signup, success, users, error) are stored in their respective folders under their main *pages* folder to organize code.
- The `error` page was implemented to prevent (ugly!!) 404 errors occurring if the user navigates to a page that doesn't exist and can help guide the user to the proper destination afterwards. :wink:
- `users.service.ts`: API connection has been stored here for the users, as I believe it's better to keep the users API connection under one file instead of splitting the connection across many services.ts files. E.g., the `signup.component.ts` is not part of the `/users` folder even if it includes the `users.service.ts` import, but it is because it only handles the form submission of creating a new user (i.e. signing up). It can be argued that the `/signup` folder could be stored under the `/users` folder, but I like to organize things this way when working solo! :smirk:
- `signup.component.ts`: Creates a form and adds validation checking of the input fields. Moreover, the `handleSubmitForm()` method will check if the form input fields are properly filled in and mark the keys *dirty* (i.e. invalid) if any of them aren't valid. Additionally, the method will only redirect the user if a user with the same email does not exist, otherwise an error will be throw from the API and the user will be informed to try another email. I wasn't sure how to properly redirect directly through the button DOM element, so I used the `this.router.navigate(['/success'], { state: user });` function to pass our newly created user's name along with the URL redirect; this could perhaps be redesigned into something better, but it works well for a simple task, so I decided to keep it.

**testing**
- Not much testing had been implemented, but the backend api controllers are being tested with Jest to check if they return the proper data after running. Also, these tests can probably be configured to be more versatile.
- Cypress has been used to test if a few DOM elements are rendered properly, however, I did not implement any `users.service.ts` testing because of little knowledge and, sadly, not much time to research well enough right now. :disappointed_relieved:


## Final notes
The project took about 10 hours to finish the necessary requirements due to little knowledge of Angular, Nest.js and npx, additionally, I wished to adhere to some proper Angular and Nest.js coding standards, thus, extensive research was done before proceding to fully implement some features or code was refactored to work better or more understandable.

Moreover, I was intrigued by the way Angular and Nest.js work, so I, before refactoring the code to fit the actual requirements, had implemented a full CRUD API in our backend and also more actions on the users table on the client side. However, I discarded these changes and stored them into a separate git repository to research and learn more new things later, so these *bonus* features will not be seen in the application of this repository. I would say this added another 4-6 hours to the entire project development time, so about 15 hours in total to finish it. 

Was fun to try! :smile:




