//Router
import { useParams } from "react-router-dom";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../redux/features/playerSlice";

//Components
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
};

export default SongDetails;
