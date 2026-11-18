import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="title h-40 bg-green-100 mt-8 p-4 text-center rounded-b-[4rem]">
        <h1 className="text-3xl text-green-800 font-bold mb-4">
          Artificial Intelligence is Taking over CyberSecurity
        </h1>
        <p className="text-xl mx-32 font-light">
          Artificial Intelligence (AI) drives innovations that enhance threat
          discovery, vulnerability analysis, code reviewing, and time-consuming
          tasks automation, enabling companies to adapt to emerging digi
        </p>
      </div>
      <div className="img flex justify-center">
        <img
          className="h-90 aling-center"
          src="https://www.mindrisers.com.np/media/static/Images/blog/banner/viber_image_2026-07-31_14-34-55-881.jpg"
          alt=""
        />
      </div>
      <div className="blog flex p-4 m-4 gap-8 justify-between">
        <div className="left w-sm "></div>
        <div className="center w-7xl">
          <div className="author flex gap-4 justify-between mb-4 text-xl">
            <h3 className="text-green-800">Astha Chetri - Author</h3>
            <h4>2026-08-04</h4>
          </div>
          <p className="text-l font-normal">
            In our previous blog, we discussed how Mindrisers’ Cybersecurity
            Training with AI curriculum has been updated to include hands-on
            components in Web Security, Mobile Application Security, Cloud
            Security, and AI for Security. [Explore : Mindrisers’ Updated
            Cybersecurity Course: AI-Integrated Training for the Future ]
            <br />
            <br />
            As the field of cybersecurity grows increasingly complex, evolving
            with new technology, vulnerabilities, trends, and employer needs,
            cybersecurity training programs must also adapt to prepare students
            for the latest developments. Before making any updates, the team at
            Mindrisers Institute of Technology analyzed how the changes would
            benefit the students and the curriculum. The result is a revised
            cybersecurity training program that enables students to gain
            valuable and relevant skills that will prepare them for the modern
            IT workplace and future cybersecurity roles. <br />
            <br /> In particular, Mindrisers focused on providing an education
            in the most relevant and desirable skills to students in order to
            prepare them for their future careers.
          </p>
          <div className="blog-1 mt-4">
            <h3 className="text-green-800 font-bold mb-4 ">
              1. The Growing Role of AI in Cybersecurity
            </h3>
            <p className="">
              Artificial Intelligence (AI) drives innovations that enhance
              threat discovery, vulnerability analysis, code reviewing, and
              time-consuming tasks automation, enabling companies to adapt to
              emerging digital threats and improve overall cybersecurity
              resilience. Therefore, it has become essential for security
              professionals to learn and understand how to leverage and benefit
              from AI-enabled solutions. To address this need, Mindrisers’s
              upgraded Cybersecurity Training with AI has integrated the concept
              of artificial intelligence into the syllabus. The program includes
              AI-related topics like source code analysis, finding
              vulnerabilities, penetration testing, and cyber research, enabling
              students to recognize the impact of AI on the cybersecurity field
              and be able to embrace cutting-edge technology in their
              practice.{" "}
            </p>
          </div>
          <div className="blog-1 mt-4">
            <h3 className="text-green-800 font-bold mb-4 ">
              2. Mobile Application Security Has Become More Important Than Ever
            </h3>
            <p className="">
              Modern enterprises are relying more on mobile applications for
              banking, healthcare, shopping, communication, education, and other
              purposes. Unfortunately, this also makes mobile apps a prime
              target for cyber-attacks. While many conventional cybersecurity
              programs are focused on operating system security, the reality is
              that most cyber incidents today are related to vulnerabilities
              within apps. Common mobile application security issues include
              insecure API, hardcoded credentials, misconfigured Android apps,
              weak authentication, sensitive data exposure, and insecure native
              libraries, among others. These vulnerabilities are consistently
              identified during penetration testing and security assessments,
              but they are often overlooked in many cybersecurity training
              programs. In response, Mindrisers Institute has replaced several
              irrelevant topics with a Mobile Application Security module that
              gives students valuable insight into the following areas:
            </p>
          </div>
          <div className="blog-1 mt-4">
            <h3 className="text-green-800 font-bold mb-4 ">
              2. Mobile Application Security Has Become More Important Than Ever
            </h3>
            <p className="">
              Modern enterprises are relying more on mobile applications for
              banking, healthcare, shopping, communication, education, and other
              purposes. Unfortunately, this also makes mobile apps a prime
              target for cyber-attacks. While many conventional cybersecurity
              programs are focused on operating system security, the reality is
              that most cyber incidents today are related to vulnerabilities
              within apps. Common mobile application security issues include
              insecure API, hardcoded credentials, misconfigured Android apps,
              weak authentication, sensitive data exposure, and insecure native
              libraries, among others. These vulnerabilities are consistently
              identified during penetration testing and security assessments,
              but they are often overlooked in many cybersecurity training
              programs. In response, Mindrisers Institute has replaced several
              irrelevant topics with a Mobile Application Security module that
              gives students valuable insight into the following areas:
            </p>
          </div>
          <div className="blog-1 mt-4">
            <h3 className="text-green-800 font-bold mb-4 ">
              2. Mobile Application Security Has Become More Important Than Ever
            </h3>
            <p className="">
              Modern enterprises are relying more on mobile applications for
              banking, healthcare, shopping, communication, education, and other
              purposes. Unfortunately, this also makes mobile apps a prime
              target for cyber-attacks. While many conventional cybersecurity
              programs are focused on operating system security, the reality is
              that most cyber incidents today are related to vulnerabilities
              within apps. Common mobile application security issues include
              insecure API, hardcoded credentials, misconfigured Android apps,
              weak authentication, sensitive data exposure, and insecure native
              libraries, among others. These vulnerabilities are consistently
              identified during penetration testing and security assessments,
              but they are often overlooked in many cybersecurity training
              programs. In response, Mindrisers Institute has replaced several
              irrelevant topics with a Mobile Application Security module that
              gives students valuable insight into the following areas:
            </p>
          </div>
        </div>
        <div className="right w-md flex flex-col gap-4">
          <h2 className="">Recent</h2>
          <p>
            01 From Classroom Learning to Real-World Experience: My First Step
            into Digital Marketing
          </p>
          <p>
            02 Inside Mindrisers Cybersecurity Course: Modules, Tools & Career
            Paths Explained
          </p>
          <p>03 What Are the Benefits of AI-Powered Cybersecurity Training?</p>
          <p>04 Artificial Intelligence is Taking over CyberSecurity</p>
        </div>
      </div>
    </>
  );
}

export default App;
