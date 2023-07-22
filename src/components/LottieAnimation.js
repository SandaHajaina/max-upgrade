import React from "react";
import Lottie from "lottie-react";

const App = ({ animationData }) => <Lottie animationData={animationData} loop={true} />;

export default App;

// const LottieAnimation = ({ animationData }) => {
//     const defaultOptions = {
//         loop: true,
//         autoplay: true,
//         animationData: animationData,
//         rendererSettings: {
//             preserveAspectRatio: 'xMidYMid slice'
//         }
//     };

//     return <Lottie options={defaultOptions} />;
// };


// export default LottieAnimation;