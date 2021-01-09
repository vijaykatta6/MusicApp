/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlbumCategories = /* GraphQL */ `
  subscription OnCreateAlbumCategories {
    onCreateAlbumCategories {
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
export const onUpdateAlbumCategories = /* GraphQL */ `
  subscription OnUpdateAlbumCategories {
    onUpdateAlbumCategories {
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
export const onDeleteAlbumCategories = /* GraphQL */ `
  subscription OnDeleteAlbumCategories {
    onDeleteAlbumCategories {
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
export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum {
    onCreateAlbum {
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
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum {
    onUpdateAlbum {
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
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum {
    onDeleteAlbum {
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
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
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
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
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
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
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
