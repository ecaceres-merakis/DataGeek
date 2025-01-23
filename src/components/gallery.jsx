import PowerBI from "./imgs/PowerBI.png";
import Tableau from "./imgs/Tableau.PNG";
import Spark from "./imgs/Spark.png";
import Looker from "./imgs/Looker.PNG";
import Domo from "./imgs/Domo.PNG";
import QlikSense from "./imgs/Qlik Sense.PNG";
import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export const Gallery = props => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const data = [
    { thumb: PowerBI, title: "PowerBI" },
    { thumb: Tableau, title: "Tableau" },
    { thumb: Spark, title: "Spark" },
    { thumb: Looker, title: "Google Looker" },
    { thumb: Domo, title: "Domo" },
    { thumb: QlikSense, title: "Qlik Sense" }
  ];

  const images = data.map(obj => obj.thumb.replace("-small", "-large"));

  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Tecnologías</h2>
          <p>Estas son las tecnologías clave que utilizamos para ofrecer soluciones de alta calidad a nuestros clientes.</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {data.map(({ title, thumb }, index) => (
              <div key={index} onClick={() => openImageViewer(index)} className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item cursor">
                  <div className="hover-bg">
                    <div className="hover-text">
                      <h4>{title}</h4>
                    </div>
                    <img src={thumb} className="img-responsive" alt="Project Title" />{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isViewerOpen && (
            <ImageViewer
              src={images}
              backgroundStyle={{ zIndex: 99999 }}
              currentIndex={currentImage}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
    </div>
  );
};
