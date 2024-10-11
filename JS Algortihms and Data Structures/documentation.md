- console.log()
- label for = input id

- let variable; = type undefined
- const variable

- alert() = displays popup
- Number(value) = converts value and returns the converted value or NaN

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

- for (let iterator; condition; iteration) {logic;}
- for (const value of iterable) {logic}

-string.toLowerCase() = Lower Case
- string.repeat(number) = repeats the string
- string.replace(characterSequenceToBeReplaced(string/regex), stringThatReplacesMatchingSequence) = returns a new string.
- string.match(regex) = returns an array of match results containing either the first match, or all matches if the global flag is used or null if no match is found.

- functions return undefined by default
- function x(parameter=defaultValue){}

- Falsy = false, 0, "", null, undefined, Nan

- document.querySelector("cssSelector")
- document.getElementById("idAttributeValue")
- document.querySelectorAll(cssSelector) = returns a NodeList of all elements that match the selector

- htmlINputElement.value = input value
- htmlElement.onclick = functionName
- htmlElement.innerText = text inbetween HTML element selectors
- htmlElement.style = access inline element style
- htmlElement.style.display = "" // block, none
- htmlElement.classList = list of classes of the element.
- htmlElement.classList.remove('className') = remove class
- htmlElement.classList.add('className') = add class
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
- const {sport, team} = myFavoriteFootballTeam; === const sport = myFavoriteFootballTeam.sport; const team = myFavoriteFootballTeam.team;
- const {sport} = myFavoriteFootballTeam.sport === const sport = myFavoriteFootballTeam.sport.sport

- element.addEventListener("change", callBackFunctionReference) = event listener for select box inputs
- element.addEventListener("click", callBackFunctionReference) = event listener for clicks
- element.addEventListener("submit", callBackFunctionReference) = event listener for submit
- an object is passed when EventListener is called: object
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
	