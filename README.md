# Getting Started with Create React App


# React Custom Icons Library



#### Currently v1.0.0


<img src="https://i.ibb.co/XYrw3Vm/20220615-144013.gif" alt="git-clone-httpsgithub-com-SRAKIB17-React-Custom-Icon-Library-git-1" border="0">

# Installation For Html code:

 Common HTML Page: <small>(Copy and paste at the end of the body tag)</small>
```bash
<script src="./scriptScrollBar.js">
</script>
```
 Custom Color: (It works only body tag)  <small>(Copy and paste at the common the body tag)</small>
```bash
  <body data-scroll="[blue,,5]">
  </body>
```

## Customize:

| data-scroll="[scroll-color,bg-color,height] | Description                                                                               |
| ------------------------------------------- | ----------------------------------------------------------------------------------------- |
| data-scroll="[red, blue, 5]                 | here Scroll-color: red, bg-color: blue, height: 5                                         |
| data-scroll="[, , 5]                        | unless you want to change style, please follow it. `Here only height custom style apply ` |
| data-scroll="[, , ]                         | unless you want to change style, please follow it. `Here no custom style apply `          |

>What you don't change, leave it blank and then use commas. Customize his next style. like: data-scroll="[, , ]  







# For React App:


## Installation

Create a file in a `/src` like: `scrollBar.js`


Paste at the the `/src/scrollBar.js`:
```bash
<script src="./scriptScrollBar.js">
</script>
```
Paste at the `/src/index.js`:
```bash
 import './scrollBar'
```

## Customize:

| data-scroll="[scroll-color,bg-color,height] | Description                                                                               |
| ------------------------------------------- | ----------------------------------------------------------------------------------------- |
| data-scroll="[red, blue, 5]                 | here Scroll-color: red, bg-color: blue, height: 5                                         |
| data-scroll="[, , 5]                        | unless you want to change style, please follow it. `Here only height custom style apply ` |
| data-scroll="[, , ]                         | unless you want to change style, please follow it. `Here no custom style apply `          |

>What you don't change, leave it blank and then use commas. Customize his next style. like: data-scroll="[, , ]  



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
