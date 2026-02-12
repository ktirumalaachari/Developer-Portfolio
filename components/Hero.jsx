"use client";
import Image from "next/image";
import { RiLinkedinFill } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import bgImg from "../public/hero/bg.png";

const Hero = () => {
  const handleDownloadResume = () => {
    const resumeUrl = "/resume/Avnish_Kumar_Resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <main className="min-h-[calc(100svh-5.03rem)] md:flex-row flex flex-col-reverse justify-center items-center gap-4">
      {/* Left Section */}
      <section className=" max-w-3xl min-h-xl p-4 flex flex-col gap-3 m-4">
        <p className="lg:text-3xl text-2xl font-medium">👋 Hi, I am</p>

        <h1 className="lg:text-5xl text-4xl font-bold text-emerald-700">
          K Tirumala Achari
        </h1>

        {/* Typewriter Effect */}
        <div className="text-xl md:text-2xl font-semibold text-black-700 min-h-[3rem] flex items-center">
        <span className="mr-2 text-emerald-500">→</span>
        <Typewriter options={{
          strings: [
            "Full Stack Developer",
            "Frontend Developer",
            "Backend Developer",
            "Problem Solver",
            "Building scalable solutions with code & creativity.",
           ],
          autoStart: true,
          loop: true,
          delay: 80,
          deleteSpeed: 50,
        }}/>
        </div>
        <p className="lg:text-2xl text-lg text-gray-600">
          I&apos;m a Passionate Full Stack Developer with experience in building
          modern and scalable web applications. Proficient in JavaScript,
          TypeScript, React, Next.js, Node.js, Express.js, and MongoDB, strong
          foundation in Java and Data Structures & Algorithms
        </p>

        <p className="lg:text-2xl text-lg text-gray-600">
          I also have a good understanding of Java and use Tailwind CSS to build
          clean and responsive user interfaces. I enjoy turning ideas into
          real-world web solutions that are fast, secure, and easy to use. I pay
          attention to both the frontend and backend, making sure everything
          works smoothly together.
        </p>

        <section className="flex flex-col gap-6">
          {/* Social Media Icons */}
          <section className="flex items-center gap-4 mt-3">
            <a
              href="https://www.linkedin.com/in/k-tirumala-achari-921106307"
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my linkedin profile"
            >
              <RiLinkedinFill className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-blue-500 hover:bg-blue-500 p-1.5 hover:text-white" />
            </a>

            <a
              href="https://github.com/ktirumalaachari"
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my github profile"
            >
              <PiGithubLogoFill className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-black hover:bg-black p-1.5 hover:text-white" />
            </a>

            <a
              href="https://x.com/TiruAchari"
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my x profile"
            >
              <FaXTwitter className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-black hover:bg-black p-1.5 hover:text-white" />
            </a>

            <a
              href="https://www.instagram.com/k_tiru_mala_achari"
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my instagram profile"
            >
              <FaInstagram className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-pink-500 hover:bg-pink-500 p-1.5 hover:text-white" />
            </a>
          </section>

          {/* Buttons */}
          <section className="flex gap-4">
            <Link href="mailto:ktirumalaachari@gmail.com">
              <button
                className="flex items-center px-3 py-2 bg-emerald-700 hover:bg-emerald-800 rounded-md text-white outline-none focus:ring-1 shadow-lg transform active:scale-y-90 transition-transform"
                aria-label="Contact Button"
              >
                <IoIosMail size={24} />
                <span className="ml-1.5 md:text-lg">Contact</span>
              </button>
            </Link>

            <button
              className="flex items-center px-3 py-2 bg-red-700 hover:bg-red-800 rounded-md text-white outline-none focus:ring-1 shadow-lg transform active:scale-y-90 transition-transform"
              onClick={handleDownloadResume}
              aria-label="Resume Download Button"
            >
              <IoDocumentText size={22} />
              <span className="ml-1.5 md:text-lg">Resume</span>
            </button>
          </section>
        </section>
      </section>

      {/* Right Section */}
      <section className="lg:max-w-lg p-4 max-lg:hidden">
        <Image
          className="max-w-xl rounded-xl"
          src={bgImg}
          alt="K Tirumala Achari"
          height={300}
          width={350}
          placeholder="blur"
          style={{
            width: "350px",
            height: "auto",
          }}
        />
      </section>
    </main>
  );
};

export default Hero;
