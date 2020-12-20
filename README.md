# Landing-Page

The project purpose:
--------------------
When scroll into a specific section, the bg of it and the related anchor will change to indicate which section the user already see it in the screen (inside the viewport).

Sequence of project:
---------------------
* First step:
Am looping on all sections to create a li element for each section in the navigation bar by using the following:
- querySelectorAll()
- document.getElementById()
- forEach()
- getAttribute()
- document.createElement()
- document.createTextNode()
- setAttributeNode()
- appendChild()
-----------------------------
* Second step:
Making the scroll to the target more smooth by using the following:
- querySelectorAll()
- forEach()
- addEventListener()
- scrollIntoView()
-----------------------------
* Third step:
Change bg of section and it's link in the navigation bar when found in the screen by using the following:
- addEventListener()
- forEach()
- getBoundingClientRect()
-------------------------------------------------------------------------------------------------------------------

