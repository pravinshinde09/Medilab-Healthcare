import emailjs from "emailjs-com";
import React, { Component } from "react";

class Upload extends Component {
  state = {
    file: null,
  };
  onFileChange = (event) => {
    this.setState({ file: event.target.files[0] });
  };
  onFileUpload = () => {
    const formData = new FormData();
    formData.append("file", this.state.file, this.state.file.name);
    emailjs
      .send(
        "service_z07p69h",
        "template_7r99869",
        formData,
        "02WrA4sEvKW4loTY3"
      )
      .then(
        (result) => {
          console.log(result.status, result.text);
        },
        (error) => {
          console.log(error.result, error.text);
        }
      );
  };
  render() {
    return (
      <div style={{ marginBottom: "25px" }}>
        <h4>Upload Your Resume Here !</h4>
        <div>
          <input type="file" name="file" onChange={this.onFileChange} />
          <button type="submit" value="Submit" onClick={this.onFileUpload}>
            Upload!
          </button>
        </div>
      </div>
    );
  }
}
export default Upload;
