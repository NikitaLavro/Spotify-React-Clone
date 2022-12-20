import React from "react";

//Router
import { useParams } from "react-router-dom";

//Redux
import { useSelector } from "react-redux";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

//Components
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

const ArtistDetails = () => {
  const { artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  if (isFetchingArtistDetails) return <Loader title="Loading artist details" />;

  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />

      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
