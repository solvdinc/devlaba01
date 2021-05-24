# React Basics

## Deadline 03 June 2021 23:59 (GMT+3)

[Template](https://www.figma.com/file/dcRvFwl3YZXREID4AAV12F/Traffic-Light) 
(You have to sign up to see the styles. Let me know if you have any issues.)

Your task is to implement the switchable, simplified and pixel-perfected version traffic light using React library and Babel. Create three containers which represent three states of the traffic light. Render the first container into the page using **ReactDOM.render** method and switch the states using **ReactDOM.render** and **setTimeout** or **setInterval**. The states should be looped (the red state should go after the green state).

Out of the scope, but could be useful for a deeper understanding of how reconciliation works: When the main task will be done, check how React updates the DOM on each **ReactDOM.render** call. Try to break the first rule of the reconciliation algorithm by changing the root element of each state. For example, the root element for the red state is div, for yellow - section, etc. Take a look now at how React updates to DOM.

Good Luck!