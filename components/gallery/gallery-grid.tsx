"use client";

import { useRouter } from "next/navigation"; // ✅ Next.js router import
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Projects({ projects }: any) {
  const router = useRouter();

console.log(projects)
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects?.map((project: any, index: any) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg p-[2px] cursor-pointer"
              whileHover={{ scale: 1.01 }}
              onClick={() => router.push(project.link)} // ✅ Proper onClick Navigation
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
          ))}
        </div>
      </div>
    </section>
  );
}
