//TODO: seeds script should come here, so we'll be able to put some data in our local env

var mongoose = require('mongoose');
var UserModel = require('../models/User');
var ItemModel = require('../models/Item')
var CommentModel = require('../models/Comment')
var User = mongoose.model('User');
var Item = mongoose.model('Item');
var Comment = mongoose.model('Comment');



var names = ["KZndDJjSHx", "mTCDcPJFmR", "jpSXtHHfdy", "caYkMqxnYH", "RrDpPpXmKz", "zGGqRoWOBe", "PNrEheptna", "FbTPfcQsKD", "karozOnERF", "qkAyHgauTP", "KGMXkbRewX", "BwbwsGyBft", "CBHqgpTZuo", "mfyPONEyMK", "xWAdvghaHE", "ZhTnEaDOPb", "CJfRghDNoB", "DcgKvqoBTb", "uHGTFGhEap", "BYzwDmDnYf", "RQQqDruYWK", "EPghyOaAyD", "NHpSTzeCKb", "HxcvhzKMFS", "vFWnxGVvgv", "ctUXaAoQad", "uCbKWcgsyt", "CfVwhrvtaj", "KEyknMyocG", "wghyFeHDkK", "tDEDoGmWpN", "ZGXUeQtgEY", "JyyTrwUWKv", "nbNNWOezRM", "xEPWbEojCZ", "NjcsmMjPyF", "erPeagqccY", "mJbusOPSMY", "ZyoQAXFafv", "BBNJmdXAPD", "nKwhYKddky", "GCMZwwMmfr", "cnuDaoUfoo", "MesKpBJbnQ", "WjDdGsxAdS", "VYJXgDSRpb", "sqABaRCKAs", "zadhyTGhRV", "OmkKqnAvPm", "YFEErzprQA", "fRhpEmEuHu", "mXdyjhcyzU", "OnrJTXkXPC", "qsBNMzgVFX", "WpxMpTRDYJ", "XExRuKoPaD", "GPyparMpWv", "oFENKEpCeV", "gHnzunYNNr", "GcstGJANHO", "uHUjmRVJcz", "gHyWObKZqD", "KgnPyMGXRT", "WXHAxjNNdy", "yBBqKnrDFT", "xvGwDqXASW", "xKDnAOcVkB", "fRRxVzOJuv", "GfzujnEbsd", "YzcjjoGwfH", "SAtgWTMqOs", "rCvGaRkUEH", "waVQMCxHSE", "PQrRvPKRoZ", "twremgrknx", "rCqckCVEHg", "JFHMOjxNYt", "hPDuJxTVRP", "UtoBJbpjWA", "ddbdaYVhua", "aEywTcRzNu", "DpVNHddAvV", "gbAREnSYmP", "kUoonoJSHs", "emOsSQdSVU", "mZopjCsynN", "MnzadymENQ", "MKkocwEEdb", "zmUNUTkUPE", "ZNNFcBRHSQ", "hPBAuXWAFX", "NcEnyWPofZ", "dkMsmafUQD", "RTaByRePjn", "omJtGMxdmY", "CZcASJRzmF", "QNTHSExXAc", "CBZvaHZxfE", "grNQcXuZmx", "fuHrXdxroN"];

mongoose.connect(process.env.MONGODB_URI);

for (let i = 0; i < names.length; i++) {

    var username = names[i].toLocaleLowerCase();
    var mail = names[i] + '@mail.com';


    var user = new User({
        username: username,
        email: mail,
    });
    user
        .save().then(console.log).catch(console.error);


    var item = new Item({
        title: 'stuff' + names[i],
        description: 'good stuff',
        image: '../../frontend/public/placeholder.png',
        tagList: 'nice',
    });
    item
        .save().then(console.log).catch(console.error);


    var comment = new Comment({ body: 'I did find it in the end, I`m not saying that it was easy but I am sure that it was worth it.' });
    comment
        .save().then(console.log).catch(console.error);

    if (i == names.length) mongoose.disconnect();
}
