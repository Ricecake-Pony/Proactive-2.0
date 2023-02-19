import { React } from "react";
import styled from "@emotion/styled";
const Container = styled.div`

  
.home{
  border-style: solid;
  display: inline-block;
  margin-top: 20px;
}

  .home h1{
    color: #71ddc4;
    font-family="Mulish";
  }
  .home p {
    text-align: left;
    font-family: 'lato';
    font-size: 18px;
  }
  .img1 {
    float: right;
    margin: 10px;
    width: 400px;
    height: 350px;
  }
  .bullets {
    margin-left: 20%;
    text-align: left;
    list-style-position: inside;
  }

  .negatives-text{
    margin-left: 10%;
    margin-right:10%;
  }

  .negatives-information p{
    font-family: 'lato';
    font-size: 16px;
  }
  .negatives-information h2{
    color: #71ddc4;
    font-family:"Mulish"; 
  }

  .negative-img{
    display:flex;
    justify-content: space-between;
  }
  .negatives-img1 {
    width: 350px;
    height: 350px;
    margin-right: 20px;
  }
  .negatives-img2 {
    width: 350px;
    height: 350px;
    margin-left: 20px;
  }
  .home-footer {
    margin-top: 1%;
    margin-left: 10%;
    margin-right:10%;
  }
`;
export default function Home() {
  return (
    <Container>
      <div className="home">
        <div>
          <h1> YOUR FIRST STEP TO A BETTER TOMORROW</h1>
          <img
            className="img1"
            src="https://cdn-elgbf.nitrocdn.com/ZyNWsRqRabdHNlHvWlpiYBfRzZbyjjey/assets/static/optimized/rev-a24ecd7/wp-content/uploads/2021/08/Benefits_of_stretching.jpg"
            alt=""
          />
        </div>
        <p>
          As you may know, there are many benefits that stretching offers us and
          can be beneficial to those who live a more sedimentary lifestyle:
          <ol className="bullets">
            <li>Better Posture</li>
            <li>Decrease your risk of injuries</li>
            <li>Help your joints move through their full range of motion</li>
            <li>Enable your muscles to work more effectively</li>
            <li>Improve your ability to do daily activities</li>
            <li>Improved Circulation</li>
            <li>Stress Relief</li>
          </ol>
        </p>
      </div>
      <div className="negatives-information">
        <div className="negatives-text">
          <h2>Common Bad Habits from working at a Desk</h2>
          <p>
            It is more comfortable to stay in the "normal positions" we find
            ourselves in everyday. For example, wearing our shoulders almost as
            earrings without even knowing it or even to have our workstation set
            up in a way that we are looking down far more than they should.
          </p>
        </div>
        <div className="negatives-img">
          <img
            className="negatives-img1"
            src="https://healthmatters.nyp.org/wp-content/uploads/2019/09/too-much-sitting-diagram.jpg"
            alt=""
          />
          <img
            className="negatives-img2"
            src="https://www.wellable.co/blog/wp-content/uploads/2022/08/standing-desk-001.jpg"
            alt=""
          />
        </div>
        <p className="home-footer">
          You can use the Tracker
          feature on the app to create a consistent schedule and watch your
          progress
        </p>
      </div>
    </Container>
  );
}
