<h1 align="center">Welcome to Reign's front-end challenge </h1>
<h1 align="center"> (Infinite scrolling version) 👋 </h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

> Joaquin Alegre's application to Reign's front-end challenge. Deployed link <a href="https://joaquin-alegre-reign-frontend-challenge-infinite-scrolling.netlify.app/" target="_blank">here</a>.

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Used libraries

* axios: ^0.21.1
* eslint: ^7.28.0
* eslint-config-airbnb: ^18.2.1
* moment: ^2.29.1

## Comments & considerations

* UI based on <a href="https://zpl.io/2vJKgqQ" target="_blank">Zeplin's shared project</a>.
* The developed UI is responsive and based on the design's base resolution, which is 1440x1024 pixels.
* No UI framework was used, HTML/CSS only for building UI components.
* CSS Modules were used to apply components styles.
* Used style breakpoints are 1280px and 960px.
* Preferred using SVG than PNG to ensure there's no pixelation on icons (except the ones on the dropdown, since they are not provided on Zeplin).
* News dropdown selector was made from scratch to ensure design fidelity on all devices.
* Used Airbnb JS Style Guide (ESLint rules, including ECMAScript 6+ and React).
* Only two libraries were used (axios to fetch API data, and moment.js to format the news publication elapsed time.)
* News are stacked in rows, and a maximum number of 20 items are retrieved from the API during each call, when it reached the bottom, a new request is made for more items.
* Infinite scrolling was achieved by using the Intersection Observer API.
* Skeleton for the news blocks were added to give the user a feedback using loading states.
* Used React Context API to handle global states, and localStorage for a more persistent storage, as indicated.
* I tried placing the "like" gray block under the text block for the mobile versions, but it was more difficult to scroll and press it with one hand, so I kept the desktop distribution (text block on the left, like button on the right).

## Opportunity areas

* Hover on "like" buttons could actually fill the heart icon before pressing it.
* Animations and transitions to certain UI items (like fade in/out to show/hide the dropdown, or animate borders when switching tabs).
* Hover on rows could have a different behaviour, since applying opacity is not very intuitive for a call-to-action. 

## Author

👤 **Joaquin Alegre**

* Github: [@joaquincpp](https://github.com/joaquincpp)
* LinkedIn: [@joaquin-alegre](https://linkedin.com/in/joaquin-alegre)

## Show your support

Give a ⭐️ if this project helped you! Thank you!