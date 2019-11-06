# lab037andy
Day 37 of Lab: Refactor To-Do App to use Redux, yo

Lab 36/////////////////////////////////////////

Convert the state management to a Redux Store.

Create a Redux Store and two reducers:
A todoList reducer, to track the list
A details reducer, to track which item detail to show

Wire up the components to subscribe to the store for state and actions

Lab 37//////////////////////////////////////////

State Management:

Convert the state management to a Redux Store.

Create a Redux Store, a To Do store/reducer/action set

Wire up the components to subscribe to the store for state and actions

Form Handling:

Convert ths current form rendering/submission process into one of either

React JSON Schema Form
Redux Form
A form library of your own choosing

Lab 38//////////////////////////////////////////

To Do - With a Redux Store and Fully Connected to an API

Upgrade the provided todo application
Keep the settings context in place so that you can manage those options within the components

Use Redux for global state management
For the to do form, if you’re using JSON Schema Forms …
Fetch the To Do schema from the server in the form component on it’s initial render

Bonus points if you do this with <Suspense>
Convert the To Do forms to use the live schema
For all CRUD ops, convert the native fetch...() calls from being in the components to instead invoking action methods
These should return functions that dispatch the real action
You’ll need to have thunk in place to make this work
Update the results in the store
Question – Do you update the full store after every write operation or do you try and keep your store in sync manually? How you approach/answer this will determine what action(s) you dispatch.