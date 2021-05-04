var twit = require('twit')
var T = new twit( {
    consumer_key:'',
    consumer_secret:'',
    access_token:'',
    access_token_secret:'',
    timeout_ms: 60*50000,
    strictSSL: true,
})

var stream = T.stream('statuses/filter',{track: 'Tuve una pesadilla en la que'});

stream.on('tweet', tweet => {
    T.post('statuses/retweet/:id', {id:tweet.id_str});
    T.post('favorites/create', {id:tweet.id_str})
})
