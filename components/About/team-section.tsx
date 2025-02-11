"use client";

import { useState } from "react";
import { Facebook, Linkedin, Twitter, Github } from "lucide-react";
import { teamMembers } from "../data/team-data";
import { cn } from "@/lib/utils";
import Tittle from "../Shared/Tittle";

const teamCategories = [
  "All Teams",
  "Web Team",
  "SEO Team",
];

export function TeamSection() {
  const [activeTab, setActiveTab] = useState("All Teams");

  const filteredTeam = teamMembers.filter((member) =>
    activeTab === "All Teams" ? true : member.team.includes(activeTab)
  );

  return (
    <section className="pb-20 max-w-[85rem] mx-auto">
      <div className="container mx-auto px-4">
        <span className="text-center">
          <Tittle tittle={"Meet Our Team"} />
        </span>

        {/* Team Category Tabs */}
        <div className="flex  overflow-x-auto  md:justify-center gap-4 mb-12 mt-4  mx-auto ">
          {teamCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={cn(
                "px-6 py-2 rounded-2xl transition-all duration-300 whitespace-nowrap",
                activeTab === category
                  ? "bg-gray-700 text-white shadow-lg shadow-gray-600/30"
                  : "bg-gray-800/75 text-gray-400 hover:bg-gray-700"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeam.map((member, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-6 rounded-xl backdrop-blur-sm border transition-all duration-500",
                activeTab === "All Teams" || member.team.includes(activeTab)
                  ? "bg-gray-800/50 border-gray-700  hover:inset-x-0 hover:-top-px   hover:bg-gradient-to-r    "
                  : "bg-gray-800/20 border-gray-800 opacity-50"
              )}
            >
              {/* New Profile Card Design */}
              <div className="">
                <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
                  <img
                    src="/images/services/banner.png"
                    className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
                    alt="Banner"
                  />
                  <div className="absolute -bottom-12 flex h-[90px] w-[90px] items-center justify-center rounded-full ring-2  bg-blue-400 dark:!border-navy-700">
                    <img
                      className="h-full w-full rounded-full object-cover"
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                </div>

                <div className="mt-16 flex flex-col items-center">
                  <h4 className="text-xl font-bold text-white">
                    {member.name}
                  </h4>
                  <p className="text-sm font-normal text-blue-300 my-3">{member.role}</p>
                </div>

      

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-blue-300 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.facebook}
                    className="text-gray-400 hover:text-blue-300 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-blue-300 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              </div>
       
          ))}
        </div>
      </div>
    </section>
  );
}
