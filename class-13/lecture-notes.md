# Class 13 Lecture Notes

## Data Persistance

### Local Storage

- Object that our browser gives to our JS to use
- Stored on our hard drives
  - Local storage is specific to one computer
- No expiration until you clear your local storage

- Code Fellows Journey
  - 201: Local Storage
  - 301: In-memory "Cache" & NoSQL - MongoDB
  - 401: SQL - Postgres

## Why?

- Application State between page refreshes
- Good for testing insensitive data before storing it in our cloud db

## How it is stored

- Data is stored as a string
- JSON - JavaScript Object Notation
- `JSON.stringify();`

### Methods

- `localStorage.setItem(key,value)` - to add and if there it will also update
- `localStorage.getItem(key)`
- `localStorage.clear()`
- `localStorage.removeItem(key)`

### Retreiving Local Storage ... continue

`JSON.parse()` - reconvert what was stored into data that will work
