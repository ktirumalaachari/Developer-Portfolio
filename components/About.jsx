import { FaInstagram, FaReact, FaNodeJs, FaBootstrap, FaGitAlt, FaPython, FaJava } from "react-icons/fa";
import { RiJavascriptFill, RiLinkedinFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io5";
import { SiMysql, SiNestjs, SiExpress, SiMongodb, SiTailwindcss, SiVercel, SiRender, SiMui } from "react-icons/si";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaHtml5 } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from "react";

/* ================= SKILLS DATA ================= */

const frontendSkills = [
  { icon: <RiJavascriptFill size={50} className="text-yellow-500" />, label: "JavaScript" },
  { icon: <FaReact size={50} className="text-sky-500" />, label: "React JS" },
  { icon: <span className="text-black text-5xl font-bold">N</span>, label: "Next JS" },
  { icon: <BiLogoTypescript size={50} className="text-blue-500" />, label: "TypeScript" },
  { icon: <IoLogoCss3 size={50} className="text-blue-500" />, label: "CSS" },
  { icon: <SiTailwindcss size={50} className="text-cyan-400" />, label: "Tailwind CSS" },
  { icon: <FaBootstrap size={50} className="text-purple-600" />, label: "Bootstrap" },
  { icon: <SiMui size={50} className="text-blue-700" />, label: "Material UI" },
];

const backendSkills = [
  { icon: <FaNodeJs size={45} className="text-green-500" />, label: "Node JS" },
  { icon: <SiExpress size={45} className="text-black" />, label: "Express JS" },
  { icon: <SiNestjs size={45} className="text-red-600" />, label: "NestJS" },
  { icon: <FaHtml5 size={50} className="text-orange-600" />, label: "HTML" },
];

const databaseSkills = [
  { icon: <SiMongodb size={45} className="text-green-500" />, label: "MongoDB" },
  { icon: <SiMysql size={45} className="text-cyan-500" />, label: "MySQL" },
];

const programmingSkills = [
  { icon: <FaJava size={45} className="text-red-700" />, label: "Java" },
  { icon: <FaPython size={45} className="text-yellow-600" />, label: "Python" },
];

const toolsSkills = [
  { icon: <FaGitAlt size={45} className="text-orange-600" />, label: "Git" },
  { icon: <PiGithubLogoFill size={45} className="text-black" />, label: "GitHub" },
  { icon: <SiVercel size={45} className="text-black" />, label: "Vercel" },
  { icon: <SiRender size={45} className="text-purple-500" />, label: "Render" },
];

const coreSkills = [
  { label: "Data Structures & Algorithms" },
  { label: "REST APIs" },
  { label: "Docker" },
];

/* ================= COMPONENT ================= */

const About = React.memo(function About() {
  return (
    <main
      className="min-h-[calc(100svh-5.03rem)] lg:p-6 p-1 justify-between items-center"
      id="about"
    >
      <section className="flex items-center gap-4 pt-3">
        <hr className="h-1 w-12 bg-gray-600 rounded-full" />
        <p className="text-xl lg:text-2xl font-medium">
          &lt;About Me &nbsp;/&gt;
        </p>
      </section>

      <section className="flex flex-col-reverse lg:flex-row lg:p-6 p-4 gap-6 mt-6">

        {/* ================= LEFT SECTION ================= */}

        <section className="w-full p-2 rounded-xl py-6 lg:py-0.5 shadow-sm flex flex-col max-md:gap-6 card lg:p-4">

          <section className="flex items-center gap-4">
            <hr className="h-1 w-16 bg-gray-600 rounded-full" />
            <p className="text-xl lg:text-2xl font-medium">
              &lt;My Skills &nbsp;/&gt;
            </p>
          </section>

          {/* All Skills - Single Grid */}
          <section className="mt-4">

            <section className="p-2 flex gap-6 justify-center flex-wrap text-lg">
              {[
                ...frontendSkills,
                ...backendSkills,
                ...databaseSkills,
                ...programmingSkills,
                ...toolsSkills,
              ].map((skill) => (
                <div
                  key={skill.label}
                  className="flex justify-center items-center flex-col w-24"
                >
                  {skill.icon}
                  <span className="mt-1 text-sm text-center">
                    {skill.label}
                  </span>
                </div>
              ))}
            </section>

            {/* Core Concepts Badges */}
            <div className="flex flex-wrap justify-center gap-2 mt-4 text-sm text-gray-700">
              {coreSkills.map((skill) => (
                <span
                  key={skill.label}
                  className="px-3 py-1 bg-gray-200 rounded-full"
                >
                  {skill.label}
                </span>
              ))}
            </div>

          </section>
        </section>

        {/* ================= RIGHT SECTION (UNCHANGED) ================= */}

        <section className="w-full p-3 flex flex-col justify-start gap-4 text-xl rounded-xl py-6 shadow-sm lg:p-6 card">
          <section className="flex items-center gap-4 ">
            <hr className="h-1 w-16 bg-gray-700 rounded-full" />
            <p className="font-medium text-xl lg:text-2xl">
              &lt;Education&nbsp;/&gt;
            </p>
          </section>

          <p className="lg:text-xl text-lg text-gray-700 font-normal">
            Hello! I'm K Tirumala Achari, a passionate and Dedicated Full Stack
            Developer. I've completed my B.Tech in Computer Science and Engineering
            from NIST University in 2026, Berhampur, Odisha.
          </p>

          <p className="lg:text-xl text-lg text-gray-700 font-normal">
            NIST INSTITUTE OF SCIENCE AND TECHNOLOGY (NIST University)
            Berhampur, Odisha Sep 2023 - July 2026
            Bachelors of Technology (Computer Science and Engineering) CGPA: 7.34
            Status: Pursuing
          </p>

          <p className="lg:text-xl text-lg text-gray-700 font-normal">
            SANJAY MEMORIAL INSTITUTE OF TECHNOLOGY (SMIT)
            Ankushpur, Odisha March 2020 - July 2023
            Diploma (Computer Science and Engineering) Percentage: 85%
            Status: completed
          </p>

          <p className="lg:text-xl text-lg text-gray-700 font-normal">
            10th Standard Science Stream
            Utkal Vidya Mandir High School
            Berhampur, Odisha 2017 - 2018 Percentage: 45%
            Status: completed
          </p>
        </section>

      </section>
    </main>
  );
});

export default About;
