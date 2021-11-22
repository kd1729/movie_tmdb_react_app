export const SidebarData = [
  {
    title: 'Trending',
    url: 'https://api.themoviedb.org/3/trending/movie/week?api_key=df032f0bbf7881c7e18f93539c8a73ba&language=en-US&page=1',
  },
  {
    title: 'Popular',
    url: 'https://api.themoviedb.org/3/movie/popular?api_key=df032f0bbf7881c7e18f93539c8a73ba&language=en-US&page=1',
  },
  {
    title: 'R Rated',
    url: 'https://api.themoviedb.org/3/discover/movie/?api_key=df032f0bbf7881c7e18f93539c8a73ba&certification_country=US&certification=R&sort_by=vote_average.desc',
  },
  {
    title: 'Science Fiction',
    url: "https://api.themoviedb.org/3/discover/movie?with_genres=878&sort_by=vote_average.desc&api_key=df032f0bbf7881c7e18f93539c8a73ba&language=en-US&page=1",
  },
  {
    title: 'Kids',
    url: "https://api.themoviedb.org/3/discover/movie?api_key=df032f0bbf7881c7e18f93539c8a73ba&certification_country=US&certification.lte=G&sort_by=popularity.desc",
  },
  {
    title: 'Dramas',
    url: "https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&api_key=df032f0bbf7881c7e18f93539c8a73ba&language=en-US&page=1",
  },
  {
    title: 'Comedies',
    url: "https://api.themoviedb.org/3/discover/movie?with_genres=35&sort_by=vote_average.desc&api_key=df032f0bbf7881c7e18f93539c8a73ba&language=en-US&page=1",
  },
];