export default (img) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      // img.onload = drawImageActualSize;

      // function drawImageActualSize() {
      //   const canvas = document.createElement("canvas");
      //   const ctx = canvas.getContext("2d");
      //   canvas.width = this.naturalWidth;
      //   canvas.height = this.naturalHeight;

      //   ctx.drawImage(this, 0, 0, this.width, this.height);

      //   const b64 = canvas.toDataURL("image/png");
      //   resolve(b64);
      // }
      img.onload = () => {
        console.log(typeof img.width, typeof img.height);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 200;
        canvas.height = 300;
        // img.width and img.height will contain the original dimensions
        ctx.drawImage(img, 0, 0, 200, 300 );

        const b64 = canvas.toDataURL("image/png");
        console.log(b64);
        resolve(b64);
      };
    };
    reader.onerror = (error) => {
      console.error(error);
      resolve("");
    };
  });
};
