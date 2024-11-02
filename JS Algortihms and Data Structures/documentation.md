- console.log()
- label for = input id
- var1.var2? = optional chaining

- call stack is LIFO

- let variable; = type undefined
- const variable

- isNaN(value) = Check if the value is a number or not. Returns true or false

- setTimeout(callBackFunction/callBackFunctionReference,timeInMilliseconds) = async

- new Audio().

- Infinity is a number that represents positive infinity. -Infinity represents negative infinity.

- Canvas API can be used to create graphics in games using JavaScript and <canvas></canvas>. CanvasRenderingContext2D API is used for drawing shapes, colors, and images on a HTML <canvas> element.
- canvas.getContext("2d") = provides the context for where the graphics will be rendered.
- canvas.width = positive number that represents the width of the canvas.
- canvas.height = positive number that represents the height of the canvas.
- canvas.fillStyle = sets the color, gradient, or pattern used to fill shapes
- canvas.fillRect(x, y, width, height) = draws a filled rectangle on the canvas at a specified position and size.
- canvas.clearRect(x, y, width, height)

- requestAnimationFrame() web API, takes in a callback and is used to update the animation on the screen

- number.toFixed(decimalPlaces) = Converts a number to a string. Rounds the string to a specified number of decimals. Default decimal places is 0. If the number of decimals are higher than in the number, zeros are added.

- class X{} = class.
- constructor(){this.properties} = constructor
- methods in classes dont need function label
- classObject.classMethod.bind(classObject) === classObject.classMethod()

- Array() = array constructor
- Array(x) = new array with size x
- Array.fill(x) = fill array with value x, default will fill it x times array size times
- Array.from(collection) = collection to array

- String() = string constructor
- String.fromCharCode(code) = ASCII code to character

- new Set() = Set is a data structure that only allows unique values
- new Set(array) = removes duplicates
- set.size = number of set elements

- window = object representing the browser window
- window.innerWidth = interior width of the browser window.
- window.innerHeight = interior height of the browser window.

- Call a function returned by a function = function(x)(y)

- new Date() = returns current date and time
- Date.now() = returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
- date.getDate() = retuns a number btwn 1 and 31 representing the day of the month
- date.getHours() = retuns a number btwn 0 and 23 representing the hour
- date.getMinutes() = retuns a number btwn 0 and 59 representing the minute
- date.getMonth() = retuns a number btwn 0 and 11 representing the month
- date.getFullYear() = retuns a number btwn 0 and 11 representing the year

- JSON.stringify(json) = convert json to string
- JSON.parse(string) = convert string to json
- parseInt(string) = Converts a string into an integer, returns int or Nan
- parseFloat(string) = Converts a string into a float
- String(value) = Coverts a value to a string
- Number(value) = converts value to a number and returns the converted value or NaN

- localStorage = saving, retrieving, and deleting items of any JS data type.
- localStorage.setItem("key", JSON.stringify(value)) = save an item, saved items need to be in string format
- localStorage.getItem("key") = retrieve an item
- localStorage.removeItem() = delete an item
- localStorage.clear() = delete all items

- dialogElement.showModal() = Displays a modal dialog box
- dialogElement.close() = Close a modal dialog box

- alert("message") = displays popup

- `` = template literals
- `${variable}` = using variables in template literals

- primitive datatypes = Hold one value at a time

- array.length = returns no. of array elements
- array.push(item) = pushes a value to the end of an array
- array.unshift(item) = adds a value to the start of an array and returns the new array length
- array.pop() = removes last array element and returns it
- array.shift() = removes first array element
- array.includes(item) = returns true or false
- Array.from(arrayLike) = takes an arrayLike and returns an array
- const array1, const array2. Copy array elements or combine with spread operator i.e const combinedArrays = [...array1, ...array2]
- array.map(callBackFunction) = Runs each element through the function and returns a new array.
- array.join("separator") = Concatenates all array elements into a single string with an optional separator that will be used to separate each array element.
- array.toSorted() = Converts array elements into a string, sorts them and returns a new array.
- array.sort() = Converts array elements into a string and sorts them. Mutates the original array.
- array.sort(compareCallbackFuntion(2 parameters)) = Expects a number to be returned and if a -ve number is returned the first item is sorted before the second.
- array.find(callBackFunction) = Returns the value of the first element that fulfills the condition specified in the callBackFunction.
- array.indexOf(element) = Returns element index or -1 if not found.
- array.forEach(function) = Loops through an array and performs the function on each element. Doesn't return, doesn't modify original array.
- array.filter(callBackFunction) = Only keeps the elements that satisfy the callBackFunction
- array.findIndex(callBackFunction) = Finds and returns the index of the first element in an array that satisfies the function or -1 if not found.
- array.reverse() = Reverses the order of the array elements.
- array.splice(indexToStartAt, numberOfItemsToRemove, optionalReplacement) = modifies arrays by removing, replacing, or adding elements at a specified index.
- array.some(callBackFunction) = returns true if the callBackFunction returns true for at least 1 of the array elements.
- array.every(callBackFunction) = returns true if the callBackFunction returns true for every array element.
- array.reduce(callBackFunction) = takes an array and applies a callback function to condense the array into a single value
	-- callBackFunction = array.reduce((accumulator, currentArrayElement){currentArrayElement},'initialValue')
	-- callBackFunction = array.reduce((accumulator, currentArrayElement)=> currentArrayElement,'initialValue')
		---  return value for the callback becomes the value of the accumulator on the next iteration.

- for (let iterator; condition; iteration) {logic;}
- for (const value of iterable) {logic}

- string[index] = character at index index
- string.toLowerCase() = Lower Case
- string.repeat(number) = repeats the stringcurrentArrayElement,'defaultValue'
- string.replace(characterSequenceToBeReplaced(string/regex), stringThatReplacesMatchingSequence) = returns a new string. In the case of multiple parameters the parameters are divided according to capture groups. The first param is the whole matched string
- string.match(regex) = returns an array of match results containing either the first match, or all matches if the global flag is used or null if no match is found.
- string.charCodeAt(index) = Gets the ASCII code for the string character at index index
- string.split() = splits a string into an array of substrings depending on a separator and returns a new array.
- string.split(separator, limit) = Specifies character or regex to be used for splitting / where each split occurs. Upper limit on the number of splits to be found in a string / number of entries to be placed in the new array.
	-- No separator = 1 array element.
	-- "", empty string = every character
	--"separator"
	-- regex = regex
- string.includes(searchValue, optionalStart) = returns true or false if a string contains a specified string. Case sensitive.
- string.substring() =  extracts characters, between two indices (positions), from a string, and returns the substring.
	-- substring(start, end) method extracts characters from start to end (exclusive), doesnt change original string, if start is greater than end, arguments are swapped.
- string.slice(start, end) = extracts a part of a string. Returns the extracted part in a new string. Does not change the original string. A negative number selects from the end of the string.

- functions return undefined by default
- function x(parameter=defaultValue){}

- Falsy = false, 0, "", null, undefined, Nan

- document.querySelector("cssSelector")
- document.querySelector("cssSelector > htmlElement") 
- document.getElementById("idAttributeValue")
- document.querySelectorAll(cssSelector) = returns a NodeList of all elements that match the selector
- document.createElement('tagName') = Create an element
- document.createTextNode('text') = Create a text node.
- document.getElementsByClassName('className') = Get all the elements with this class name, returns a HTMLCollection

- parentElement.appendChild(element) = Add a node or an element as the child of another element.
- htmlInputElement.value = input value
- htmlElement.onclick = functionName
- htmlElement.innerText = text inbetween HTML element selectors
- htmlElement.parentElement = get the parent element
- htmlElement.children = get the children of the element
- htmlElement.element.remove() = remove element
- htmlElement.textContent = sets the text of a node. Set or retrieve the text content of an HTML element
- Use textContent when you want all of the text inside an element, regardless of visibility or formatting. Use innerText when you care about the text as it appears to the user (i.e., considering styling and visibility).
- htmlElement.className = set class name
- htmlElement.style = access inline element style
- htmlElement.style.display = "" // block, none
- htmlElement.classList = list of classes of the element.
- htmlElement.classList.remove('className') = remove class
- htmlElement.classList.add('className') = add class
- htmlElement.classList.toggle('className') = add class if it's not present, removes the class if it's present.
- htmlElement.innerHTML = content in a HTML element, can be other elements. Sets or returns the HTML content inside an element.
- htmlElement.insertAdjacentHTML("stringPosition", "htmlToBeInserted")
	-- htmlElement.insertAdjacentHTML("beforeend", "htmlToBeInserted") = Insert the html as the last child
- htmlElement.type = set type
- htmlElement.id = set id
- htmlElement.setAttribute(attribute, value) = set attribute
- htmlElement.removeAttribute(attribute) = remove attribute
- htmlElement.attribute = set or update attribute
- inputElement.onchange = what happens when value changes
- radioInputElement.disabled = radio button disabled
- radioInputElement.checked = radio button checked

- nodeList.length = Number of entries in the node list

- Math.random() = generates a random number between 0 and 1
- Math.random() * x = generates a random number between 0 and x
- (Math.random() * y) + x = generates a random number between x and y
- Math.floor() = rounds number down to nearest integer
- Math.abs(value) = returns the absolute value
- Math.min(...array)
- Math.max(...array)
- Math.pow(base, exponent); base^exponent
- Math.sqrt(value)

- object.hasOwnProperty() = checks if a property on a given object exists or not. Returns true or false
- Object.values(object) = returns an array with object's values  
- Object.keys(object) = returns an array with object's keys  
- object.key = value
- object[key] = value
- Object.freeze(obj) = Freezes an object and prevents any changes being made to it.
- object destructuring = unpack values from arrays and objects
	-- const {sport, team} = myFavoriteFootballTeam; === const sport = myFavoriteFootballTeam.sport; const team = myFavoriteFootballTeam.team;
	-- const {sport} = myFavoriteFootballTeam.sport === const sport = myFavoriteFootballTeam.sport.sport
	-- function (object.property1, object.property2) === function ({property1, property2})
- object literal
	-- const x = a; const y = b;
	-- const z = {x,y} === z = {x:a,y:b}
- obj = { a: a, b: b, c: c} === obj = { a, b, c}

- element.addEventListener("change", callBackFunctionReference) = event listener for select box inputs, detects when value of an HTML element has changed.
- element.addEventListener("click", callBackFunctionReference) = event listener for clicks
- element.addEventListener("submit", callBackFunctionReference) = event listener for submit
- element.addEventListener("keydown", callBackFunctionReference) = event listener for keydown
	-- keyboardEventObject.key = "the pressed key"
	-- keyboardEventObject.type = "keydown"
- element.addEventListener("keyup", callBackFunctionReference) = event listener for keyup
- audioElement.addEventListener("ended", callBackFunctionReference) = event listener that detects when song ends.
- an object is created when EventListener is triggered: object
	-- object.target.value = value of the element
	-- object.target = element that changed
	-- object.preventDefault() = prevents default action
	
- Regex
-- regex.test(string) = returns true or false depending on if a match is found or not.
	-- /[^a-zA-Z0-9 ]/g = matches anything that is not an alphanumeric character
	-- const y = /string/ => Matches with "string"
	-- const y = /string|string2/ => Matches with "string" or "string2"
	-- const y = /(string|string2) string3/ => Capture group that matches with "string string3" or "string2 string3"
	-- const y = /(string)?string2/ => String is optional
	-- const y = /(?:string)string2/ => String is optional but not captured
	-- const y = /^string2/ => Pattern match starts at the beginning of the full string
	-- const y = /string2$/ => Match the end of the string
	-- const y = /string/flag
	-- const y = /string/g => global flag. Tells the pattern to continue looking after it has found a match
	-- const y = /string/i => case insensitive flag.
	-- const y = /[string]/ => Character Class. Tells the pattern to match the characters individually / any character
	-- const y = /[string]+/ => Matches a pattern that occurs one or more times, matches one or more consecutive 'string' characters
	-- const y = /[string]*/ => Matches a pattern that occurs 0 or more times, matches one or more consecutive 'string' characters
	-- const y = /[0-9]/ => Matches any digit between 0 and 9
	-- const y = /[a-z]/ => Matches any character between a and z
	-- const y = /\d/ => character class for /[0-9]/	
	-- use \ to escape characters in regex. No need to escape characters if there's a character class
	--- \s = character class for whitespace 
	