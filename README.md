# RangeMe
Photo wall that pulls public images from Flickr's API.

Since we are pulling images from Flickr's public space, caution should be taken since images can be inappropriate. 
## Overview
I have used [NextJS](https://nextjs.org/) to build the project and using [Heroku](https://www.heroku.com/) to deploy the project. Demo can be found [here](https://range-me.herokuapp.com/).

I have used [Eslint](https://eslint.org/) to lint the project and [React/PropTypes](https://github.com/facebook/prop-types) to type props.

I have used [cors library](https://github.com/expressjs/cors) to add cors headers to requests made by the search bar and [awesome debounce promise](https://github.com/slorber/awesome-debounce-promise) to handle requests once a user starts typing in tags. Most of code related to these two libaries can be found under `lib/` directory and `pages/api/`.

## Installation

I am using [yarn](https://yarnpkg.com/) as my package manager

```bash
npm install --global yarn
```

You can install dependencies running

```bash
yarn
```

## Scripts

```bash
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start -p $PORT",
  "eslint": "eslint . --ext .jsx"
}
```

## What I would change
Given time restraints I wasn't able to add all the features in as I would have liked

* Added in option for tags search to search for `include all tags` and `partial search`.
* Added in option to search by author or author ID.
* Added in unit testing.
* Clean up the Flickr endpoints and place them in a `utils/routes.js` file.
* Clean up some of the styling e.g handle the amount of tags shown per card and add a show more/less option.
