import React from 'react';
import { useNavigate } from 'react-router-dom';


 const PageNotFound = () => {

    const navigate = useNavigate();
    const styles = {
        container: {
          textAlign: 'center',
          marginTop: '50px',
        },
        header: {
            color:'#ffffff',
          fontSize: '72px',
          margin: '20px 0',
        },
        text: {
            color:'#ffffff',
          fontSize: '24px',
          margin: '20px 0',
        },
        button: {
          fontSize: '18px',
          padding: '10px 20px',
          cursor: 'pointer',
        },
      };

    return (
      <div style={styles.container}>
        <h1 style={styles.header}>404</h1>
        <p style={styles.text}>Page Not Found</p>
        <button style={styles.button} onClick={() => navigate('/')}>
          Go to Home
        </button>
      </div>
    );
  };

  export default PageNotFound;