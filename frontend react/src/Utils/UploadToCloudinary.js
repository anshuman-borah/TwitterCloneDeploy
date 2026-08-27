export const uploadToCloudinary = async (pics, fileType) => {
  if (pics) {
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "qfy3ptix");
    data.append("cloud_name", "dnbw04gbs");

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/dnbw04gbs/${fileType}/upload`,
        {
          method: "post",
          body: data,
        }
      );

      const fileData = await res.json();

      if (fileData.error) {
        console.error("Cloudinary API Error:", fileData.error.message);
        alert(`Upload Failed: ${fileData.error.message}`);
        return null;
      }

      if (fileData.url) {
        console.log("Upload Success URL:", fileData.url.toString());
        return fileData.url.toString();
      }
    } catch (error) {
      console.error("Network error uploading to Cloudinary:", error);
      alert("Network error while uploading file.");
    }
  } else {
    console.warn("No file provided to uploadToCloudinary");
  }
  return null;
};
