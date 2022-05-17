import { gql } from '@apollo/client';
//EXECUTING THE ME QUERY SETUP WITH APOLLO SERVER
//RETURNING THE USER INFO AS WELL AS BOOK INFO
export const GET_ME = gql`
{
    me{
        username
        email
        bookCount
        savedBooks{
            authors
            description
            bookId
            image
            link
            title
        }
    }
}
`;