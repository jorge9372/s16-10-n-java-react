"use client"
import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from "next/navigation";

const LayoutPerfil = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/perfil");
  };

  return (
    <div className="min-h-screen">
      <section className="bg-derby flex flex-col items-center justify-center py-2 relative">
        <ArrowBackIosIcon onClick={handleRedirect} className="text-2xl absolute top-0 left-0 mt-6 ml-6 text-secondary cursor-pointer"/>
        <div className="relative">
          <img
            src="https://previews.123rf.com/images/microphoto1981/microphoto19811710/microphoto1981171000024/88705547-icono-de-perfil-de-avatar-predeterminado-marcador-de-posici%C3%B3n-de-foto-gris-perfil-predeterminado.jpg"
            alt=""
            className="w-28 h-28 rounded-full lg:w-36 lg:h-36"
          />
          <EditIcon className="absolute bottom-0 right-0 translate-x-1 text-primary" />
        </div>
        <h5 className="m-0 mt-1 font-normal text-sm sm:text-base lg:text-lg text-secondary ">Nombre completo</h5>
      </section>
      {children}
    </div>
  );
};
export default LayoutPerfil;
