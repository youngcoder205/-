function preload() {
}

function setup()   {
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    posnet = ml5.posNet(video,modelloaded)
    posnet.on('pose',gotposes)
}

function modelloaded()  {

console.log("posnet is loaded")

}

function draw() {

    image(video,0,0,300,300)

}

function gotposes(results)  {

if(results.length>0) {
    console.log(results)
    console.log("nose x = " + results [0].pose.nose.x)
    console.log("nose y = " + results [0].pose.nose.y)
}

}

function take_snapshot()  {
    save ("filter.png")
}

