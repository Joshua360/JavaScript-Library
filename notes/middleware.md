## Middlware terminates the request-response cycle

```javascript
app.use(express.json());
   
``` 
reads the request and if it contains any JSON object, it parses it to javascript object
