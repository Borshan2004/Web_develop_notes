import React from "react";

import { useSpring, animated } from "react-spring";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 3000,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  const AnimatedDiv = animated.div;


  return (
    <AnimatedDiv>
      {number.to((n) => n.toFixed(0))}
    </AnimatedDiv>
  );
}



const Countdown = () => {
  return (
    <div>
      <h1 className="text-[40px] font-bold text-center my-5">We Provide Best Law Services</h1>
      <p className="text-center mx-64 my-5">Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>




      <div className="flex justify-center gap-28 ">

        <div className="bg-[#f0f0f0] w-65 h-56 rounded-2xl">
          <div className="p-12 flex flex-col justify-end items-center gap-4">
            <img src="/src/assets/C002-assets/success-doctor.png" alt="" />
            <div className="text-4xl">
              <div className="flex font-bold">
                <Number n={199} />
                <div>+</div>
              </div>

            </div>
            <h1>Total Lawyer</h1>

          </div>

        </div>

        <div className="bg-[#f0f0f0] w-65 h-56 rounded-2xl">
          <div className="p-12 flex flex-col justify-end items-center gap-4">
            <img src="/src/assets/C002-assets/success-review.png" alt="" />
            <div className="text-4xl">
              <div className="flex font-bold">
                <Number n={467} />
                <div>+</div>
              </div>

            </div>
            <h1>Total Reviews</h1>

          </div>

        </div>


        <div className="bg-[#f0f0f0] w-65 h-56 rounded-2xl">
          <div className="p-12 flex flex-col justify-end items-center gap-4">
            <img src="/src/assets/C002-assets/success-patients.png" alt="" />
            <div className="text-4xl">
              <div className="flex font-bold">
                <Number n={1900} />
                <div>+</div>
              </div>

            </div>
            <h1>Cases Initiated</h1>

          </div>

        </div>


        <div className="bg-[#f0f0f0] w-65 h-56 rounded-2xl">
          <div className="p-12 flex flex-col justify-end items-center gap-4">
            <img src="/src/assets/C002-assets/success-staffs.png" alt="" />
            <div className="text-4xl">
              <div className="flex font-bold">
                <Number n={300} />
                <div>+</div>
              </div>

            </div>
            <h1>Total Stuffs</h1>

          </div>

        </div>




      </div>



    </div>
  );
};

export default Countdown;
