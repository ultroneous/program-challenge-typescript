# ultroneous Developer Interview Homework Test

## Instructions:
This is a typescript programming challenge.\
We expect this should take ~2-4 hours to solve for a junior developer, ~1-2 hours for a senior developer

There are supporting files containing a set of data and functions to access it, and even some helper functions to reduce difficulty.\
There is a list of recipes in the data (only one recipe in there... for now...)\
Your goal is to build a functionality that will calculate the cheapest cost that each recipe can be made for, and to summarise its nutritional information in that cheapest configuration.\
You can see the expected summary object in the `testing.ts` file.\
You will find explanations for all models and functions in comments above each declaration.

There is a file called in the root directory called `main.ts` where you should write your code.\
We have prefilled some template we think you'll need.

When you're ready to execute it, you can call `npm test` from a terminal in the root directory.\
At the end, you will pass an object into the RunTest function, and you should see `CHECKING RECIPE "Creme Brulee" --- CORRECT ANSWER` printed to the console.

Once complete, please push your code to a git repository (we recommend forking this repo) and send us the link to your work.

Good Luck!

### Extra Notes & Rules:

- You might have to install some dependencies: 
  - NodeJS & NPM: https://nodejs.org/en/
  - Typescript & TS-Node: `npm install -g typescript && npm install -g ts-node`
- You can email us any time with questions if you have any
- You can create extra files for organisation of extra functions if you like
- Do not modify anything in "supporting-files" directory
- Do not install any npm modules, use vanilla TypeScript as it is. 
  - If you think an NPM package would have been a more efficient solution, you can write that in a comment.
- Bonus points for:
  - High quality comments explaining what your work is doing & why
  - Efficient data structures and algorithms
  - Clean & understandable code

### What's Provided:
All required interfaces & data are provided in the "supporting-files" directory.\
You're welcome to read through any of these files for understanding, they're well documented for you to do so.
- `"supporting-files/models.ts"`\
This file defines all of the data structures needed for the challenge.\
Each interface has a description.\
We strongly recommend you start by reading this file and understanding the data structures
- `"supporting-files/data-raw.ts"`\
This file contains raw data, think of it like a virtual database for this challenge.\
You're welcome to look through this file, but you cannot change it and should not directly reference it in your code
- `"supporting-files/data-access.ts"`\
This file provides all data-access methods required for the challenge. Think of it like the ORM for the virtual db file.\
This is how you can access the data contained within the 'data-raw' virtual database.\
You cannot modify this file, but you are expected to use the functions which it exports\
- `"supporting-files/helpers.ts"`\
This file contains helper functions we've made to reduce the complexity for you.\
They're optional, but very useful.
- `"supporting-files/testing.ts"`\
This file contains the function for executing the test, and the result which we expect you to produce.

Share ZIP File to HR Once Task Completed

NOTE: Code should be up to the mark.

What we will check?
- given functionality should be work as per the requirement
- Code optimization
