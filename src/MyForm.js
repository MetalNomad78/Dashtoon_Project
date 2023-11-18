import React, { useState } from "react";

const MyForm = () => {
  // Initialize state for each input field
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    input8: "",
    input9: "",
    input10: ""
  });
  const [imageSources, setImageSources] = useState({
    imgSrc1: null,
    imgSrc2: null,
    imgSrc3: null,
    imgSrc4: null,
    imgSrc5: null,
    imgSrc6: null,
    imgSrc7: null,
    imgSrc8: null,
    imgSrc9: null,
    imgSrc10: null
  });

  // Handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  async function query(data) {
    const response = await fetch(
      "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
      {
        headers: {
          Accept: "image/png",
          Authorization:
            "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
      }
    );
    const result = await response.blob();
    return result;
  }

  const callTextToImage = (input, imageSourceValue) => {
    query({ inputs: input }).then((response) => {
      // Use image
      const imageUrl = URL.createObjectURL(response);
      setImageSources((prevValues) => ({
        ...prevValues,
        [imageSourceValue]: imageUrl
      }));
    });
  };

  console.log(imageSources);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    callTextToImage(inputValues.input1, "imgSrc1");
    callTextToImage(inputValues.input2, "imgSrc2");
    callTextToImage(inputValues.input3, "imgSrc3");
    callTextToImage(inputValues.input4, "imgSrc4");
    callTextToImage(inputValues.input5, "imgSrc5");
    callTextToImage(inputValues.input6, "imgSrc6");
    callTextToImage(inputValues.input7, "imgSrc7");
    callTextToImage(inputValues.input8, "imgSrc8");
    callTextToImage(inputValues.input9, "imgSrc9");
    callTextToImage(inputValues.input10, "imgSrc10");
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Input 1:
              <input
                style={{ marginLeft: "5px" }}
                type="text"
                name="input1"
                value={inputValues.input1}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>
              Input 2:
              <input
                style={{ marginLeft: "5px" }}
                type="text"
                name="input2"
                value={inputValues.input2}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>
              Input 3:
              <input
                style={{ marginLeft: "5px" }}
                type="text"
                name="input3"
                value={inputValues.input3}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>
              Input 4:
              <input
                style={{ marginLeft: "5px" }}
                type="text"
                name="input4"
                value={inputValues.input4}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>
              Input 5:
              <input
                style={{ marginLeft: "5px" }}
                type="text"
                name="input5"
                value={inputValues.input5}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>
              Input 6:
              <input
                style={{ marginLeft: "5px" }}
                type="text"
                name="input6"
                value={inputValues.input6}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>
              Input 7:
              <input
                style={{ marginLeft: "5px" }}
                type="text"
                name="input7"
                value={inputValues.input7}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>
              Input 8:
              <input
                style={{ marginLeft: "5px" }}
                type="text"
                name="input8"
                value={inputValues.input8}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>
              Input 9:
              <input
                style={{ marginLeft: "5px" }}
                type="text"
                name="input9"
                value={inputValues.input9}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>
              Input 10:
              <input
                style={{ marginLeft: "5px" }}
                type="text"
                name="input10"
                value={inputValues.input10}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "5px",
          marginLeft: "20px",
          marginTop: "30px"
        }}
      >
        {imageSources.imgSrc1 && (
          <div style={{ flex: "1 0 200px", maxWidth: "300px" }}>
            <img
              style={{ width: "300px", height: "400px" }}
              src={imageSources.imgSrc1}
            />
          </div>
        )}
        {imageSources.imgSrc2 && (
          <div style={{ flex: "1 0 200px", maxWidth: "300px" }}>
            <img
              style={{ width: "300px", height: "400px" }}
              src={imageSources.imgSrc2}
            />
          </div>
        )}
        {imageSources.imgSrc3 && (
          <div style={{ flex: "1 0 200px", maxWidth: "300px" }}>
            <img
              style={{ width: "300px", height: "400px" }}
              src={imageSources.imgSrc3}
            />
          </div>
        )}
        {imageSources.imgSrc4 && (
          <div style={{ flex: "1 0 200px", maxWidth: "300px" }}>
            <img
              style={{ width: "300px", height: "400px" }}
              src={imageSources.imgSrc4}
            />
          </div>
        )}
        {imageSources.imgSrc5 && (
          <div style={{ flex: "1 0 200px", maxWidth: "300px" }}>
            <img
              style={{ width: "300px", height: "400px" }}
              src={imageSources.imgSrc5}
            />
          </div>
        )}
        {imageSources.imgSrc6 && (
          <div style={{ flex: "1 0 200px", maxWidth: "300px" }}>
            <img
              style={{ width: "300px", height: "400px" }}
              src={imageSources.imgSrc6}
            />
          </div>
        )}
        {imageSources.imgSrc7 && (
          <div style={{ flex: "1 0 200px", maxWidth: "300px" }}>
            <img
              style={{ width: "300px", height: "400px" }}
              src={imageSources.imgSrc7}
            />
          </div>
        )}
        {imageSources.imgSrc8 && (
          <div style={{ flex: "1 0 200px", maxWidth: "300px" }}>
            <img
              style={{ width: "300px", height: "400px" }}
              src={imageSources.imgSrc8}
            />
          </div>
        )}
        {imageSources.imgSrc9 && (
          <div style={{ flex: "1 0 200px", maxWidth: "300px" }}>
            <img
              style={{ width: "300px", height: "400px" }}
              src={imageSources.imgSrc9}
            />
          </div>
        )}
        {imageSources.imgSrc10 && (
          <div style={{ flex: "1 0 200px", maxWidth: "300px" }}>
            <img
              style={{ width: "300px", height: "400px" }}
              src={imageSources.imgSrc10}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyForm;
