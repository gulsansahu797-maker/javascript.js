//React fiber Architecture. 
// Virtual DOM: An in-memory representation of the UI.



// React Fiber: React's internal architecture for organizing and scheduling rendering work.


// Keys in lists = 
// const students = [
//   { id: 1, name: "Gulsan" },
//   { id: 2, name: "Rahul" },
//   { id: 3, name: "Aman" }
// ];

// function App() {
//   return (
//     <ul>
//       {students.map(student => (
//         <li key={student.id}>
//           {student.name}
//         </li>
//       ))}
//     </ul>
//   );
// }



// Reconciliation: a) the algorithm react uses to diff one tree with anothr to determine which parts need to be change.
//                b)The process React uses to determine what has changed in the UI.

//  Virtual DOM in React = The Virtual DOM is a lightweight, in-memory representation of the user interface that React uses to describe what should appear on the screen.


//  React Fiber = React Fiber is React's internal reconciliation architecture that represents component work as units and helps React organize, prioritize, and schedule rendering.

//  Hook in React.js = A Hook is a special function in React that allows functional components to use React features such as state, effects, context, and references.

// why do use hooks = Manage data using useState().
// Handle side effects using useEffect().
// Share data using useContext()
// Access DOM elements using useRef().
// Reuse stateful logic with custom Hooks.

// Example of React Hook = 
// vimport { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Count: {count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Click Me
//       </button>
//     </div>
//   );
// }

// export default App; 

// keys in React = Keys are stable identifiers used to help React match list items between renders.

// fiber =React Fiber is an internal architecture of React that helps manage, prioritize, and schedule rendering work efficiently.




