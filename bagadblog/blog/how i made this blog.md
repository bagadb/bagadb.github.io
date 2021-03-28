---
title: 'How I made this Blog'
description: 'How I made this blog using Angular 10 and Scully in 2021'
date: '10th Feb 2021'
published: false
slugs:
    - unpublished1
    - ___UNPUBLISHED___kl3yofni_ybMNL7DmvOsURsmP0FCuCHRjoetpyfNY
---

# How I made this Blog.

#### How I made this Blog using Angular 10 and Scully in 2021.

------

#### What is Scully

Scully is a **Static Site Generator** for Angular. It renders your site and all it's routes into simple static content. It will render all your pages/routes into ready to view static HTML pages. This makes your site extremely fast and SEO friendly. All the Single Page functionality of the site will work the same too. It's great!

[Link for video!]: https://www.youtube.com/watch?v=AWJoPble388&amp;t=1103s	"Check out this Demo Video By Aaron Fost co-creator of Scully for better Understanding"

### Scully also provides

- Markdown File rendering.
- Use data from routes in Angular apps using the Scully Route Service!
- A plugin system to add your own functions into Scully's processes.

All the information is also available at the Scully Official docs at http://scully.io

#### Getting Started

##### Pre-requisites

- Node,js version **12** or Higher
- Angular version **v9.x.x** or **v10.x.x**
- App with atleast **One Route**

These are the minimal requirements for Scully.

### First Steps

```bash
npm install -g @angular/cli #If Angular CLI is not installed
ng new my-blogsite #Don't forget to add routing, It is necessary for Scully
```

This will initialise a new git and npm project in the folder **my-blogsite**. Angular files for an empty template project will be ready with the main AppModule and routing.

### The Plan

- One landing page component ( https://bagadb.github.io/ )
- Adding **Scully** to the project
- Enabling Blog support in Scully to create...
  - The component which lists all blog posts (https://bagadb.github.io/blog) 
  - The component which views one single blog post

### The Landing Page

The landing page is the homepage or cover of the blog. The homepage of my blog is the page you landed on. It contains links to my profile and contains links to the List of Blogs.

For now the Angular Routes are set up as follows in **/src/app/app-routing.module.ts**

IMAGE OF ROUTING MODULE

### Adding Scully and Building the project.

Adding Scully to any Angular app is extremely easy! Just run one command and Scully sets up everything by itself!

```bash
ng add @scullyio/init
```

This command will generate the config file for scully namely

**scully.\<projectname>.config.ts**

```typescript
import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: '<projectName>',
  outDir: './dist/static',
  routes: {},
};
```

You don't need to touch this file right now, but you can see the variables you can change.

Scully builds it's static site using the production Angular build. So we have to build Angular before Scully.

We have to repeat these steps and it becomes inconvenient to run 3 commands in a row. We can instead set up a NPM project script to make our task easy. Add the following to the scripts in **package.json**.

```json
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "scully": "scully",
    "scully:serve": "scully serve",
    "completebuild": "ng build --prod && npm run scully -- --scanRoutes && npm run scully serve"
  }
```

Then we can run the following command to build.

```bash
npm run completebuild
```

The static build will be saved in the **/dist/static** folder.

### Serving Scully.

To serve a Scully project we can run the following command.

```bash
npm run scully:serve
```

This command will host 2 servers, one of them will be a non-static Angular build, and the other will be the Scully build. You can easily compare both the builds side by side.

### Adding Scully's Blog Module.

Adding the Scully's blog module is just as easy!

Run the following command in the project directory:

```bash
ng generate @scullyio/init:blog
```

This will set up routes automatically, and it will generate the blog module.

 ### The page that lists all posts.



### The page that displays a post.

