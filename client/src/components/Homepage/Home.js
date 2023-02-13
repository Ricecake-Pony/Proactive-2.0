import { React } from "react";
import styled from "@emotion/styled";
const Container = styled.div`
  flex-wrap: wrap;
  font-family: cursive;

  .home p {
    text-align: left;
  }
  .img1 {
    float: right;
    margin: 10px;
    width: 25%;
    height: 350px;
  }

  .bullets {
    margin-left: 20%;
    text-align: left;
    list-style-position: inside;
  }
  .negativesParagraph {
    margin-top: 8%;
    margin-bottom: 1%;
  }
  .negativesImg1 {
    flex-wrap: nowrap;
    width: 25%;
    height: 350px;
  }
  .negativesImg2 {
    flex-wrap: wrap;
    width: 25%;
    height: 350px;
    margin-left: 20px;
  }
  .homeFooter {
    margin-top: 1%;
  }
`;
const Header = styled.h2`
  color: ${(props) => props.color};
`;
export default function Home() {
  return (
    <Container>
      <Header color="green"> Your First Step to a Better Tomorrow!</Header>
      <div>
        <h3>Benefits of Stretching and why we should do it:</h3>
        <img
          className="img1"
          src="https://cdn-elgbf.nitrocdn.com/ZyNWsRqRabdHNlHvWlpiYBfRzZbyjjey/assets/static/optimized/rev-a24ecd7/wp-content/uploads/2021/08/Benefits_of_stretching.jpg"
          alt=""
        />
      </div>
      <p>
        As you may not know there are many amazing benefits that stretching
        offers us. A few really important ones for people that may have a more
        sedentary lifestyle for example if they work constantly at a desk or a
        work from home are:
        <ol className="bullets">
          <li>Better Posture</li>
          <li>Decrease your risk of injuries</li>
          <li>Help your joints move through their full range of motion</li>
          <li>Increase muscle blood flow</li>
          <li>Enable your muscles to work most effectively</li>
          <li>Improve your ability to do daily activities</li>
          <li>Improved Circulation</li>
          <li>Stress Relief</li>
        </ol>
        <div className="negativesParagraph">
          This is because we have a tendency to become creatures of habit
          whether that's in the same position all day or reacting in a similar
          manner to different things. It's very common for people that work at
          the desk to be hunched over focused in their work. To wear their
          shoulders almost as earrings without even knowing it. Or even to have
          their workstation set up in a way that they are looking down far more
          than they should. These tendencies lead to tightness in our shoulders
          from us holding them up by our ears for hours at a time. Chronic lower
          back pain by us being hunched over we are exposing our lower back
          muscles and not using them with that kind of posture which leads to
          lower back and hip pains because those muscles aren't being used so
          they aren't being strengthened to hold us up right which leads to our
          bad posture. As it's more comfortable to stay in the "normal
          positions" we find ourselves in everyday.
        </div>
        <img
          className="negativesImg1"
          src="https://healthmatters.nyp.org/wp-content/uploads/2019/09/too-much-sitting-diagram.jpg"
          alt=""
        />
        <img
          className="negativesImg2"
          src="https://www.wellable.co/blog/wp-content/uploads/2022/08/standing-desk-001.jpg"
        />
      </p>
      <p className="homeFooter">
        But take heart! There's hope and it all starts with you taking the first
        step.
        <p>
          You can use the Tracker feature on the app to create a consistent
          schedule and watch your progress! All you need to do is sign up.{" "}
        </p>
      </p>
    </Container>
  );
}
