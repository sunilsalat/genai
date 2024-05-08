import { AiOutlineClose } from "react-icons/ai";

export const Faq = ({ onOpenFaqs }) => {
  return (
    <div className="flex flex-col w-3/12 space-y-2  py-4 -mt-4 pr-2 bg-white">
     <div className="flex flex-row">
        <h3 className="flex-1 text-center m-0">FAQs</h3>
        <div className="flex-1 flex justify-end">
          <AiOutlineClose
            className="self-end text-xs cursor-pointer"
            onClick={onOpenFaqs}
          />
        </div>
      </div>
      <div className=" flex flex-col space-y-5  items-center bg-white px-4 py-8 overflow-y-auto">

        <div className="bg-textSenderBG text-sm font-semibold flex flex-col items-center justify-center w-full py-4 h-28  px-4 rounded-md ">
        Comment fonctionne SynApp GPT  ? <br /> SynApp utilise une technologie d'IA générative pour analyser les documents de la HAS, les recommndations scientifiques... afin de répondre à vos questions.        </div>

      
        <div className="text-center bg-textSenderBG rounded-md py-4">
        Puis-je faire confiance aux réponses de SynApp GPT ? <br /> 
        La version actuelle de SynApp GPT est entraînée avec quelques données fiables et actualisées, ainsi il est toujours recommandé de consulter les sites spécialisées pour avoir accès à plus de documents. Dans la prochaines version, nous comptons entrainer l'ensemble des documents de la HAS.        
        </div>
        <div className="text-center bg-textSenderBG rounded-md py-4">
        Est-ce que les réponses de SynApp GPT sont gratuites ?<br /> 
        Pour cette version de démo, les réponses sont actuellement gratuites pour tous les utilisateurs, dans la limite de 10 par semaine. De nouvelles offres verront le jour dans les prochains mois.
        </div>
        <div className="bg-textSenderBG text-sm font-semibold flex flex-col items-center justify-center w-full py-4 h-28  px-4 rounded-md ">
        Comment puis-je contacter l'équipe de SynApp GPT ? <br /> Pour toute demande d'information ou de suggestion, pouvez contacter l'équipe derrière SynApp GPT à l'adresse support@synapp.eu
        </div>
        
      </div>
    </div>
  );
};
