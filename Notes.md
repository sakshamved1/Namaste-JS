# 3 Hoistings

    - Hoisting is a Phenomenon in JS where You can access the variables and functions even before initializing them.

    - Everytime when a function invokation Happens a  new execution context.

# EP-04 | How functions work in JS ❤️ & Variable Environment

    - Whenever fucntion invokation happens A execution context is created and pushed inside call stack
    ![How Code executes in JS](image.png)

# EP-05 | SHORTEST JS Program 🔥window & this keyword

    - Window is Global object created along with Global execution context
    - this is created for all Execution context [GEC, FEC];
    - this refers to the window object at Global level
    - Google uses v8 engine

# EP-06 | undefined vs not defined in JS 🤔

    - undefined is a placeholder for a variable that has been declared but not yet assigned a value.
    - not defined is an error that occurs when you try to access a variable that has not been declared at all.

    - JS is a looselly typed language which means you can assign any type of value to a variable without any error.

# EP-07 | The Scope Chain, 🔥Scope & Lexical Environment

    - Scope means where you can access a variable and function in your code.
    - Whenever a execution is created lexical envrionemnt also created
    - lexical means in sequence
    - Lexical envrionment is local memory + lexical environment of its parent
    - Global level lexical environment points to null

    - The scope chain is nothing but the chain of all this lexical environment and its parent references
    - ![Scope chaining](image-1.png)

# EP-08 | let & const in JS 🔥Temporal Dead Zone

    - let and const are hoisted but in diff way than VAR
    - let and const are in temporal dead zone in time Being
    - The phase from hoisting tilll it assigned some value that Phrase is known as temporal Dead zone
    - When variable are in temporal dead zone you cannot access it
    - Types of errors
    - Best way to avoid temporal dead zone is to initialize variable on top

# EP-09 | BLOCK SCOPE & Shadowing in JS 🔥

    - Also known as compound statement
    - Compound statemnt -> using group of Multiple statements Where JS expects One Statement
    - Blockscope- What all variable and function used inside Block;
    - Let and const Have blocked scope

    - Shadowing -----> When a variable inside a scope has the same name as one outside, hiding the outer variable.
    - We have 3 Scope in JS Global, Block, local
    console.log(c);
    -

# EP-10 | Closures in JS 🔥

    - Function with its lexical Scope forms a closure.
    - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
    - We can Return a Function from inside a function
    - We can pass fucntion as argument.
    - when function is returned they still remmember its lexical scope


    # Uses of closures
        - module Design pattern
        - function Currying
        - function like Once
        - memoize
        - setTimeouts
        - Iterator

        - currying is a technique of evaluating function with multiple arguments into sequence of functions with single argument
