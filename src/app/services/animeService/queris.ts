import ggl from 'graphql-tag'

export const GET_ANIME_PAGE = ggl`
    query GetAnimePage($page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage) {
            media {
                id
                description
                averageScore
                title {
                    english
                }
                coverImage {
                    extraLarge
                }
            }
        }
    }
`;