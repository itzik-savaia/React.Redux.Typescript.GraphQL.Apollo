import React, { useEffect } from "react";
import { Dispatch } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../hooks";
import animeService from "../../services/animeService";
import { GetAnimePage } from "../../services/animeService/__generated__/GetAnimePage";
import { setAnimePage } from "./HomePageSclise";
import { HotAnime } from "./HotAnime";

interface IHomePageProps {};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const actionDispatch = (dispatch: Dispatch<any>) => ({
    setAnimePage: (page: GetAnimePage["Page"]) => dispatch(setAnimePage(page))
});

export function HomePage(props: IHomePageProps) {
    const { setAnimePage } = actionDispatch(useAppDispatch());

    const fetchAnimePage = async () => {
        const animePage = await animeService.getAnimePage(0, 20).catch((err) => {
            console.log("Error: ", err);
        })
        console.log("Anime page: ", animePage);
        if (animePage) setAnimePage(animePage);
    }

    useEffect(() => {
        fetchAnimePage()
    }, [])


    return (
        <Container>
            <h1>Hot Anime</h1>
            <HotAnime /> 
        </Container>
    );
}