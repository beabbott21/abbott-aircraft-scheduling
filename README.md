### Aircraft Scheduler
This is a basic aircraft scheduling demonstration, thrown together quickly with some assumptions made and some corners cut.

## Assumptions Made
I made several assumptions during the development of this exercise. Most of the assumptions were made to save time for absolute necessities. 
A major assumption I made in developing this is that I would not be needing to add the ability to account for multiple days or multiple aircraft in future iterations. This is inline with the design prompt. However, if I did anticipate adding more functionality, I would have invested more time in a more robust state management setup. 

Following the trend of assuming no further development would take place here, I chose to invest only a small amount of time writing tests - basically enough to show how tests could be used. This is not an indication of my feeling towards tests or meant to suggest I don't see their value in a normal development environment.

I also made the assumption that users would prefer drag and drop to some kind of add/remove/move button clicking system. I think this is a good assumption but would normally expect to get UX input from designers or users.

Furthermore, I'm assuming the user will be using the application exclusively on desktop. This is a bad assumption in 2022, but with little time and no mobile mockup, responsiveness wasn't in the cards.


## Nice To Haves 

Due to time constraints, many things I would like to have implemented didn't make it in. Given more time and with the expectation that development would continue on this project, these are some of the things I would have added:

Error and Loading states - I accounted for error and loading states in the api but didn't get them implemented in the frontend. In this case, I know exactly what the data looks like and expect to get it almost instantly so it's not a big deal but certainly something I would normally want.

Design Theme - With more time, I would have liked to set up an Emotion theme context to ensure design consistency and facilitate niceties like dark mode. At very least, I tried to abstract and reuse some basic design components. 

Styling - As you can see, the styling is very minimal but form follows function.

Accessibility and Internationalization - I'm only hoping that I chose colors that are friendly toward those with impaired vision. Although there is not much text, a non-english speaker may struggle. Although the functionality is pretty straightforward, some on-hover tips and titles would also be helpful as there aren't really any instructions provided.

Responsiveness, Tests, Reducer/Context for state - Covered in assumptions but I want to reiterate how much I didn't enjoy shipping a project without these.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.




