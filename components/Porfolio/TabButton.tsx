"use client"
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TabButtonProps {
  label: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: () => void;
}

export default function TabButton({ label, icon: Icon, isActive, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center space-x-2  px-6 py-3 transition-all ${
        isActive ? "text-blue-400" : "text-gray-400 hover:text-blue-400"
      }`}
    >
      <Icon className="h-5 w-5" />
      <span className="font-medium">{label}</span>
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 rounded-sm border-2 border-blue-400"
        />
      )}
    </button>
  );
}