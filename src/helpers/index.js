export const clipStr = (str, length) => {
  return str.slice(0, length) + "...";
};

export const validateImgSize = async (filesArr) => {
  const _URL = window.URL || window.webkitURL;

  let file = filesArr[0];

  function readImageFile(file) {
    let img = new Image();
    img.src = _URL.createObjectURL(file);

    let p = new Promise((resolve) => {
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };
    });
    return p;
  }

  let data = await readImageFile(file);

  if (data.width > 70) {
    return true;
  } else {
    return "wrong image size at least 70px width/height";
  }
};
