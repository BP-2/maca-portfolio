import { useState } from "react";
import "./App.css";

function Gallery() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <h3>Gallery</h3>
        <iframe width = "80%" height = "500px" allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" className = "gallery" src="https://panoraven.com/en/embed/YXuZ2G1PJV"></iframe>
        <p className="read-the-docs">
            Use the menu to look through each of the pictures.  You can also click and drag to look around.
        </p>
        <h3 className="marginzzz">Videos</h3>
        <iframe className = "video" width="560" height="315" src="https://www.youtube.com/embed/j_7zGDMUgc4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className = "video" width="560" height="315" src="https://www.youtube.com/embed/_4XRF3enqi4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className = "video" width="560" height="315" src="https://www.youtube.com/embed/KtS7PbNsR0Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p className="read-the-docs">
            For best results, increase quality to max resolution.
        </p>
    </div>

  );
}


export default Gallery;
