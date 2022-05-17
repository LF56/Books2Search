import { gql } from '@apollo/client';

//FRONT END FUNCTIONALITY TO LOGIN TO APPLICATION
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
//FRONT END FUNCTIONALITY TO ADD NEW USERS
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
//FRONT END FUNCTIONALITY TO SAVE BOOKS
export const SAVE_BOOK = gql`
  mutation saveBook($thoughtText: String!) {
    saveBook(book: $book) {
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
//FRONT END FUNCTIONALITY TO REMOVE BOOKS
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
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
