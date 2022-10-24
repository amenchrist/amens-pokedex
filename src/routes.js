import React  from 'react';
import {  useRoutes, Navigate } from 'react-router-dom';
import PokeList from './components/PokeList';
import CardList from './components/CardList';
import Details from './components/Details';

export default function Router() {


  const routes = [
    {
      path: '/',
      element: <PokeList />,//Header and Hero section
      children:[
        { path: 'all', element: <CardList />},//all pokemon
        { path: '/pokemon/:id', element: <Details />  }, // specific pokemon   
        { path: '/', element: <Navigate to="/all" /> },
      ]
    },
    { 
      path: '/all', element: <Navigate to="/" />
    }
  ];


  return useRoutes(routes);

}

