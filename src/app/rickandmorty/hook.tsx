import { useEffect, useState, useCallback } from "react";
import type {Info, Episode} from "./interfaces";
import { useInfiniteQuery } from "react-query";

type Endpoints = {
    episodes: Episode;
    info: Info;
}

const useRickAndMortyAPI = <T extends keyof Endpoints>(endpoint: T) => {
    
}  