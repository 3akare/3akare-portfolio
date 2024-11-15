import { Folder } from "../assets/Logos";
import OpenModal from "../components/FolderModal";
import { useContext, useState } from "react";
import { MenuContext } from "../context/MenuProvider";

const Desktop: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { updateMenuTitle } = useContext(MenuContext);

  const handleModal = () => setShowModal((prevState) => !prevState);

  const handleFolderClick = () => {
    handleModal();
    updateMenuTitle("Finder");
  };

  return (
    <section className="flex float-end flex-col gap-8">
      <Folder
        name="About Me"
        type="about"
        onClick={handleFolderClick}
      />
      <Folder name="Resume" type="resume" />
      <OpenModal showModal={showModal} handleModal={handleModal} />
    </section>
  );
};

export default Desktop;
