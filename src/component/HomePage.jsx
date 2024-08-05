import React from "react";
import "../styles/homePage.css";
import About from "../section/About";
import SmartSaver from "../section/SmartSaver";
import YourSayv from "../section/YourSayv";
import CreditScore from "../section/CreditScore";
import Review from "./Review";
import FAQ from "./FAQ";
import Footer from "./Footer";
import NavBar from "./Navbar";
function HomePage() {
  return (
   <>
    <div className="home-container">
    
      <div>
        <div className="upper">
          <div>
            <button>Building tools for lifestyle</button>
          </div>
          <div>
            <h3>Master the art of managing your </h3>
            <h3>money while on the move.</h3>
          </div>
          <div>
            <p>
              The SAYV App is your all-in-one money management solution, where
              you can track your spending,{" "}
            </p>
            <p>
              monitor your bills, set savings goals, budget effectively, access
              thousands of money-saving tips, ideas,{" "}
            </p>
            <p>and suggestions, and much more</p>
          </div>

          <div className="storeLink-container">
            <div className="play-store"> 
              <img
                src="https://static.wixstatic.com/media/41d000_d91d87a5816435680a72bb329df2ddae.png/v1/fill/w_560,h_196,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/41d000_d91d87a5816435680a72bb329df2ddae.png"
                alt="ply"
              />
            </div>
            <div className="app-store">
              <img
                src="https://w7.pngwing.com/pngs/395/177/png-transparent-app-store-apple-apple-text-logo-mobile-app-development-thumbnail.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="lower">
          <div>
            <div className="img-container">
             
                <img
                  className="laptop-img"
                  src="../..//SayVhomeMobileimage.png"
                  alt=""
                />
              
            </div>
          </div>
        </div>
      </div>
      
     
    </div>
    <About />
      <SmartSaver/>
      <YourSayv/>
      <CreditScore/>
      <Review/>
      <FAQ/>
    </>
  );
}

export default HomePage;
