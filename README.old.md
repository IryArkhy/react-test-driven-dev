# react-test-driven-dev

// enzyme shallow - alows to create a mock version of the app component - shalowly render the React component (if React component has inner child componnents it'll only render the outer JSX for that inner child component but not its' full inner content)

// Global it() function. It takes 2 parameters - string that describes the test and the function that runs the test

// expect() - the function allows us to check the parts of this rendered App component meet certain conditions. As argument we provide the object we want to match a condition on - shallowly rendered App component.

// Snapshots keep a recorded history of your React component. And every time a change is made in your application the snapshot will update and make sure that previous snapshots of components or files or testing files match a new one.

// Why is it useful? Because what if you add behavior and suddenly change how another component you didn't have in mind renders

//In order to unit test the rendering of the component we don't have to test every little mini piece of it. We can test the rendered JSX as a whole

Behavior driven development.

It's a variation of test driven development that splits the development of application features into user scenarios and behaviors that can affect the state of the app by using terms like given when and then BTD hobs capture that different users might expect different results given a certain state of the app when it's a certain time of the year or day and based on these given and when conditions then behavior in the app will occur.