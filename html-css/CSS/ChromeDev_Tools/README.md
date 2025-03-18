# CSS Box Modeling 

A CSS Box model determines 
  - how much space an element takes up.
  - how far it is away from other elements.

1. Setting a fix height and width to the button can make the contents within it overflow the button, to avoid this we will stop setting the buttons height and width and instead we will start assigning the size of the box with the help of padding.
These properties not only prevent the data from overflowing but also adjusts the size of the element when the new data is being added to it.

### we now adjust the size of an element with the help of the properties like padding,border and margin.

2. vertical-align: top; => this property is used to align the borders of the buttons, since browser by default aligns the text of the buttons altogether.

3. Border of an element will increase the size of the element by 1 px

  - As an example -> The border of the join button will make it look taller than the subscribe button, even when the same size of padding has been assigned to both of them, to avoid this we can decrease the size of the height of join button, to make it look similar to the size of the subscribe button.