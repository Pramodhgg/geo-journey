import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      {/* <button
        onClick={() => {
          setSearchParams({ lat: 38.727881642324164, lng: -9.140900099907554 });
        }}
      >
        change pos
      </button> */}

      <iframe
        className={styles.map}
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${lng}%2C${lat}%2C${lng}%2C${lat}&layer=mapnik&marker=${lat}%2C${lng}`}
      ></iframe>
    </div>
  );
}
export default Map;
