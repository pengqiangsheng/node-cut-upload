const crypto = require('crypto');
const fs = require('fs');

let computedHex = () => {
    let rs = fs.createReadStream('./nodeServer/uploads/test.mp4');
    let hash = crypto.createHash('md5');
    let hex

    rs.on('data', hash.update.bind(hash));

    rs.on('end', () => {
        hex = hash.digest('hex')
        console.log('hex is ' + hex);
        // output(hex);
    });
}

// let output = (hex) => {
//     let arr = [];
//     let json = {
//         "name": "flyme.5.0_uc_h5.zip",
//         "md5": hex,
//         "lastmodify": new Date().getTime()
//     };
//     arr.push(json);
//     fs.writeFile('./config.json', JSON.stringify(arr), function(err) {
//         if (err) throw err;
//         console.log('saved config.json successfully');
//     });
// }
computedHex()
// zipper.zip("output/release", function(error, zipped) {

//     if (!error) {
//         zipped.compress(); // compress before exporting

//         var buff = zipped.memory(); // get the zipped file as a Buffer
//         // or save the zipped file to disk
//         zipped.save("./" + zipName, function(error) {
//             if (!error) {
//                 console.log("Ziped files successfully !");
//                 computedHex();
//             }
//         });
//     } else {
//         console.log(error)
//     }
// });