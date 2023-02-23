import { ArrowBackOutlined } from '@mui/icons-material';
import "./watch.scss";
import { Link } from 'react-router-dom';


export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <Link to="/">
        <ArrowBackOutlined />
        Home
        </Link>
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Rapsfeld_am_Untreusee_20220510_C0268.webm"
      />
    </div>
  );
}