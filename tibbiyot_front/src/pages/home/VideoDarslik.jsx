import React from "react";

import people from "../../assets/icons/peopleIcon.svg";
import { Link } from "react-router-dom";

function VideoDarslik() {
  return (
    <>
      <div className="videoDarslik container">
        <div className="video">
          <iframe
            className="iFrame"
            src="https://www.youtube.com/embed/mllhq9NEVjM?autoplay=1&mute=1"
            // frameborder="1"
          ></iframe>
        </div>
        <div className="videoDesc">
          <h1 className="title">Video darsliklar</h1>
          <p>
            It is important to stay focused on saving money in any way you can.
            We help you monitor your spending habits so you can easily spot and
            cut any unnecessary expenses. Simply join today to get started!
          </p>
          <div className="row">
            <div className="col">
              <div className="item">
                <img src={people} />
                <Link>
                  <h5>Amaliy imtihonlari</h5>
                  <p>15 imtihonlar</p>
                </Link>
              </div>
              <div className="item">
                <img src={people} />
                <Link>
                  <h5>O’quv modullari</h5>
                  <p>10 modul</p>
                </Link>
              </div>
              <div className="item">
                <img src={people} />
                <Link>
                  <h5>“Master klass” darslari</h5>
                  <p>8 darslik</p>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="item">
                <img src={people} />
                <Link>
                  <h5>Video yo‘riqnomalar</h5>
                  <p>1 yo‘riqnoma</p>
                </Link>
              </div>
              <div className="item">
                <img src={people} />
                <Link>
                  <h5>Animatison roliklar</h5>
                  <p>10 animatsion rolik</p>
                </Link>
              </div>
              <div className="item">
                <img src={people} />
                <Link>
                  <h5>Video kurslar</h5>
                  <p>20 video</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoDarslik;
