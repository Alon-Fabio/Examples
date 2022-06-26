# Appearing Navigation Bar

#### Dependencies:

1. React
2. TypeScript
3. Sass

## Description

A navigation bar that starts with a background of transparent and will appear when scrolling down away from the top.

### How to guid

1. Add the folder AppearingNavBar to your project src.
2. Import the NavBar component to the container you want it in.
3. Add the routing function and useState.

```js
const [route, setRoute] = useState("");

const onRouteChange = (route: string) => {
  setRoute(route);
};
```

Have fun &D
