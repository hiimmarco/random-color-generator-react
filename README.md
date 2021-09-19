# MB - Random Color Generator React

This is a random color generator built with react. It can either create a completely random color or a random color based on hue and luminosity (e.g. "blue" and "dark).


## Design
Figma Project: https://www.figma.com/file/3ZqQTPiEpN1EPHuXu8TA0Q/Random-Color-Generator-React?node-id=0%3A1

### Default state
![Default](https://user-images.githubusercontent.com/25134498/133763512-8b199e13-89d1-4701-8559-599766975299.png)

### Random color
![Random-Color](https://user-images.githubusercontent.com/25134498/133763527-78123088-e55d-4422-b9f7-9c7e67a4d320.png)

### Specified color
![Specified-Color](https://user-images.githubusercontent.com/25134498/133763535-fe5f72cc-cdb1-44d4-8228-5da650667e00.png)


## React Components
 - Header
 - Random color generator function (npm randomcolor)
 - Function component with button to generate and show random color
 - Function component with input fields and a button to generate a random color based on user input
 - Output fields to generate and show random color

The components for random color and random color based on user input are two seperate components which both interact with a single component providing the hex value as well as an example of the generated color.

While the components for random color and random color based on user input will be rendered by default, the component roviding the hex value as well as an example of the generated color will only be rendered after the frist click on the respective button.
