---
course: >-
  React
title: >-
  React props and state activity
category: >-
  pair_programming
---

### Instructions

In this activity you are given a simple 'NASA' react app that is broken. Right now the following events are not being handled by the react app:

1. form's submission
2. Comment text change
3. Author's text change

#### App description

The app serves two purposes. It renders an article and image (It fetches these from the NASA API), and a user can leave a comment using a form.

#### Problems to Solve

When you fill out a comment form and press submit, the application should:

1. Append a comment to the comment listing
2. Clear out the author name and comment text upon submission

#### Hints

We've already written the handlers (`handleCommentTextChange`, `handleNameChange`, `handleFormSubmit`) for you.

Remember to set both the `onChange` and the `value` attributes for the inputs.

### Getting Started

Download the zip file

[callout-download]
[state-props-lifecycle-activity starter.zip](https://tiy-learn-content.s3.amazonaws.com/4abfa7ef-state-props-lifecycle-activity%20starter.zip) (38 MB)
[/callout-download]

Once downloaded, open the starter_files folder in your text editor and run `npm start` from the project directory.
