import React, { useEffect } from "react";
import PlanCard from "./Card/PlanCard";
import LeftSidebar from "../../components/LefSidebar/LeftSidebar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import './Plans.css'
const Plans = () => {
  var User = useSelector((state) => state.currentUserReducer);
  const plan = User?.result.planOpted || null
  const navigate = useNavigate();
  const profile = localStorage.getItem("Profile");
  useEffect(() => {
      if (!profile) {
        navigate("/Auth");
      }
  }, [navigate, profile]);
  return (
    <div className="home-container-1">
      <LeftSidebar />
      {profile && <div
        className="home-container-2"
        style={{
          display: "flex",
          height: "50%",
          gap: "15px",
          padding: "60px 10px",
        }}
      >
        <PlanCard isBuyable={false} noOfQuestions="1" price="0" plan="Free" />
        <PlanCard
          isBuyable={true}
          planOpted={plan}
          noOfQuestions="5"
          price={100}
          plan="Silver"
        />
        <PlanCard
          isBuyable={true}
          planOpted={plan}
          noOfQuestions="Unlimited"
          price={1000}
          plan="Gold"
        />
      </div>}
    </div>
  );
};

export default Plans;
// import React, { useEffect } from "react";
// import PlanCard from "./Card/PlanCard";
// import LeftSidebar from "../../components/LefSidebar/LeftSidebar";
// import { useSelector,useDispatch } from "react-redux";
// import { getUserCurrentPlan } from "../../actions/userActions";
// import { useNavigate } from "react-router";
// import './Plans.css'
// const Plans = () => {
//   const dispatch=useDispatch();
//   // var User = useSelector((state) => state.currentUserReducer);
//   const userId = useSelector((state) => state.currentUserReducer?.id); // Assuming you have user ID in your state
//   const planOpted = useSelector((state) => state.userReducer.planOpted);
//   // const plan = User?.result.planOpted 
//   // console.log("chooooosed plan",plan)
//   // console.log("profile:", profile);
//   // console.log("userId:", userId);
//   // console.log("planOpted:", planOpted);

//   const navigate = useNavigate();
//   const profile = localStorage.getItem("Profile");
// //   const handleBuyPlan = (selectedPlan) => {
// //     // Simulating an action to update the planOpted in the Redux store
// //     dispatch({
// //         type: 'UPDATE_PLAN_OPTED',
// //         planOpted: selectedPlan
// //     });
// //     // Perform other actions such as navigating, updating the backend, etc.
// // };
//   useEffect(() => {
//       if (!profile) {
//         navigate("/Auth");
//       }
//       else if (userId !== null){
//         dispatch(getUserCurrentPlan(userId)); // Dispatch action to fetch user's current plan
//       }
//   }, [dispatch, navigate, profile, userId]);
//    if (userId === null) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div className="home-container-1">
//       <LeftSidebar />
//       {profile && <div
//         className="home-container-2"
//         style={{
//           display: "flex",
//           height: "50%",
//           gap: "15px",
//           padding: "60px 10px",
//         }}
//       >
//         <PlanCard isBuyable={false} noOfQuestions="1" price="0" plan="Free" />
//         <PlanCard
//           isBuyable={true}
//           planOpted={planOpted}
//           noOfQuestions="5"
//           price={100}
//           plan="Silver"
//           // handleBuyPlan={() => handleBuyPlan("Silver")}
//         />
//         <PlanCard
//           isBuyable={true}
//           planOpted={planOpted}
//           noOfQuestions="Unlimited"
//           price={1000}
//           plan="Gold"
//           // handleBuyPlan={() => handleBuyPlan("Gold")}
//         />
//       </div>}
//     </div>
//   );
// };

// export default Plans;