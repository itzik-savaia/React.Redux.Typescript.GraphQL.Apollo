import { GET_ANIME_PAGE } from './queris';
import { apolloClient } from './../../graphql/index';
import { GetAnimePage } from "./__generated__/GetAnimePage";

class AnimeService {

    async getAnimePage(page: Number, prePage = 5): Promise<GetAnimePage["Page"]> {
        try {
            const response = await apolloClient.query({
                query: GET_ANIME_PAGE,
                variables: { page, prePage },
            });
            if (!response || !response.data)
                throw new Error("Cannot get anime list!");

            return response.data.Page;
        } catch (err) {
            throw err;
        }
    }
}

export default new AnimeService();