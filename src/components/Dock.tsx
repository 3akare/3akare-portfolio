import { useCallback, useContext, useEffect, useState } from "react";
import DockOpen from "../components/DockOpen.tsx";

import intelliJ from "/intellij.png";
import pycharm from "/pycharm.png";
import webstorm from "/webstorm.png";
import docker from "/docker.png";
import vscode from "/vscode.png";
import postman from "/postman.png";
import github from "/github.png";
import iterm from "/iterm.png";
import { MenuContext } from "../context/MenuProvider.tsx";

interface Project {
  title: string;
  url: string;
  description: string;
}

interface DockItem {
  name: string;
  image: string;
  data: {
    title: string;
    projects: Project[];
    tools: string[];
  };
}

export default function Dock() {
  const [showDock, setShowDock] = useState<boolean[]>(Array(8).fill(false));
  const { updateMenuTitle } = useContext(MenuContext);

  const dockItems: DockItem[] = [
    {
      name: "IntelliJ IDEA Community Edition",
      image: intelliJ,
      data: {
        title: "IntelliJ IDEA Community Edition",
        projects: [
          { title: "EndCredits", url: "https://github.com/3akare/EndCredits", description: "EndCredits Builder" },
          { title: "BasicCompiler", url: "https://github.com/3akare/Basic-Compiler", description: "Basic Compiler built in Java" },
          { title: "Microservices", url: "https://github.com/3akare/Microservices", description: "Microservice Architecture with Spring Boot" },
          { title: "Authentication and Authorization", url: "https://github.com/3akare/Microservices", description: "Implementation of Oauth v2.0" },
        ],
        tools: ["Java", "Spring Boot", "Docker", "MySQL", "MongoDB", "DBeaver"],
      },
    },
    {
      name: "PyCharm Community",
      image: pycharm,
      data: {
        title: "PyCharm Community Edition",
        projects: [
          { title: "Machine Learning with Python", url: "https://github.com/3akare/Machine-Learning", description: "Introduction to Machine Learning with Python" },
          { title: "Hand Gesture Detection", url: "https://github.com/3akare/Hand-Gesture-Detection", description: "American Sign Language Recognition" },
        ],
        tools: ["Python"],
      },
    },
    {
      name: "WebStorm",
      image: webstorm,
      data: {
        title: "WebStorm",
        projects: [
          { title: "nobr", url: "https://github.com/3akare/nobr", description: "Anonymous Online Chat Room" },
          { title: "Klouds", url: "https://github.com/3akare/Klouds", description: "Anonymous Online Chat Room" },
        ],
        tools: ["JavaScript", "Typescript", "TailwindCSS"] } },
    { name: "Docker Desktop", image: docker, data: { title: "Docker Desktop", projects: [
          { title: "Microservices", url: "https://github.com/3akare/Microservices", description: "Microservice Architecture with Spring Boot" },
          { title: "Microservices-Config", url: "https://github.com/3akare/Microservice-Config", description: "Microservice Architecture with Spring Boot (Config file)" },
        ], tools: ["Docker"] } },
    { name: "Visual Studio Code", image: vscode, data: { title: "VS Code", projects: [
          { title: "OSSU", url: "https://github.com/3akare/Microservices", description: "Open Source Society University" },
          { title: "Sorting Algorithms", url: "https://github.com/3akare/Microservices", description: "Implementation of Sorting Algorithms" },
          { title: "Binary Trees", url: "https://github.com/3akare/Microservices", description: "Implementation of Binary Trees" },
          { title: "UniversalMediaServer/ Knowledge-base", url: "https://github.com/UniversalMediaServer/knowledge-base", description: "Open source contribution" },
          { title: "UniversalMediaServer", url: "https://github.com/UniversalMediaServer/UniversalMediaServer", description: "Open source contribution" },
        ], tools: ["Racket", "C", "Java", "Typescript"] } },
    { name: "Postman", image: postman, data: { title: "Postman", projects: [
          { title: "APi testing and automation", url: "https://github.com/3akare/API-Testing", description: "API testing and automation scripts" },
        ], tools: ["Postman"] } },
    { name: "Github", image: github, data: { title: "GitHub", projects: [], tools: ["Git"] } },
    { name: "Iterm2", image: iterm, data: { title: "Iterm2", projects: [
          { title: "Maze", url: "https://github.com/3akare/Maze", description: "3D Desktop Game Built with Ray tracing, OpenGL, C" },
          { title: "Printf", url: "https://github.com/3akare/Maze", description: "Personal C library" },
          { title: "Monty", url: "https://github.com/3akare/Maze", description: "Monty Bytecode Interpreter" },
          { title: "Simple Shell", url: "https://github.com/3akare/Maze", description: "Implementation of a Kernel's shell (hsh)" },
        ], tools: ["C", "Ubuntu focal (20) lts", "Vagrant"] } },
  ];

  const handleShowDock = (index: number) => {
    setShowDock(showDock.map((_, i) => i === index));
  };

  const closeAllDock = () => setShowDock(showDock.map(() => false));

  const handleMouseMove = useCallback((event: MouseEvent): void => {
    const target = event.target as HTMLElement;
    if (!target?.matches("img")) return;

    const rect = target.getBoundingClientRect();
    const offset = Math.abs(event.clientX - rect.left) / rect.width;
    const scale = 0.6;

    resetScale();
    target.style.setProperty("--scale", `${1 + scale}`);

    const prev = target.previousElementSibling as HTMLElement | null;
    const next = target.nextElementSibling as HTMLElement | null;

    if (prev) prev.style.setProperty("--scale", `${1 + scale * Math.abs(offset - 1)}`);
    if (next) next.style.setProperty("--scale", `${1 + scale * offset}`);
  }, []);


  const resetScale = () => {
    document.querySelectorAll("#dock img").forEach((img) => {
      (img as HTMLElement).style.setProperty("--scale", "1");
    });
  };

  useEffect(() => {
    const dock = document.querySelector("#dock");

    if (dock) {
      dock.addEventListener("mousemove", handleMouseMove as EventListener);
      dock.addEventListener("mouseleave", resetScale);
    }

    return () => {
      if (dock) {
        dock.removeEventListener("mousemove", handleMouseMove as EventListener);
        dock.removeEventListener("mouseleave", resetScale);
      }
    };
  }, [handleMouseMove]);

  return (
    <section>
      <div className={"fixed xl:flex min-w-4/5 hidden items-center justify-center backdrop-filter backdrop-blur-xl border-gray-100 border-opacity-20 border-[0.5px] bottom-0 my-11 rounded-3xl w-fit shadow-2xl left-1/2 -translate-x-1/2 translate-y-1/2 h-[4.5rem]"}>
        <div id="dock"
          className={"flex flex-row items-center gap-6 hover:gap-8 transition-[gap] justify-center px-6 w-full"}>
          {dockItems.map((item, index) => (
              <img
                key={index}
                className={"w-14 h-14"}
                src={item.image}
                alt={item.name}
                width={70}
                height={70}
                onClick={() => {
                  if (item.name === "Github") {
                    window.location.href =  "https://github.com/3akare";
                  } else {
                    updateMenuTitle(item.name);
                    closeAllDock();
                    setTimeout(() => handleShowDock(index), 250);
                  }
                }}
              />
            ))
          }
        </div>
        <div className={"absolute -z-10"}>
          {dockItems.map((item, index) => {
              return (
                showDock[index] && (
                  <DockOpen
                    key={index}
                    title={item.data.title}
                    projects={item.data.projects}
                    tools={item.data.tools}
                    close={closeAllDock}
                  />));
            })}
        </div>
      </div>
      <div className="xl:hidden text-white font-bold text-xl p-2 fixed bottom-0 text-center left-1/2 my-11 -translate-x-1/2 translate-y-1/2">
        View On A larger Screen to View the Iconic Dock
      </div>
    </section>
);
}
