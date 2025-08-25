import React from "react";
import { BookA, History, Bookmark, Moon } from "lucide-react";

const Navbar = () => {
    return (
        <>
            <div className="navbar px-[250px] flex items-center justify-between h-[100px] border-bottom-[1px] border-[#374151]">
                {" "}
                <div className="logo flex items-center gap-[5px]">
                    <BookA size={"40px"} color="#34D399" />
                    <h3 className="text-[25px] font-[600]">
                        Cogni<span className="text-emerald-300">dict</span>
                    </h3>
                </div>
                <div className="icon flex items-center gap-[20px]">
                  <History size={"35px"} className="cursor-pointer p-[5px] rounded-[50%] transition-all hover:bg-[#374151]"/>
                  <Bookmark size={"35px"} className="cursor-pointer p-[5px] rounded-[50%] transition-all hover:bg-[#374151]"/>
                  <Moon size={"35px"} className="cursor-pointer p-[5px] rounded-[50%] transition-all hover:bg-[#374151]"/>
                </div>
            </div>
        </>
    );
};

export default Navbar;
