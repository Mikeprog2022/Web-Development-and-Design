- jQuery
-- $(document).ready(function() {}) = Runs after HTML is rendered
-- All jQuery functions start with a $
-- $('htmlElement/cssSelector').addClass("") = add class
-- $('htmlElement/cssSelector').removeClass("") = remove class
-- $('htmlElement/cssSelector').css("property", "value"); = allows you to change the CSS of an element
-- $('htmlElement/cssSelector').prop("htmlElementProperty", value) = allows you to adjust the properties of elements
-- $('htmlElement/cssSelector').html("<tags>text<tags>") = lets you add HTML tags and text within an element. Any content previously within the element will be completely replaced with the content you provide using this function.
-- $('htmlElement/cssSelector').text("") = alters text without adding tags
-- $('htmlElement/cssSelector').remove() = will remove an HTML element entirely.
-- $('htmlElement/cssSelector').appendTo("htmlElement/cssSelector") = allows you to select HTML elements and append them to another element.
-- $('htmlElement/cssSelector').clone() = makes a copy of an element
-- $('htmlElement/cssSelector').parent() = allows you to access the parent of whichever element you've selected.
-- $('htmlElement/cssSelector').children() = allows you to access the children of whichever element you've selected.
-- $(".className:nth-child(x)") = xth child of element with class className
-- $(".className:odd") = selects based on index position starting with index 0

-Sass/ SCSS
-- $variableName: cssProperty / value;
-- Mixin = a group of CSS declarations that can be reused throughout the style sheet.
-- @mixin mixinName{} ; cssSelector{@include mixinName}
-- @mixin mixinName($parameters){} @include mixinName($parameters){}
-- @mixin mixinName(){ @if condition{}@esle if condition{}@else{} }
-- @for is used in two ways: "start through end" or "start to end". "start to end" excludes the end number as part of the count, and "start through end" includes the end number as part of the count.
-- @for $variable from a to b{}; @for $variable from a through b{}
-- #{$variable} = syntax to combine the variable with text to make a string
-- @each $variable in list/map{}
-- @while condition{}
-- Partials = separate files that hold segments of CSS code. Name starts with _. Import them using "@import 'partialFileName(_ and file extension not needed)'"
-- cssSelector{ @extend otherCssSelector;} = reuse the rules written for one element, then add more for another