import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Trending',
    url: 'https://api.themoviedb.org/3/trending/movie/week?api_key=df032f0bbf7881c7e18f93539c8a73ba&language=en-US&page=1',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Popular',
    url: 'https://api.themoviedb.org/3/movie/popular?api_key=df032f0bbf7881c7e18f93539c8a73ba&language=en-US&page=1',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'R Rated',
    url: 'https://api.themoviedb.org/3/discover/movie/?api_key=df032f0bbf7881c7e18f93539c8a73ba&certification_country=US&certification=R&sort_by=vote_average.desc',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Science Fiction',
    url: "https://api.themoviedb.org/3/discover/movie?with_genres=878&sort_by=vote_average.desc&api_key=df032f0bbf7881c7e18f93539c8a73ba&language=en-US&page=1",
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
];