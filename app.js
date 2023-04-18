const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const adminRoutes = require('./routes/admin')
const errorController=require('./controllers/error.js');
const shopRoutes = require('./routes/shop')
const contactUs = require('./routes/contactus')
const success_message = require('./routes/success-message')

app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname, 'public')))

app.use('admin',adminRoutes)
app.use(shopRoutes)
app.use(contactUs)
app.use(success_message)

app.use(errorController.get404)

const port = process.env.PORT || 4000
app.listen(port, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
    return;
  }
  console.log('Server started on port', port);
});

