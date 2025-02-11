"use client"
import { motion } from "framer-motion";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
interface ProjectCardProps {
  project: {
    tags: any;
    description: string;
    title: string;
    category: string;
    image: string;
    link: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {

  return (
<Link href={project.link}>
<motion.div
    key={index}
    className="relative overflow-hidden rounded-lg p-[2px] cursor-pointer"
    whileHover={{ scale: 1.01 }}
  >
    {/* Card Content */}
    <div className="relative bg-black/30 rounded-lg overflow-hidden transition-all duration-700">
      <div className="relative h-48">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-white/60 text-sm">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag:any) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:opacity-90 transition shadow-lg shadow-blue-500/20 flex items-center group"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
</Link>
  );
}