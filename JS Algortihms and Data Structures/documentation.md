- console.log()
- label for = input id
- var1.var2? = optional chaining

- call stack is LIFO

- let variable; = type undefined
- const variable

- isNaN(value) = Check if the value is a number or not. Returns true or false

- setTimeout(callBackFunction/callBackFunctionReference,timeInMilliseconds) = async

- new Audio().

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
- String(value) = Coverts a value to a string
- Number(value) = converts value and returns the converted value or NaN

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
- array.sort() = Converts array elements into a string and sorts them.
- array.sort(compareCallbackFuntion(2 parameters)) = Expects a number to be returned and if a -ve number is returned the first item is sorted before the second.
- array.find(callBackFunction) = Returns the value of the first element that fulfills the condition specified in the callBackFunction.
- array.indexOf(element) = Returns element index or -1 if not found.
- array.foreach(function) = Loops through an array and performs the function on each element. Doesn't return, doesn't modify original array.
- array.filter(callBackFunction) = Only keeps the elements that satisfy the callBackFunction
- array.findIndex(callBackFunction) = Finds and returns the index of the first element in an array that satisfies the function or -1 if not found.
- array.reverse() = Reverses the order of the array elements.
- array.splice(indexToStartAt, numberOfItemsToRemove, optionalReplacement) = modifies arrays by removing, replacing, or adding elements at a specified index.

- for (let iterator; condition; iteration) {logic;}
- for (const value of iterable) {logic}

- string.toLowerCase() = Lower Case
- string.repeat(number) = repeats the string
- string.replace(characterSequenceToBeReplaced(string/regex), stringThatReplacesMatchingSequence) = returns a new string.
- string.match(regex) = returns an array of match results containing either the first match, or all matches if the global flag is used or null if no match is found.
- string.split() = splits a string into an array of substrings depending on a separator and returns a new array.
- string.split(separator, limit) = Specifies character or regex to be used for splitting / where each split occurs. Upper limit on the number of splits to be found in a string / number of entries to be placed in the new array.
	-- No separator = 1 array element.
	-- "", empty string = every character

- functions return undefined by default
- function x(parameter=defaultValue){}

- Falsy = false, 0, "", null, undefined, Nan

- document.querySelector("cssSelector")
- document.getElementById("idAttributeValue")
- document.querySelectorAll(cssSelector) = returns a NodeList of all elements that match the selector
- document.createElement('tagName') = Create an element
- document.createTextNode('text') = Create a text node.
- parentElement.appendChild(element) = Add a node or an element as the child of another element.

- htmlINputElement.value = input value
- htmlElement.onclick = functionName
- htmlElement.innerText = text inbetween HTML element selectors
- htmlElement.parentElement = get the parent element
- htmlElement.element.remove() = remove element
- htmlElement.textContent = sets the text of a node. Set or retrieve the text content of an HTML element
- Use textContent when you want all of the text inside an element, regardless of visibility or formatting. Use innerText when you care about the text as it appears to the user (i.e., considering styling and visibility).
- htmlElement.style = access inline element style
- htmlElement.style.display = "" // block, none
- htmlElement.classList = list of classes of the element.
- htmlElement.classList.remove('className') = remove class
- htmlElement.classList.add('className') = add class
- htmlElement.classList.toggle('className') = add class if it's not present, removes the class if it's present.
- htmlElement.innerHTML = content in a HTML element, can be other elements. Sets or returns the HTML content inside an element.
- htmlElement.insertAdjacentHTML("stringPosition", "htmlToBeInserted")
	-- htmlElement.insertAdjacentHTML("beforeend", "htmlToBeInserted") = Insert the html as the last child

- nodeList.length = Number of entries in the node list

- Math.random() = generates a random number between 0 and 1
- Math.random * x = generates a random number between 0 and x
- (Math.random * x) + y = generates a random number between y and x
- Math.floor() = rounds number down to nearest integer
- Math.abs(value) = returns the absolute value

- object.key = value
- object[key] = value
- Object.freeze(obj) = Freezes an object and prevents any changes being made to it.
- object destructuring = unpack values from arrays and objects
	-- const {sport, team} = myFavoriteFootballTeam; === const sport = myFavoriteFootballTeam.sport; const team = myFavoriteFootballTeam.team;
	-- const {sport} = myFavoriteFootballTeam.sport === const sport = myFavoriteFootballTeam.sport.sport
	-- function (object.property1, object.property2) === function ({property1, property2})

- element.addEventListener("change", callBackFunctionReference) = event listener for select box inputs, detects when value of an HTML element has changed.
- element.addEventListener("click", callBackFunctionReference) = event listener for clicks
- element.addEventListener("submit", callBackFunctionReference) = event listener for submit
- element.addEventListener("keydown", callBackFunctionReference) = event listener for keydown
	-- keyboardEventObject.key = "the pressed key"
	-- keyboardEventObject.type = "keydown"
- audioElement.addEventListener("ended", callBackFunctionReference) = event listener that detects when song ends.
- an object is created when EventListener is triggered: object
	-- object.target.value = value of the element
	-- object.preventDefault() = prevents default action
	
- Regex
	-- const y = /string/ => Matches with "string"
	-- const y = /string/flag
	-- const y = /string/g => global flag. Tells the pattern to continue looking after it has found a match
	-- const y = /string/i => case insensitive flag.
	-- const y = /[string]/ => Tells the pattern to match the characters individually
	-- const y = /[string]+/ => Matches a pattern that occurs one or more times
	-- const y = /[0-9]/ => Matches any digit between 0 and 9
	-- const y = /\d/ => character class for /[0-9]/	
	-- use \ to escape characters in regex
	-- no need to escape characters if there's a character class
	--- \s = character class for whitespace 
	