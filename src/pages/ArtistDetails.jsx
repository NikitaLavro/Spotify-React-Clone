import React from "react";

//Router
import { useParams } from "react-router-dom";

//Redux
import { useSelector } from "react-redux";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

//Components
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

const ArtistDetils = () => {
  const { artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetSongDetailsQuery(artistId);

  if (isFetchingArtistDetails) return <Loader title="Loading artist details" />;

  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics</h2>
        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line, i) => (
              <p className="text-gray-400 text-base my-1">{line}</p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry, no lyrics found
            </p>
          )}
        </div>
      </div>
      <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default ArtistDetails;
