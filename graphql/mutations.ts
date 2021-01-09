/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAlbumCategories = /* GraphQL */ `
  mutation CreateAlbumCategories(
    $input: CreateAlbumCategoriesInput!
    $condition: ModelAlbumCategoriesConditionInput
  ) {
    createAlbumCategories(input: $input, condition: $condition) {
      id
      title
      albums {
        items {
          id
          name
          by
          numberOfLikes
          imageUri
          artistsHeadline
          albumCategoriesId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAlbumCategories = /* GraphQL */ `
  mutation UpdateAlbumCategories(
    $input: UpdateAlbumCategoriesInput!
    $condition: ModelAlbumCategoriesConditionInput
  ) {
    updateAlbumCategories(input: $input, condition: $condition) {
      id
      title
      albums {
        items {
          id
          name
          by
          numberOfLikes
          imageUri
          artistsHeadline
          albumCategoriesId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAlbumCategories = /* GraphQL */ `
  mutation DeleteAlbumCategories(
    $input: DeleteAlbumCategoriesInput!
    $condition: ModelAlbumCategoriesConditionInput
  ) {
    deleteAlbumCategories(input: $input, condition: $condition) {
      id
      title
      albums {
        items {
          id
          name
          by
          numberOfLikes
          imageUri
          artistsHeadline
          albumCategoriesId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAlbum = /* GraphQL */ `
  mutation CreateAlbum(
    $input: CreateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    createAlbum(input: $input, condition: $condition) {
      id
      name
      by
      numberOfLikes
      imageUri
      artistsHeadline
      songs {
        items {
          id
          imageUri
          uri
          title
          artist
          albumId
          createdAt
          updatedAt
        }
        nextToken
      }
      albumCategoriesId
      albumCategories {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAlbum = /* GraphQL */ `
  mutation UpdateAlbum(
    $input: UpdateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    updateAlbum(input: $input, condition: $condition) {
      id
      name
      by
      numberOfLikes
      imageUri
      artistsHeadline
      songs {
        items {
          id
          imageUri
          uri
          title
          artist
          albumId
          createdAt
          updatedAt
        }
        nextToken
      }
      albumCategoriesId
      albumCategories {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAlbum = /* GraphQL */ `
  mutation DeleteAlbum(
    $input: DeleteAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    deleteAlbum(input: $input, condition: $condition) {
      id
      name
      by
      numberOfLikes
      imageUri
      artistsHeadline
      songs {
        items {
          id
          imageUri
          uri
          title
          artist
          albumId
          createdAt
          updatedAt
        }
        nextToken
      }
      albumCategoriesId
      albumCategories {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
      id
      imageUri
      uri
      title
      artist
      albumId
      album {
        id
        name
        by
        numberOfLikes
        imageUri
        artistsHeadline
        songs {
          nextToken
        }
        albumCategoriesId
        albumCategories {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
      id
      imageUri
      uri
      title
      artist
      albumId
      album {
        id
        name
        by
        numberOfLikes
        imageUri
        artistsHeadline
        songs {
          nextToken
        }
        albumCategoriesId
        albumCategories {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
      id
      imageUri
      uri
      title
      artist
      albumId
      album {
        id
        name
        by
        numberOfLikes
        imageUri
        artistsHeadline
        songs {
          nextToken
        }
        albumCategoriesId
        albumCategories {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
