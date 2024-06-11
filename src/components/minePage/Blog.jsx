import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';

function Blog() {
  useEffect(() => {
    const loadScript = (src, callback) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = callback;
      document.head.appendChild(script);
    };

    const initializePlayer = () => {
      if (window.mistplayers) {
        window.mistPlay("cp+dvcsvnrt_1_66b49f1c353ea26b22ca8fd00377ed17", {
          target: document.getElementById("cp+dvcsvnrt_1_66b49f1c353ea26b22ca8fd00377ed17_element")
        });
      } else {
        const protocol = window.location.protocol;
        loadScript(protocol === "https:" ? "https://hub.anycam.io:443/player.js" : "http://hub.anycam.io:80/player.js", () => {
          window.mistPlay("cp+dvcsvnrt_1_66b49f1c353ea26b22ca8fd00377ed17", {
            target: document.getElementById("cp+dvcsvnrt_1_66b49f1c353ea26b22ca8fd00377ed17_element")
          });
        });
      }
    };

    initializePlayer();
  }, []);

  return (
    <div className="flex justify-center items-center">
   
       {/* <ReactPlayer controls url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />  */}
      <div className="mistvideo" id="cp+dvcsvnrt_1_66b49f1c353ea26b22ca8fd00377ed17_element">
        <noscript>
          <a href="https://hub.anycam.io/cp+dvcsvnrt_1_66b49f1c353ea26b22ca8fd00377ed17.html" target="_blank">
            Click here to play this video
          </a>
        </noscript>
      </div>
    </div>
  );
}

export default Blog;
