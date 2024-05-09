
/*
https://javascript.info/size-and-scroll

Geometry properties are calculated only for displayed elements.
If an element (or any of its ancestors) has display:none or is not in the document, then all geometry properties are zero (or null for offsetParent).
For example, offsetParent is null, and offsetWidth, offsetHeight are 0 when we created an element, but haven’t inserted it into the document yet, or it (or its ancestor) has display:none.
We can use this to check if an element is hidden, like this:
*/
function isElementHidden(elem) {
  return !elem.offsetWidth && !elem.offsetHeight;
}
