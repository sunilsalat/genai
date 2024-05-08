import { AiOutlineClose } from "react-icons/ai";

export const AboutUs = ({ onOpenAboutUs }) => {
  return (
    <div className="flex flex-col w-3/12 space-y-2  py-4 -mt-4 pr-2 bg-white rounded-2xl mt-[20px]">
     <div className="flex flex-row">
        <h3 className="flex-1 text-center m-0">About Us</h3>
        <div className="flex-1 flex justify-end">
          <AiOutlineClose
            className="self-end text-xs cursor-pointer"
            onClick={onOpenAboutUs}
          />
        </div>
      </div>

      <div className="flex flex-col space-y-5 items-center bg-white p-5 overflow-y-auto">
        <div className="text-center bg-textSenderBG rounded-md py-4">
          SynApp GPT utilie un modèle d'IA générative sur l'ensemble des documents scientifiques, d'évaluation et de recommandation de la HAS et des sociétés savantes pour les rendre accessible à tous les professionnels de santé d'une façon simple et intuitive. 
          
                  </div>
        <div className="text-center bg-textSenderBG rounded-md py-4">
        Détails techniques : nous nous basons actuellement sur les technologies d'OpenAI cependant, nous développons en interne notre propre modèle d'embedding multilangue et dédié au secteur de la santé. 

        </div>
        <div className="text-center bg-textSenderBG rounded-md py-4">

      Ambition : nous souhaitons bénéficier d'une IA générative française afin de construire la solution la plus précise et performante pour accéder aux documents médicaux.
        
        </div>
      </div>
    </div>
  );
};
