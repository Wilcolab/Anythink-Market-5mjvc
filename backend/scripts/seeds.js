//TODO: seeds script should come here, so we'll be able to put some data in our local env
// //TODO: seeds script should come here, so we'll be able to put some data in our local env

var mongoose = require('mongoose');
var UserModel = require('../models/User');
var ItemModel = require('../models/Item')
var CommentModel = require('../models/Comment')
var User = mongoose.model('User');
var Item = mongoose.model('Item');
var Comment = mongoose.model('Comment');


// 'Quinn Hardin ;Jadyn Ballard ;Alessandro Sheppard ;Angela Lyons ;Tobias Stephens ;Shelby Glover ;Cameron Sellers ;Cassandra Dougherty ;Madelyn Marsh ;Kareem Chandler ;Rosemary Deleon ;Darian Hartman ;Paityn Mahoney ;Kymani Evans ;Valeria Waller ;Ernesto Gilbert ;Jorden Ewing ;Luciano Vega ;Evan Skinner ;Jamya Hall ;Maya Lucas ;Quinn Fernandez ;Mayra Shaffer ;Rohan Davidson ;Justice Kidd ;Shyla Hinton ;Zavier Walters ;Kylee Marquez ;Adrienne Castaneda ;Aubrie Cannon ;Erin Robbins ;Hillary Mccarthy ;Patrick Branch ;Jaeden Trevino ;Hunter Odonnell ;Evie Erickson ;Trey Steele ;Clay Bush ;Sasha Christensen ;Declan Hampton ;Malia Kelley ;Bianca Vang ;Killian Duarte ;Jamarion Madden ;Libby Rivas ;Danielle Ferrell ;Tiana Boyd ;Jake Le ;Dana Hopkins ;Rubi Henderson ;Bailey Strong ;Sullivan Glass ;Daniella Jackson ;Aubrie Gregory ;Gloria Barrera ;Emilee House ;Andrea Quinn ;Mariah York ;Callie Miranda ;Addison Stephenson ;Nicole Kemp ;Damari Griffin ;Ray Newman ;Donovan Santana ;Jase Oliver ;Marquis Berry ;Alana Morgan ;Dean Oneal ;Keaton Riddle ;Myles Sexton ;Kristina Fisher ;Adrian Tapia ;Pedro Newton ;Jabari Wilkerson ;Zackery Bowers ;Kaylyn Fritz ;Kamryn Richardson ;Nigel Bond ;Justice Mccall ;Jaylen Mayo ;Jane Walker ;Cortez Freeman ;Brynlee Bolton ;Julio Ali ;Shania Hill ;Khloe Coffey ;Greta Larsen ;Preston Wilkinson ;Paulina Barnett ;Dominique Cooke ;Van Knox ;Teagan Carney ;Brenton Haas ;Chelsea Logan ;Giovanni Clements ;Heidi Garcia ;Hailey Durham ;Hazel Holland ;Kaylyn Conway; Zechariah Calderon'
var names = ["KZndDJjSHx", "mTCDcPJFmR", "jpSXtHHfdy", "caYkMqxnYH", "RrDpPpXmKz", "zGGqRoWOBe", "PNrEheptna", "FbTPfcQsKD", "karozOnERF", "qkAyHgauTP", "KGMXkbRewX", "BwbwsGyBft", "CBHqgpTZuo", "mfyPONEyMK", "xWAdvghaHE", "ZhTnEaDOPb", "CJfRghDNoB", "DcgKvqoBTb", "uHGTFGhEap", "BYzwDmDnYf", "RQQqDruYWK", "EPghyOaAyD", "NHpSTzeCKb", "HxcvhzKMFS", "vFWnxGVvgv", "ctUXaAoQad", "uCbKWcgsyt", "CfVwhrvtaj", "KEyknMyocG", "wghyFeHDkK", "tDEDoGmWpN", "ZGXUeQtgEY", "JyyTrwUWKv", "nbNNWOezRM", "xEPWbEojCZ", "NjcsmMjPyF", "erPeagqccY", "mJbusOPSMY", "ZyoQAXFafv", "BBNJmdXAPD", "nKwhYKddky", "GCMZwwMmfr", "cnuDaoUfoo", "MesKpBJbnQ", "WjDdGsxAdS", "VYJXgDSRpb", "sqABaRCKAs", "zadhyTGhRV", "OmkKqnAvPm", "YFEErzprQA", "fRhpEmEuHu", "mXdyjhcyzU", "OnrJTXkXPC", "qsBNMzgVFX", "WpxMpTRDYJ", "XExRuKoPaD", "GPyparMpWv", "oFENKEpCeV", "gHnzunYNNr", "GcstGJANHO", "uHUjmRVJcz", "gHyWObKZqD", "KgnPyMGXRT", "WXHAxjNNdy", "yBBqKnrDFT", "xvGwDqXASW", "xKDnAOcVkB", "fRRxVzOJuv", "GfzujnEbsd", "YzcjjoGwfH", "SAtgWTMqOs", "rCvGaRkUEH", "waVQMCxHSE", "PQrRvPKRoZ", "twremgrknx", "rCqckCVEHg", "JFHMOjxNYt", "hPDuJxTVRP", "UtoBJbpjWA", "ddbdaYVhua", "aEywTcRzNu", "DpVNHddAvV", "gbAREnSYmP", "kUoonoJSHs", "emOsSQdSVU", "mZopjCsynN", "MnzadymENQ", "MKkocwEEdb", "zmUNUTkUPE", "ZNNFcBRHSQ", "hPBAuXWAFX", "NcEnyWPofZ", "dkMsmafUQD", "RTaByRePjn", "omJtGMxdmY", "CZcASJRzmF", "QNTHSExXAc", "CBZvaHZxfE", "grNQcXuZmx", "fuHrXdxroN"];
// const re = /\s*(?:;|$)\s*/;
// const nameList = names.split(re);
// console.log(names[1]);

// function generatePassword() {
//     var length = 8,
//         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//         retVal = "";
//     for (var i = 0, n = charset.length; i < length; ++i) {
//         retVal += charset.charAt(Math.floor(Math.random() * n));
//     }
//     return retVal;
// }

// var randomName = (obj) => {
//     var keys = Object.keys(obj);
//     return obj[keys[keys.length * Math.random() << 0]];
// };
mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect("mongodb://127.0.0.1:27017/anythink")

// const seed = () => {

for (let i = 0; i < 100; i++) {
    // var username = randomName(nameList).replace(/\s/g, "").toLocaleLowerCase();
    var username = names[i] + 'q'.toLocaleLowerCase();
    var mail = names[i] + 'ax@mail.com';


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


    var comment = new Comment({ body: 'I did find it in the end, I’m not saying that it was easy but I am sure that it was worth it.' });
    comment
        .save().then(console.log).catch(console.error);

    i == 100 ? mongoose.disconnect() : 0;
}
// }
// seed();
// const dis = mongoose.disconnect();
// const solve = async () => {
//     await seed();
//     dis()
// }
// solve();