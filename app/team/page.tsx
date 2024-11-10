"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Link,
  Image,
} from "@nextui-org/react";
import { GithubIcon, LinkedinIcon } from "@/components/icons"; // Replace with your preferred icon library
import { title } from "@/components/primitives";
import Footer from "@/components/footer";
// import clsx from "clsx";

interface TeamMember {
  name: string;
  designation: string;
  email: string;
  avatar: string;
  github: string;
  linkedin: string;
}
const TeamMember: React.FC<TeamMember> = ({
  name,
  designation,
  email,
  avatar,
  github,
  linkedin,
}) => (
  // <Card className="lg:max-w-lg xl:max-w-xl mx-auto m-4">
  //   <CardHeader className="justify-center">
  //     <Avatar src={avatar} size="lg" name={name} />
  //   </CardHeader>
  //   <CardBody className="text-center">
  //     <h4 className="font-bold text-large">{name}</h4>
  //     <p className="text-small text-default-500">{designation}</p>
  //     <p className="text-small"><a href={`mailto:${email}`}>{email}</a></p>
  //   </CardBody>
  //   <CardFooter className="justify-center gap-4">
  //     <Link href={github} isExternal className="hover:text-blue-500">
  //       <GithubIcon className="text-default-500" />
  //     </Link>
  //     <Link href={linkedin} isExternal>
  //       <LinkedinIcon className="text-default-500" />
  //     </Link>
  //   </CardFooter>
  // </Card>
  <Card className="py-4">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      {/* <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4> */}
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={avatar}
        width={270}
        height={300}
      />
    </CardHeader>
    <CardBody className="overflow-visible py-2">
      {/* <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        /> */}
      <p className="text-small text-default-500">{designation}</p>
      <p className="text-small">
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      <h4 className="font-bold text-large">{name}</h4>
      <CardFooter className="justify-center gap-4">
      <Link href={github} isExternal className="hover:text-blue-500">
        <GithubIcon className="text-default-500" />
      </Link>
      <Link href={linkedin} isExternal>
        <LinkedinIcon className="text-default-500" />
      </Link>
      </CardFooter>
    </CardBody>
  </Card>
);

export default function App() {
  const teamMembers = [
    {
      name: "Dr. Deepali Sharma",
      designation: "Mentor",
      email: "",
      avatar: "/public/images/team1.jpg",
      github: "https://github.com/akankshacodess",
      linkedin: "https://www.linkedin.com/in/akanksha-gupta-86806921b/",
    },
    {
      name: "Akanksha Gupta",
      designation: "Frontend Developer",
      email: "g.akankshagupta2002@gmail.com",
      avatar: "/images/team1.jpg",
      github: "https://github.com/akankshacodess",
      linkedin: "https://www.linkedin.com/in/akanksha-gupta-86806921b/",
    },
    {
      name: "Kumar Atharva Rustagi",
      designation: "ML Engineer",
      email: "atharva04112002@gmail.com",
      avatar: "/images/team2.jpg",
      github: "https://github.com/atharva0411",
      linkedin: "https://www.linkedin.com/in/kumar-atharva-rustagi-37a577223/",
    },
    {
      name: "Amaresh Muralidharan",
      designation: "ML Engineer",
      email: "mamaresh22@gmail.com",
      avatar: "/images/team3.jpg",
      github: "https://github.com/amaresh22",
      linkedin: "www.linkedin.com/in/amaresh-muralidharan-073046250/",
    },
  ];

  return (
    <>
      <div className="mb-10">
        <h1 className={title()}>Meet Our Team</h1>
        <h2 className="pt-3 text-lg">
          We tried our best to present the solution for the AQI problem.
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </>
  );
}
