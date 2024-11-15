import React from "react";

type FolderModalProps = {
  showModal: boolean;
  handleModal: () => void;
};

const FolderModal: React.FC<FolderModalProps> = ({ showModal, handleModal }) => {
  if (!showModal) return null;

  const skills = ['Java', 'Javascript', 'C', 'Python', 'ReactJS'];
  const experiences = [
    {
      title: 'Core Platform Engineer at Remita',
      period: 'April - October, 2024',
      description: 'Built scalable enterprise applications',
    },
    {
      title: 'Frontend Engineer at Allcast',
      period: 'March - June, 2024',
      description: 'Led development of company applications',
    }
  ];

  return (
    <section
      className="cursor-move absolute w-fit rounded-2xl bg-[rgb(41,36,35)] h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-6 text-white resize overflow-auto min-w-96 min-h-[28rem]"
    >
      {/* Modal Header */}
      <div className="h-10 bg-[#2c2c2c] rounded-t-xl flex items-center px-4">
        <div className="flex gap-2">
          <button
            onClick={handleModal}
            className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600"
          />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <span className="text-white/70 text-sm ml-4">About Me</span>
      </div>

      {/* Modal Content */}
      <section className="px-6">
        <h2 className="text-xl font-bold mb-2">David Bakare</h2>
        <p className="text-gray-400">Software Developer</p>
      </section>

      {/* Experience */}
      <section className="px-6">
        <h3 className="text-lg font-semibold mb-2">Experience</h3>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div key={index}>
              <h4 className="font-medium">{experience.title}</h4>
              <p className="text-sm text-gray-400">{experience.period}</p>
              <p className="text-sm">{experience.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools and Technologies */}
      <section className="px-6">
        <h3 className="text-lg font-semibold mb-2">Tools and Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="bg-white/10 px-2 py-1 rounded text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </section>
  );
};

export default FolderModal;
