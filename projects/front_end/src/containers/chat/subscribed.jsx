import NavBtn from "../../Components/Button/NavBtn";
import { ASSETS } from "../../assets/path";

export const Subscribed = ({}) => {
  return (
    <div>
      <div className=" flex justify-center m-5">
        <img src={ASSETS.PROFILES.ROBO} className="h-10 w-10" />
      </div>
      <p className="text-sm text-textgray">
      Bonjour, je suis SynApp GPT, j’ai référencé toutes les publications de la HAS. Pose-moi n'importe quelle question, et j'y répondrai au mieux.

      </p>
      <div className="flex gap-5 justify-center p-10 text-black">
        <NavBtn text="Inscription" bgcolor="#A1FEDA" />
        <NavBtn text="Annuler" bordercolor="black" />
      </div>
    </div>
  );
};
