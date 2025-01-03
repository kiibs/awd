const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey: "public_AErzs+56vdSia1pAeoBzLYaVSck=", // Desde el panel de ImageKit.io
    privateKey: "private_glDsNbLYeY9mrDAB7nNddugGg1c=", // Desde el panel de ImageKit.io
    urlEndpoint: "https://ik.imagekit.io/8udxss2ua" // Desde el panel de ImageKit.io
});

module.exports = imagekit;
