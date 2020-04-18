1. What problem does the context API help solve?

- Context API helps solve the application state management. It gives the option to have an application level context
  which then we can access from any component without having to drill any props.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do?

- So the Redux store to me is like a restaurant that manages to serve food to customers, as Redux manages our application
  state. The client would be the user, that then when they place an order that will be our action that will be
  taken to the cook by the server. In this case the server is the dispatch. The order will get to the chef and the meal will be made and served. The chef here is our reducer that will take the action and the current state and spit out
  a new state so that our UI can re-render.

3. Why is the store known as a 'single source of truth' in a redux application?

- Our Redux store is a single source of truth because it's the only place that represents
  the application state. The only way to change the state is to dispatch an action which
  will change the state using the reducer.

4. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- An application state is when keep our state at the application level, which means no prop drilling needed and
  that our state will be managed either by dispatching actions with redux or consuming with context API.

- The application state is usually chosen when we have a complex state and a complex component tree. So we get the
  benefit of not having to drill the props down the tree. But if our App is not as complex, we can get away by
  managing our state at the component level.

5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- Redux thunk is a middleware library that allows us to run some piece of code 'usually async'
  before our actions are dispatched to the reducer.

- It gives our action-creators the ability to get access to the dispatch which than we can
  run some code and dispatch any actions when we're ready. We do that by making our
  action create return a function which is called a thunk, which itself can take the dispatch as an argument
  and use it to dispatch actions to the reducer.

6. What is your favorite state management system you've learned and this sprint? Please explain why!-

- I personally prefer using Redux over Context API, the reason why is because I like the Redux flow of
  managing the state, which makes more sense to me and it's more logic to do it that way. But I can see
  myself using context API in some of my applications that doesn't have a complex state tree.
