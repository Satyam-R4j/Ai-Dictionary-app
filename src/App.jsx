import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Search } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import { FadeLoader } from "react-spinners";
import Markdown from "react-markdown";

const App = () => {
    const [word, setWord] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GOOGLE_API_KEY });

    async function getResult() {
        setLoading(true);
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Consider you are a Dictiionary AI, we will give you a word and you need to give all the dictionary details in good formate including examples also, meanings, definitions, Synonyms, phonetics etc. and the word is ${word}`,
        });
        setResult(response.text);
        setLoading(false);
    }

    return (
        <>
            <Navbar />
            <div className="searchContainer min-h-screen  mt-5 px-[250px]">
                <div className="inputBox flex items-center border-[1px] border-gray-500 rounded-xl bg-gray-800 hover:border-emerald-500">
                    <Search color={"gray"} className="ml-3 cursor-pointer" />
                    <input
                        onKeyUp={() => {
                            getResult();
                        }}
                        onChange={(e) => {
                            setWord(e.target.value);
                        }}
                        value={word}
                        className="flex-1 p-[10px] outline-0 bg-transparent text-white text-l "
                        type="text"
                        placeholder="Search words ..."
                    />
                </div>
                <div className="resultContainer py-[20px] mt-5 min-h-[40vh]  border-t border-b border-t-gray-500 border-b-gray-500 ">
                    <Markdown>{result}</Markdown>
                    {loading && <FadeLoader color="#34D399" className="mt-5" />}
                </div>
            </div>
            <div className="footer flex items-center justify-center h-[80px] bg-[#1F2937]">
                <p className="text-white">Made with  with ❤️ <span className="text-pink-600">Satyam-R4j</span></p>
            </div>
        </>
    );
};

export default App;
