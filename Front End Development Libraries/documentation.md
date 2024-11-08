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


- React

-- Uses jsx = js within html. Js is included in {} Babel(transpiler) compiles JSX to js

-- ReactDOM.render(jsxComponentToRender, targetNode) -> ReactDOM.render(JSX, document.getElementById('root')) = places JSX into React's own lightweight representation of the DOM. JSX myst return a single element.

-- {/* */} = jsx comments

-- Html class="" === className=""

-- Close all html tags

-- Stateless functional component = JS function that returns either JSX or null = const componentName = function() { return ( <div className='customClass' /> );};

-- {property parameters} = Use in components. Enclose in {} to be evaluated as js

-- stateless component is a class that extends React.Component = class componentName extends React.Component { constructor(props) { super(props); } render() { return ( JSX ) } }
	- render() = returns html(jsx) or null

-- < componentName /> = renders the markup for that component

-- ReactDOM.render(<componentToRender />, targetNode)

-- component.defaultProps = { propertyName: defaultValue } => Default properties

-- component.propTypes = {property: PropTypes.dataType.isRequired} => Enforce prop data type
	- optionalArray: PropTypes.array,
	- optionalBool: PropTypes.bool,
	- optionalFunc: PropTypes.func,
	- optionalNumber: PropTypes.number,
	- optionalObject: PropTypes.object,
	- optionalString: PropTypes.string,
	- optionalSymbol: PropTypes.symbol,
	
-- import PropTypes from 'prop-types'; = Import PropTypes

--  stateful component => class component that does maintain its own internal = class componentName extends React.Component { constructor(props) { super(props); this.state = {}; } render() { return ( JSX ) } } 

-- Update state using this.setState({})

-- Methods in component classes = class component that does maintain its own internal = class componentName extends React.Component { constructor(props) { super(props); this.state = {}; this.methodName = this.methodName.bind(this)  } methodName(){}; render() { return ( JSX ) }; } 

-- this.setState((state, props)=>(return {}))

-- Can write js into the render(){} before return

-- lifecycle methods = allow you to catch components at certain points in time. 

	- componentDidMount() = called after a component is mounted to the DOM. Any calls to setState() here will trigger a re-rendering of your component. 
	- shouldComponentUpdate(nextProps, nextState) = call when child components receive new state or props, and declare specifically if the components should update or not. return true or false.

-- {condition && html} = Will render if true, if false nothing will render

-- ReactDOMServer.renderToString(<component/>) = render a React component on the server.


- Redux

-- Redux store = house where the entire state of your app would be defined by a single state object. Any time any piece of your app wants to update state, it must do so through the Redux store. Object which holds and manages application state. Redux methods are available from a Redux object.

-- Redux.createStore(reducerFunction) = create redux store

-- reduxStore.getState() = retrieve the current state held in the Redux store object.

-- Action =  a JS object that contains information about an action event that has occurred. all state updates are triggered by dispatching actions. Redux store receives these action objects, then updates its state accordingly. actions must carry a type property that specifies the 'type' of action that occurred.

-- Create action -> send action to redux store to update state through action creators(function that returns an action)

-- store.dispatch(action / actionCreator() ) = Used to dispatch actions to the Redux store

-- Reducer = defines how to respond to dispatched actions. reducer(readOnlyState, action) => new state. Always return a new state.

-- store.subscribe() = subscribe listener functions to the store, which are called whenever an action is dispatched against the store.

-- Redux.combineReducers({
	statePropertiesForReducer1: reducer1,
	statePropertiesForReducer2: reducer2
}) = When an action is dispatched it's dispatched to both reducers. The state contains states for both in one object with the key being the key in the combine and the value being the current state value. Each reducer only updates its respective piece of state

-- Redux Thunk middleware = Middleware designed specifically for asynchronous endpoints. 

-- Redux.applyMiddleware(ReduxThunk.default) = To include Redux Thunk middleware, you pass it as an argument to Redux.applyMiddleware() and this is then passed on as a second parameter in creating a redux store.

-- Create async action creator = return a function that takes dispatch as a param. Within this you can dispatch and perform async operations. const asyncName = (){return function(dispatch){dispatch(action)}}


- React Redux

-- you need to use the react-redux package.

-- React Redux provides a small API with two key features: Provider and connect

-- ReactRedux.Provider = Wraps react app. This wrapper then allows you to access the Redux store and dispatch functions throughout your component tree. Takes 2 props i.e store and child components.
	- const Provider = ReactRedux.Provider;
	- class parentComponentName extends React.Component { constructor(props) { super(props); this.state = {}; this.methodName = this.methodName.bind(this)  } methodName(){}; render() { return ( <Provider store={store}>  <childComponent/> </Provider>  ) }; } 
	
-- mapStateToProps(state) = provide state to react components.  take state as an argument, then return an object which maps that state to specific property names. These properties will become accessible to your component via props

-- mapDispatchToProps() = provide dispatch to components

-- mapStateToProps() and the mapDispatchToProps() = use them to map state and dispatch to the props of one of your React components.

-- ReactRedux.connect(mapStateToProps, mapDispatchToProps)(component)