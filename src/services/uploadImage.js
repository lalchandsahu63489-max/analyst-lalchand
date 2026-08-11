export const uploadImage = async (e) => {
  const file = e.target.files[0];

  const data = new FormData();

  data.append("photos", file);
  data.append("upload_preset", "portfolio");
  data.append("cloud_name", "vbju64fk");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/vbju64fk/image/upload",
    {
      method: "POST",
      body: data,
    },
  );

  const responsedData = res.json();

  return responsedData.url;
};
