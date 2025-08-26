import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Search } from "lucide-react";

const App = () => {
    return (
        <>
            <Navbar />
            <div className="searchContainer h-80  mt-5 px-[250px]">
                <div className="inputBox flex items-center border-[1px] border-gray-500 rounded-xl bg-gray-800 hover:border-emerald-500">
                    <Search color={"gray"} className="ml-3 cursor-pointer" />
                    <input
                        className="flex-1 p-[10px] outline-0 bg-transparent text-white text-l "
                        type="text"
                        placeholder="Search words ..."
                    />

                </div>
                <div className="resultContainer mt-5 min-h-[40vh] mx-[250px] border-t border-b border-t-gray-500 border-b-gray-500 ">

                </div>
            </div>
        </>
    );
};

export default App;
