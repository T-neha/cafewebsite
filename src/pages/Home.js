import React from 'react';
import Layout from './../components/Layout/Layout';
import { Link } from 'react-router-dom';
import Banner from '../images/banner11.jpg';
import '../components/styles/HomeStyles.css';

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${Banner})`}}>
      <div className="headerContainer">
        <h1>Caffeine Corner</h1>
        <p>Best Fastfood Cafe for Anyone!</p>
        <Link to ="/menu">
        <button>
          ORDER NOW
        </button>
        </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
