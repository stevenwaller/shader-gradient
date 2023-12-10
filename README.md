# Shader Gradient with React

Using [Create Create App](https://create-react-app.dev/) to build a [Shader Gradient](https://www.shadergradient.co/) React component.

## Getting Started

This project requires node to be installed locally.

1. Clone or download this repo.
2. From within the project directory run `npm install` to install the dependencies

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deployment

Any changes merged into the `main` branch will automatically be deployed to [papaya-brioche-9dd753.netlify.app](https://papaya-brioche-9dd753.netlify.app/) using [Netlify](https://netlify.com).

## Making changes to the gradient

1. Go to [https://www.shadergradient.co/customize](https://www.shadergradient.co/customize) and adjust the settings to your liking
2. Click the "Copy URL" button
3. Paste the URL into the ShaderGradient's `urlString` prop on line 15 of the `src/index.js` file.

## How to embed the gradient on a site

The easiest method to embed the gradient on a site is to use an iframe that is pointing to the Netlify url with some styles to position it.

```html
<iframe
  src="https://papaya-brioche-9dd753.netlify.app/"
  style="
    width: 100%;
    height: 100%;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
  "
>
</iframe>
```
