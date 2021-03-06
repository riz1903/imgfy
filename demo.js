// Direct content.
var app = require('./index');

var content = {
  "template": {
    "backgroundImage": "url(http://res.cloudinary.com/cagatayc/image/upload/profile.jpg)",
    "backgroundColor": "#cccccc",
    "backgroundRepeat": "no-repeat"
  },
  "images": [
    {
      "id": 1,
      "src": "http://res.cloudinary.com/cagatayc/image/upload/racoon.png",
      "property": {
        "position": "absolute",
        "top": "152px",
        "left": "122px",
        "maxHeight": "37px"
      }
    },
    {
      "id": 2,
      "src": "http://res.cloudinary.com/cagatayc/image/upload/racoon.png",
      "property": {
        "position": "absolute",
        "top": "141px",
        "left": "210px",
        "maxHeight": "37px"
      }
    }
  ]
}

app({content: content, file: false, open: true}) // Open in browser.
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  })

// File system.
// var app = require('./index');
//
// app({file: 'content.json', open: true})
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
