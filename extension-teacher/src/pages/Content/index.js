function attentionSeeker(track) {
  let image = new ImageCapture(track);

  image.takePhoto().then((blob) => {});
}

navigator.mediaDevices
  .getUserMedia({
    video: true,
  })
  .then((stream) => {
    console.log("Got Permission");
    attentionSeeker(track.getVideoTracks()[0]);
  })
  .catch((err) => {
    console.log(err);
  });
