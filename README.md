# Overview

This project is a collection of various examples to understand and experience ES5 and ES6. Initial work focused for JSChannel-Bengaluru Meetup http://www.meetup.com/JSChannel-Bengaluru/events/185020922/

## Scope of Work

This project covers the following topics in ecmascript 5 and ecmascript 6

* New Language Enhancements
   * Block Scope
   * Destructing
   * Default Parameters
   * rest,spread
   * Shorthands objects,fat arrow
* New Standard Library Objects(Map,WeakMap,Set)
* Promises
* Generators,Iterators
* Object Meta Programming( mix of ES5,ES6 using Object protype objects)
* New Syntax of Writing Class,Inheritence(apart from protyping)
* Code Organization through Modulues


It designs for various runtime envorinments (node.js and modern browsers) with Test Driven and Continous Learning through case studies

# Prerequisites

* Node js ( https://iojs.org/ or Node 0.11.13+ http://blog.nodejs.org/release/ )
* Most Recent Firefox or Chrome

# Preparation


```bash
npm install
bower install
```

## Source Editing

`gulp` used to run various examples through jasime 

You can use any editor sublime,bracket,notepad++,webstorm,eclipse etc... 

If you are using Brackets then install the following extentions( https://brackets-registry.aboutweb.com/ ) to make life easy
* brackets-beautify
* brackets-code-folding
* brackets-es6 
* brackets-fixmyjs
* brackets-xunit
* camden.jshint
* hdy.brackets-shell

If you hate all these tools,editors and love vi then vim is also fine.

Note: Presenter plans to use `brackets` to present examples and run them.

## Test Cases

```bash
gulp
jasmine-node dist/server/level1/*
```
TODO: More Details need to add

# Reference

* Test Framework http://jasmine.github.io/
* ES6 Reference Links http://addyosmani.com/blog/ecmascript-6-resources-for-the-curious-javascripter/
* Learning about Javascript
  * http://javascript.crockford.com/
  * http://speakingjs.com/es5/
  * http://jsbooks.revolunet.com/
  

# Todo

* Examples and Usecases need to include
