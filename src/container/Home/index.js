import React from 'react';
import { Link } from 'react-router-dom';
import Uploader from '../../components/UploadForm';

const Home = () => {
  return (
    <div>
      Home Loader alredy installed
      <div>
        <Link to='/sdfsdf'>Not found</Link>
      </div>
      <Uploader />
    </div>
  );
};

export default Home;
