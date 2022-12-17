import React, { useEffect, useRef } from "react";

//Router
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

//Components
import PlayPause from "./PlayPause";

//Redux
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  const topPlays = data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
};

export default TopPlay;
