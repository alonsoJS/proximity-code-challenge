# Proximity Code Challenge

## This project was done with: 

 - React (CRA) with Typescript
 - Redux
 - Styled Components
 
 ## Project Structure
 
 - `/src`
    - `/components`
    - `/hooks`
    - `/store`
    - `/theme`
    - `/utils`
    - `App.tsx`
    - `index.tsx`
    
## How to run this project

From root directory:
 1. Run `yarn install`
 2. Run `yarn start`
 
 It will load the project and open a new browser window. Every time a file under `src` is saved, it will reload the window
    
## API

This project makes use of [{JSON} Placeholder](https://jsonplaceholder.typicode.com/) API to load posts, users and comments.
    
 
## State Management

This project uses Redux for State Management. 

It has two major objects:

 - posts
 - users
 
`posts` will have all information related with posts, like post information or comments.
`users` will have all the information related with the users

When initializing the application, it will call two different actions `fetchPostList` and `fetchUsers`. 

`fetchPostList` will load all posts in order and then randomized by `src/utils/randomizeObjectList.tsx`, so it doesn't look weird and will look more like a "natural" feed page. Then `fetchUsers` will bring the users so we can match the posts with the users. This actions will then add the info to the global State.

When a user `clicks` a post, it will load its comments. Then `loadPostComments` action will be called, it will only load the specific post comments and will store it under `posts` reducer, in a `commentList` object.

All comments from all posts will be saved in the same `commentList` object, and then filtered once it's required. This way post info and comments can be separated, and it's easier to scale post capacities in the future.

## Styled Components

The project uses the `styled-components` library to manage css, this allows developers to modify and manipulate the layout easier, and has the capacity to pass props to the different components.

All global styles will be in `src/theme/globalStyles.ts`, and will be injected in `src/App.tsx`.

Theme file (`src/theme/theme.ts`) will hold all the values for standardizing the app design, like colors, spacing, fonts, etc.
Whenever a developer wants to make use of these values, just use `${props => props.theme.<theme section>.<desired value>}`;
