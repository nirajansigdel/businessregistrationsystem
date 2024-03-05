const ImgCompressor = ({ setCompressedFile }) => {
  const readImgFile = async (e) => {
    const { files } = e.target;

    // No files selected
    if (!files.length) return;

    // For every file in the files list
    for (const file of files) {
      // We don't have to compress files that aren't images
      if (!file.type.startsWith("image")) {
        // TODO: Not an image
      }

      // We compress the file by 50%
      const compressedFile = await compressImage(file, {
        // 0: is maximum compression
        // 1: is no compression
        quality: 0.5,

        // We want a JPEG file
        type: "image/jpeg",
      });
      // setCompressedFile(URL.createObjectURL(compressedFile))
      setCompressedFile(compressedFile);
      console.log(files, compressedFile, "check file console");
    }
  };

  const compressImage = async (file, { quality = 1, type = file.type }) => {
    // Get as image data
    const imageBitmap = await createImageBitmap(file);

    // Draw to canvas
    const canvas = document.createElement("canvas");
    canvas.width = imageBitmap.width;
    canvas.height = imageBitmap.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(imageBitmap, 0, 0);

    // Turn into Blob
    return await new Promise((resolve) =>
      canvas.toBlob(resolve, type, quality)
    );
  };

  return (
    <>
      <label for="fileUpload" className="w-[100px] font-medium px-1">
        Pan Photo:
      </label>
      <input
        type="file"
        multiple
        className="my-image-field"
        id="fileUpload"
        label="please input file"
        onChange={(e) => readImgFile(e)}
      />
    </>
  );
};

export default ImgCompressor;
