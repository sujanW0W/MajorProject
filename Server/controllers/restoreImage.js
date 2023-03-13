const { spawn } = require("child_process");

const restoreImage = (req, res) => {
    console.log(req.body);
    const corruptedImagePath = req.body.imagePath;

    var restoredImagePath;

    const pythonScriptPath =
        "D:\\MajorProject\\MajorProject\\pix2pix\\output.py";
    const python = spawn("python", [pythonScriptPath, corruptedImagePath]);

    python.stdout.on("data", function (data) {
        console.log("Processing...");
        restoredImagePath = data.toString();
        console.log(restoredImagePath);
    });

    python.on("close", (code) => {
        console.log(`Python Script ran successfully with code ${code}`);

        res.send(restoredImagePath);
    });
};

module.exports = restoreImage;
