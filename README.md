# MiniShop – Final React Project

## Overview

Your task is to build a mini e-commerce app with two pages:

- **Home Page**: Shows a list of products. Each product displays a name, price, and image. Users can add products to their cart.
- **Cart Page**: Shows all the products that were added to the cart, along with their quantities and the total cost. Clicking “Checkout” should alert the user with the total price.

## Goals

- Make an API call to "https://api.escuelajs.co/api/v1/products" in order to get a list of products.
- Allow users to add products to a cart and view them on a separate page
- Track quantity if a product is added more than once
- Show the total cost of items in the cart
- Alert the total when the user clicks “Checkout”
- Navigate between pages using React Router

## Starter

You're free to organize your files however you like, but you’ll likely want:

- Reusable components (e.g. `ProductCard`, `CartItem`)
- Pages for Home and Cart
- Shared state between pages (use `App.jsx` or context)

Good luck!

## Stretch Goals

- Add a simple login form (no real authentication needed)
- Allow logged-in users to add new products through a form
- Use bootstrap icons vie react-bootstrap-icons (or any other library with icons) [(react-bootstrap-icons)](https://github.com/ismamz/react-bootstrap-icons)
- Use context to manage cart state
- Display a cart item count in the header
- Redo the cart with Context and Redux (potentially create a serparate app for each!)
- Look into having Stripe integration!
- Look into advanced styling (Tailwind)

---

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
