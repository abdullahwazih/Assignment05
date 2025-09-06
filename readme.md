1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

  getElementById: returns a single element that matches the given id. Since IDs are unique, you only get one element.
  getElementsByClassName: returns a live HTMLCollection of all elements with that class. You usually need to loop through it.
  querySelector: returns the first element that matches.
  querySelectorAll: returns a NodeList of all elements that match the CSS selector.

2. How do you create and insert a new element into the DOM?

  Create the element with document.createElement.
  Add text/content using element.textContent or element.innerHTML.
  Add attributes or classes with setAttribute or classList.add.
  Insert it into the DOM with methods like appendChild, prepend, before, or after.

3. What is Event Bubbling and how does it work?

Event bubbling means that when an event happens on an element (say, a button click), the event first runs on that element, and then it moves upward through its parent elements, all the way up to the document.

4. What is Event Delegation in JavaScript? Why is it useful?

  Event delegation is a technique where you put an event listener on a parent element instead of every child element. Then, when a child is clicked, the event bubbles up and the parent’s listener checks which child triggered it.

  It’s useful because:

    You don’t need to attach listeners to hundreds of child elements.
    It works even if new elements are added later dynamically.

5. Difference between preventDefault() and stopPropagation()

  preventDefault() stops the default browser action.
  stopPropagation() stops the event from bubbling up to parent elements.
