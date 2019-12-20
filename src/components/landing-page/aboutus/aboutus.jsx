import React, {Component} from 'react';
import './aboutus.scss';
import SplitText from 'react-pose-text';
export default class AboutUs extends Component{
    routeBilling=()=>{
        window.location="#/billing"
    }
    render(){
        const charPoses = {
            exit: { y: 20, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: ({ charInWordIndex }) => ({
      type: 'spring',
      delay: charInWordIndex * 30,
      stiffness: 500 + charInWordIndex * 150,
      damping: 10 - charInWordIndex * 1
    })
  }};
        return(
            <div className="aboutUs">
                <h3 className="lHeading"> <SplitText initialPose="exit" pose="enter" charPoses={charPoses}> WHO WE ARE</SplitText></h3>
                    <p className="mHeadingLight"><strong>We are about  solutions.</strong>
                        The <a onClick={this.routeBilling}>wow factor</a>. When a user experiences your product and has that visceral <span><SplitText initialPose="exit" pose="enter" charPoses={charPoses}>“whoa, that was cool”</SplitText></span> reaction— that’s what we’re striving for.
                        We combine a diversity of experience with a ton of cutting-edge industry chops. But our true power comes from a shared belief that the best outcomes are the result of collaboration. You'll love working with us as much as we love working with each other.
                    </p>
            </div>
        );
    }
}