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

const TopPlay = () => <div>TopPlay</div>;

export default TopPlay;
