export const uploadImage = async (file) => {
  console.log("file", file);
  const data = new FormData();

  data.append("file", file);
  data.append("upload_preset", "portfolio");
  data.append("cloud_name", "vbju64fk");

  console.log("data", data);

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/vbju64fk/image/upload",
    {
      method: "POST",
      body: data,
    },
  );

  const responsedData = await res.json();

  return responsedData.url;
};
