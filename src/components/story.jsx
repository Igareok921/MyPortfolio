import React, { useState } from "react";

const Story = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {showMore ? (
        <div className=" text-[1.1rem] lg6:text-[1rem] tracking-wide leading-relaxed ">
          <p>
            Hello, my name is Igor and I'm delighted to have the opportunity to
            share my story with you. Originally from Moldova, I have been living
            in Ireland for the past six years.
          </p>
          <p>
            <b>In 2008</b>, I started my college journey in engineering, where I
            learned how to fix computers and gained experience with Linux
            operating systems. During my final year of college, I was introduced
            to programming and design, which sparked my interest in technology
            even further.
          </p>
          <p>
            After graduating in 2012, I completed an internship with a
            telecommunications company in Moldova. <b>In 2013</b> , I began
            working as an IT engineer for a toy shop company, where I gained
            valuable experience working with a team of 50 people. My
            responsibilities included resolving technical issues, such as fixing
            computers, network issues, and operating system problems.
          </p>
          <p>
            <b>In 2013</b> , I received an offer to work in Russia, where I took
            on a job selling and fixing computers. Although it was not the most
            challenging position, the wages were five times higher than what I
            was earning at the time. I continued working in Russia for three
            years before returning to Moldova, where I became self-employed
            selling food products from a mini shop.
          </p>
          <p>
            <b>In 2017</b> , I moved to Ireland with my family and began working
            as a chef-manager for a takeaway restaurant. This role taught me
            valuable skills such as customer experience, responsibility,
            problem-solving, team leadership, and organization. In 2019, I and
            my wife decided to start our own restaurant business, which went
            well until the COVID-19 pandemic hit in 2020. Unfortunately, we lost
            the restaurant due to the challenging business environment.
          </p>
          <p>
            <b>In 2021</b> , I decided to pursue my passion for technology once
            again and began looking for a job in IT. However, I quickly realized
            that many years had passed since I had last worked in the industry,
            and much had changed. So, I decided to embark on a journey in
            front-end development. I bought online courses and began learning
            every day, starting with UI/UX design. With my previous experience,
            I was able to learn quickly and become proficient in Figma and Adobe
            XD. After a year of focusing on UI design, I started to think about
            how I could implement my designs using code. I began taking courses
            on front-end development, including HTML, CSS, JavaScript, and
            React.js. After thousands of hours of work, I was finally able to
            create amazing things. However, I know that there is still so much
            more to learn, and that's what I love about this field - the
            opportunity for continued learning and growth.
            <br />
            <br />
            Thank you for taking the time to read a little bit about me!
          </p>
          <button
            className="text-blue-100 font-medium hover:text-orange-100"
            onClick={() => setShowMore(false)}
          >
            Show Less ⬆️
          </button>
        </div>
      ) : (
        <>
          <div className=" text-[1.1rem] lg6:text-[1rem] tracking-wide leading-relaxed ">
            <p>
              Hello, my name is Igor and I'm delighted to have the opportunity
              to share my story with you. Originally from Moldova, I have been
              living in Ireland for the past five years.
            </p>
            <p>
              <b>In 2008,</b> I started my college journey in engineering, where
              I learned how to fix computers and gained experience with Linux
              operating systems. During my final year of college, I was
              introduced to programming and design, which sparked my interest in
              technology even further...
            </p>
            <button
              className="text-blue-100 font-medium hover:text-orange-100"
              onClick={() => setShowMore(true)}
            >
              Show More⬇️
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Story;
