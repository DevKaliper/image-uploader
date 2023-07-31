import axios from "axios";
const baseUrl = "http://localhost:5000/prueba";

const postImg = (file) => {
    return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "image/jpeg",
    },
    file: file,
  })
    .then((res) => {
      if (res.ok) {
    
          return res.json();
  
      } else {
        

          throw new Error("No proporcionaste una URL válida.");

      }
    })
    
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { postImg }