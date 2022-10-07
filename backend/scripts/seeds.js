var mongoose = require('mongoose');
var UserModel = require('../models/User');
var ItemModel = require('../models/Item')
var CommentModel = require('../models/Comment')
var User = mongoose.model('User');
var Item = mongoose.model('Item');
var Comment = mongoose.model('Comment');
const { faker } = require('@faker-js/faker');

var names = ["KZndDJjSHx", "mTCDcPJFmR", "jpSXtHHfdy", "caYkMqxnYH", "RrDpPpXmKz", "zGGqRoWOBe", "PNrEheptna", "FbTPfcQsKD", "karozOnERF", "qkAyHgauTP", "KGMXkbRewX", "BwbwsGyBft", "CBHqgpTZuo", "mfyPONEyMK", "xWAdvghaHE", "ZhTnEaDOPb", "CJfRghDNoB", "DcgKvqoBTb", "uHGTFGhEap", "BYzwDmDnYf", "RQQqDruYWK", "EPghyOaAyD", "NHpSTzeCKb", "HxcvhzKMFS", "vFWnxGVvgv", "ctUXaAoQad", "uCbKWcgsyt", "CfVwhrvtaj", "KEyknMyocG", "wghyFeHDkK", "tDEDoGmWpN", "ZGXUeQtgEY", "JyyTrwUWKv", "nbNNWOezRM", "xEPWbEojCZ", "NjcsmMjPyF", "erPeagqccY", "mJbusOPSMY", "ZyoQAXFafv", "BBNJmdXAPD", "nKwhYKddky", "GCMZwwMmfr", "cnuDaoUfoo", "MesKpBJbnQ", "WjDdGsxAdS", "VYJXgDSRpb", "sqABaRCKAs", "zadhyTGhRV", "OmkKqnAvPm", "YFEErzprQA", "fRhpEmEuHu", "mXdyjhcyzU", "OnrJTXkXPC", "qsBNMzgVFX", "WpxMpTRDYJ", "XExRuKoPaD", "GPyparMpWv", "oFENKEpCeV", "gHnzunYNNr", "GcstGJANHO", "uHUjmRVJcz", "gHyWObKZqD", "KgnPyMGXRT", "WXHAxjNNdy", "yBBqKnrDFT", "xvGwDqXASW", "xKDnAOcVkB", "fRRxVzOJuv", "GfzujnEbsd", "YzcjjoGwfH", "SAtgWTMqOs", "rCvGaRkUEH", "waVQMCxHSE", "PQrRvPKRoZ", "twremgrknx", "rCqckCVEHg", "JFHMOjxNYt", "hPDuJxTVRP", "UtoBJbpjWA", "ddbdaYVhua", "aEywTcRzNu", "DpVNHddAvV", "gbAREnSYmP", "kUoonoJSHs", "emOsSQdSVU", "mZopjCsynN", "MnzadymENQ", "MKkocwEEdb", "zmUNUTkUPE", "ZNNFcBRHSQ", "hPBAuXWAFX", "NcEnyWPofZ", "dkMsmafUQD", "RTaByRePjn", "omJtGMxdmY", "CZcASJRzmF", "QNTHSExXAc", "CBZvaHZxfE", "grNQcXuZmx", "fuHrXdxroN"];


mongoose.connect(process.env.MONGODB_URI);

for (let i = 0; i < names.length; i++) {

    var uniqeTitle = names[i].toLocaleLowerCase();

    var user = new User({
        username: uniqeTitle,
        email: uniqeTitle + '@mail.com',
    });
    user
        .save();


    var item = new Item({
        slug: uniqeTitle,
        title: faker.lorem.word(),
        description: faker.lorem.word(),
        image: faker.image.business(),
    });
    item
        .save();


    var comment = new Comment({ body: 'lol comment' });
    comment
        .save();

    if (i == names.length) mongoose.disconnect();
}

