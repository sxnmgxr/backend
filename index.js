const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//const bodyParser = require("body-parser");
const app = express();
const Routes = require('');

const PORT = process.env.PORT || 5000;
dotenv.config();

//app.use(bodyParser.json({limit: '10mb', extended: true}));
//app.use(bodyParser.urlencoded({limit: '10mb, extended: true}));

app.use(express.json({ limit: '10mb' }));
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('connected to MongoDB'))
  .catch((err) => console.log('Not connected to network', err));

app.use('/', Routes);
app.listen(PORT, () => {
  console.log(`server started at port no: ${PORT}`);
});
