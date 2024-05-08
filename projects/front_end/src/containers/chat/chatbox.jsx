import { ASSETS } from "../../assets/path";
import { RiThumbUpLine, RiThumbDownLine } from "react-icons/ri";
import { Subscribed } from "./subscribed";
import { FaRegFolderOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NavBtn from "../../Components/Button/NavBtn";
import { Question } from "../../redux/actions/QuestionActions";
import { useEffect, useState } from "react";
import { ChatTooltip } from "../../Components/Charts/tooltip";

export const ChatBox = ({
  selectedUser,
  activeTab,
  setActiveChat,
  submitHandler,
  newMessage,
  chatWith,
  handleLike,
  user,
  messagesEndRef,
  subscribed,
  setSubscribed,
  onEnterSubmit,
  handleCloseFront,
}) => {
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onEnterSubmit();
      handleCloseFront();
    }
  };

  return (
    <div className="py-4 w-full lg:h-[64vh] 2xl:h-[70vh]">
      <div className=" bg-transparent h-full flex flex-col justify-between">
        <div className=" flex flex-col pt-5 text-white Exo-Regular text-sm lg:text-normal gap-2  overflow-auto scroll-[#ccc]  scroll-smooth  px-8 ">
          {subscribed ? (
            <div>
              <div className=" flex justify-center m-5">
                <img src={ASSETS.PROFILES.ROBO} className="h-10 w-10" />
              </div>
              <p className="text-sm text-textgray">
              Bonjour, je suis SynApp GPT, j’ai référencé toutes les publications de la HAS. Pose-moi n'importe quelle question, et j'y répondrai au mieux.
              </p>
              <div className="flex gap-5 justify-center p-10 text-black">
                <NavBtn
                  onFunctionCalled={() => navigate("/signup")}
                  text="Inscription"
                  bgcolor="#A1FEDA"
                />
                <NavBtn
                  text="Annuler"
                  bordercolor="black"
                  onFunctionCalled={setSubscribed}
                />
              </div>
            </div>
          ) : (
            <>
              {chatWith?.map((items, id) => (
                <div
                  key={id}
                  className={`flex flex-row  items-center gap-2   ${
                    items?.message_by == user
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div className="flex flex-col gap-1 mb-5 text-black ">
                    {items?.message && (
                      <div className="space-y-1.5">
                        <div className="flex items-center space-x-3">
                          {items?.message_by !== user && (
                            <img
                              src={ASSETS.PROFILES.ROBO}
                              alt=""
                              className="ml-2 w-7 h-7 rounded-full object-contain"
                            />
                          )}

                          <div
                            ref={messagesEndRef}
                            className={`p-4  rounded-full ${
                              items?.message_by !== user
                                ? "bg-textSenderBG"
                                : "bg-textUserBG"
                            }`}
                          >
                            {items?.tooltip ? (
                              <ChatTooltip
                                tooltip={items?.tooltipContent}
                                orignal={items?.message}
                              />
                            ) : (
                              // Render this block if items.tooltip is truthy

                              // Render this block if items.tooltip is falsy
                              items?.message
                            )}
                          </div>

                          { items?.message_by !== user && (
                              <div className="mr-2 flex items-center space-x-1">
                                <span
                                  className={`hover:scale-110 ${
                                    items.status == 1 ? "text-green-600" : ""
                                  }`}
                                  onClick={() => handleLike(items.id, true)}
                                >
                                  <RiThumbUpLine />
                                </span>
                                <span
                                  className={`hover:scale-110 ${
                                    items.status == 0 ? "text-red-500" : ""
                                  }`}
                                  onClick={() => handleLike(items.id, false)}
                                >
                                  <RiThumbDownLine />
                                </span>
                              </div>
                            )}
                        </div>
                        {Array.isArray(items.sources) &&  items.sources.length > 0 && (
                          <div className="mr-2 flex ml-12 text-gray-500 space-x-1 font-medium">
                            <div className="flex space-x-1 ">
                              <FaRegFolderOpen className="text-xl" />{" "}
                              <span className="text-xs">Sources(s)</span>
                            </div>
                            <div className="grid grid-cols-2 gap-1 text-xs">
                              {items.sources.map((item, index) => (
                                <div key={index}>
                                  <a href={items.attachment[index]} target="_blank">{item}</a>
                                  {index < items.sources.length - 1 && ', '}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <form
        onSubmit={submitHandler}
        id="messageForm"
        className=" py-10 px-5 w-full "
      >
        <div className="p-5 h-8 w-full  flex  rounded-md border border-gray-300  justify-between items-center">
        <input
          type="text"
          name="question"
          ref={newMessage}
          onKeyDown={handleKeyDown}
          className="outline-none w-full bg-transparent border-0 placeholder:text-gray-extraLight text-sm Exo-Regular"
          placeholder="Ecrivez votre message ici..."
        />

          <button
            type="submit"
            className="cursor-pointer font-semibold rounded-md h-7 w-28 text-sm md:text-normal  bg-aqua"
            id="submit-question"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};
