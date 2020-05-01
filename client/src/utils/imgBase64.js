export default (img) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        console.log(typeof img.width, typeof img.height);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        // img.width and img.height will contain the original dimensions
        ctx.drawImage(img, 0, 0);

        const b64 = canvas.toDataURL("image/jpeg", 0.5); // 0.5 stands for image quality
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
