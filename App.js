//heading JS object (ReactElement)
//const heading = React.createElement("h1", { id: "heading" }, "Hello World form React!");




/* 
const nestedStructure = React.createElement(
	"div",
	{ className: "parent" },
	React.createElement(
		"div", { className: "child" },
		
			React.createElement("h1", { id: "heading" }, "Hello World form React h1!"),
		
	)
); 
*/

const nestedStructure = React.createElement(
	"div",
	{ className: "parent" },
	[
		React.createElement(
			"div", { className: "child" },
			[
				React.createElement("h1", { id: "heading" }, "Hello World form React h1!"),
				React.createElement("h2", { id: "heading" }, "Hello World form React h2!")
			]
		),
		React.createElement(
			"div", { className: "child" },
			[
				React.createElement("h1", { id: "heading" }, "Hello World form React h1!"),
				React.createElement("h2", { id: "heading" }, "Hello World form React h2!")
			]
		)

	]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
//using heading object create h1 tag that browser understands and put inside root element.
// root.render(heading);


root.render(nestedStructure);




