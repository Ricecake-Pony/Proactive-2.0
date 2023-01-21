import {React} from 'react';
import './App.css';



export default function Home () {
    return(
        <div className='homePage'>
            <h2> Your First Step to a Better Tomorrow!</h2>
            <div>
                <h3>Benefits of Stretching and why we should do it:</h3>
                    <img src= "https://i.pinimg.com/originals/bf/42/72/bf427261e9dec96527caacfcb263db42.jpg" alt= ""  />
                    <img src= {"https://www.medicinetalkpro.org/wp-content/uploads/2019/03/Mar19_Therapy.png"} alt= "" /> 
                        <p>
                                As seen above there are many amazing benefits that stretching offers us. A few really important ones for people that may have a more sedentary lifestyle for example if they work constantly at a desk or a work from home are:
                            <ul>
                                <li>Better Posture</li>
                                <li>Improved Circulation</li>
                                <li>Stress Relief</li>
                            </ul>
                            This is because we have a tendency to become creatures of habit whether that's in the same position all day or reacting in a similar manner to  different things. It's very common for people that work at the desk to be hunched over focused in their work. To wear their shoulders almost as earrings without even knowing it. Or even to have their workstation set up in a way that they are looking down far more than they should. These tendencies elad to tightness in our shoulders from us holding them up by our ears for hours at a time. Chronic lower back pain by us being hunched over we are exposing our lower back muscles and not using them with that kind of posture which leads to lower back and hip pains because those muscles aren't being used so they aren't being strengthened to hold us up right which leads to our bad posture. As it's more comfortable to stay in the "normal posiitions" we find ourselves in everyday.
                        </p>
                    <img src= "https://healthmatters.nyp.org/wp-content/uploads/2019/09/too-much-sitting-diagram.jpg" alt= "" />
                    <img src= "https://www.wellable.co/blog/wp-content/uploads/2022/08/standing-desk-001.jpg"/>
                    {/* <img src="https://www.orthocarulina.com/storage/wysiwyg/Ergoomicsworkstation%20OrthoCarulina.jpg" alt= "" /> */}
                    {/* <img src= "https://www.fitnesssulutionsplus.ca/blog/wp-content/uploads/2016/01/Stretching-Exercises-Infographic-546x1024.png" alt= "" /> */}
                        <p className="homeFooter">But take heart! There's hope and it all starts with you taking the first step. 
                        <p>You can use the Tracker feature on the app to create a consistent schedule and watch your progress! All you need to do is sign up. </p>
                </p>
            </div>
        </div>
    )
}