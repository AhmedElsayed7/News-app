const request = require('request');

const NewsAPIData = (callback) => {
     const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=64c3d6a36fd942a3af7a5bc69ec3772d ' 

     request({url : url ,json :true} , (error,response)=>{
        if (error) {
            callback('Unable to connect to location services!')
            // console.log('Unable to connect to location services!')

     }
     else if (response.body.status == 'error'){
        callback(res.body.message , undefined)
      //   console.log(res.body.message , undefined)

     }
     else if (response.body.articles.length === 0) {
        callback('Unable to find news . Try another search.',undefined)
      //   console.log('Unable to find news . Try another search.',undefined)
        }
        else {
         callback(undefined, response.body.articles)
         //   console.log(undefined ,res.body.articles) 

        }
    })
}

module.exports = NewsAPIData  ; 

