# Parallax Scroll

### sources:

1. A video guid by Web Dev Simplified: [Video Link](https://youtu.be/mxHoPYFsTuk).

You need a container to replace the scroll of the HTML body. It needs to be the size of the HTML body (otherwise you will get two scrollbars), you can leave out elements that don't take any space (vertically & horizontally).
Give that element an id, and the following CSS.

````css
.scrollingPXcon {
# Parallax Scroll



### sources:
1. A video guid by Web Dev Simplified: [Video Link](https://youtu.be/mxHoPYFsTuk).
2. CSS - overflow: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)

First set a container to replace the scroll of the HTML body.
>It needs to be the size of the HTML body (otherwise you will get two scrollbars), you can leave out elements that don't take any space (vertically & horizontally).

Give that element an id, and the following CSS.
```css
#scrollingParallax {
	height: 100vh; /*This element is the window to your page, you probably need it to be the same size*/
	overflow-y: auto;
	overflow-x: hidden;
	perspective: 1000px; /*The size of your z-index/axis.*/
}
````

Next, set the container that the effect will be used in.

> This element needs to be a direct descendent of #scrollingParallax, or you will need to drill down the CSS "transform-style: preserve-3d;" in every parent to the element you want to use.

height: 100vh; /_This element is the window to your page, you probably need it to be the same size_/
overflow-y: auto;
overflow-x: hidden;
perspective: 1000px; /_The size of your z-index/axis._/
}

```

```

https://codepen.io/Alon_Fabio/pen/XWEbymp
