# Progressive Web Applications (PWA) Text Editor

The PWA Text Editor is a browser-based application that allows developers to create and store notes or code snippets. It is a single-page application built following the principles of Progressive Web Apps (PWA) and incorporates various data persistence techniques for reliable usage, even in offline scenarios.

## Features

- Create and save notes or code snippets.
- Works with or without an internet connection.
- Utilizes IndexedDB for data storage, ensuring redundancy and availability.
- Bundled with webpack for efficient JavaScript file management.
- Generates HTML, service worker, and manifest files using webpack plugins.
- Supports next-generation JavaScript features.
- Automatically saves content in the text editor when the window loses focus.
- Retrieves saved content from IndexedDB when reopening the text editor.
- Can be installed as a desktop application using the Install button.
- Registers a service worker using Workbox for caching static assets.
- Implements proper build scripts for deploying to Heroku.
