"use client";  // Ajoutez cette ligne au début de votre fichier

import { useState } from 'react';
import { FaProjectDiagram, FaClipboardList, FaCheckCircle, FaTachometerAlt, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';  // Assurez-vous d'importer Link de Next.js

const Sidebar = () => {
  const [isGestionOpen, setGestionOpen] = useState(false);
  const [isAffectationOpen, setAffectationOpen] = useState(false);
  const [isCreationCompteOpen, setCreationCompteOpen] = useState(false);
  const [isIMPORTATIONOpen, setIMPORTATIONOpen] = useState(false);
  const [isGenererOpen, setGenererOpen] = useState(false);

  const toggleGestion = () => {
    setGestionOpen(!isGestionOpen);
  };

  const toggleAffectation = () => {
    setAffectationOpen(!isAffectationOpen);
  };

  const toggleCreationCompte = () => {
    setCreationCompteOpen(!isCreationCompteOpen);
  };

  const toggleIMPORTATION = () => {
    setIMPORTATIONOpen(!isIMPORTATIONOpen);
  };

  const toggleGenerer = () => {
    setGenererOpen(!isGenererOpen);
  };

  return (
    <div className="h-screen w-64 bg-gray-800 text-white p-5">
      <h1 className="text-lg font-bold">📌 EST Safi</h1>
      <ul className="mt-5 space-y-2">
      <Link href="/dashboard">
          {/* Dashboard */}
          <li className="flex items-center gap-3 p-3 hover:bg-gray-700 cursor-pointer">
            <FaTachometerAlt /> Dashboard
          </li>
        </Link>
       
          <ul className="ml-5 space-y-2">
            <li
              className="flex items-center gap-3 p-3 hover:bg-gray-700 cursor-pointer"
              onClick={toggleAffectation}
            >
              <FaClipboardList /> Affectation
            </li>

  

            <li className="flex items-center gap-3 p-3 hover:bg-gray-700 cursor-pointer">
              <FaCheckCircle /> Suivi
            </li>
            <li className="flex items-center gap-3 p-3 hover:bg-gray-700 cursor-pointer">
              <FaCheckCircle /> Soutenance
            </li>
          </ul>
     
      
        <Link href={`/`}>
                    {/* Déconnexion */}
        <li className="flex items-center gap-3 p-3 hover:bg-gray-700 cursor-pointer">
          <FaSignOutAlt /> Déconnexion
        </li>
                </Link>

      </ul>
    </div>
  );
};

export default Sidebar;
