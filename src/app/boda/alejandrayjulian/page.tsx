import React from "react";
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import SongPlayer from "@/components/sections/SongPlayer";
import IngresarBoton from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/IngresarBoton";
import { dancing, lora, adorage, analogist, cambria, brilliant } from "@/fonts";
import Contador from "@/app/InvitationTemplates/TemplateComponents/Customized/Contadores";
import BendicionFamilias from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/BendicionFamilias";
import Confirmacion from "@/app/InvitationTemplates/TemplateComponents/Customized/Confirmacion";
import GaleriaFotos from "@/app/InvitationTemplates/TemplateComponents/Customized/GaleriaFotos";
import Iglesia from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/Iglesia";
import Recepcion from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/Recepcion";
import MesaDeRegalos from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/MesaDeRegalos";
import DressCode from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/CofigoDeVestimenta";
// Static Img
import Image from "next/image";
import img1 from "/public/assets/images/aleyjulian/img1.jpeg";
import img2 from "/public/assets/images/aleyjulian/img2.jpeg";
import img3 from "/public/assets/images/aleyjulian/img3.jpeg";
import img4 from "/public/assets/images/aleyjulian/img4.jpeg";
import img5 from "/public/assets/images/aleyjulian/hero2.jpeg";
import hojita from "/public/assets/images/aleyjulian/hojita-removebg-preview.png";
import hojita2 from "/public/assets/images/aleyjulian/hojita2-removebg-preview.png";

const CustomizedTemplate = () => {
  const invitationData = {
    IngresarBotonProps: {
      font: brilliant,
      novia: "Alejandra",
      novio: "Julián",
      join: "&",
      color: {
        titleColor: "text-[#b3451e]",
        bgColor: "bg-[#b3451e]",
        textButtonColor: "text-white",
      },
    },
    HeroSectionProps: {
      simplified: {
        fraseIncial: {
          text: "Tenemos el honor de invitarte a celebrar Nuestra Boda",
          size: "text-3xl",
          color: "text-[#ffcf40]",
        },
        backgroundPictures: {
          desktop: "bg-[url('/assets/images/aleyjulian/hero.jpeg')]",
          cell: "cell:bg-[url('/assets/images/aleyjulian/hero.jpeg')]",
        },
        nombreNovios: {
          font: dancing,
          novia: "Karla",
          novio: "Hector",
          textColor: "text-[#ffcf40]",
          join: {
            color: "text-white",
            symbolo: "&",
          },
        },
      },
    },
    ContadorProps: {
      floral: {
        fecha: new Date("2024-08-10T00:00:00"),
        fechaTexto: {
          color: "text-[#836d65]",
          desc: "10 de Agosto de 2024",
          font: analogist,
        },
        textColor: "text-[#836d65]",
        showSeparator: false,
        showCornerImg: false,
        backGround: "bg-white",
      },
    },
    GaleriaFotosProps: {
      backGround: "bg-white",
      imgList: [
        { id: 1, img: img1 },
        { id: 2, img: img2 },
        { id: 3, img: img3 },
        { id: 4, img: img4 },
      ],
    },
    Bendiciones: {
      backGround: "bg-white",
      frase: {
        desc: "Con la bendición de Dios y de nuestro hijo",
        textColor: "text-[#836d65]",
        font: cambria,
      },
    },
    IglesiaProps: {
      backGround: "bg-white",
      title: {
        font: brilliant,
        textColor: "text-[#c5351b]",
      },
      sectionTextColor: "text-[#836d65]",
      nombre: "Hotel Hacienda La Concepción",
      horas: "17:00 horas",
      direccion:
        "Guillermo Purcell 10, Altos de Bella Unión,  25350 Arteaga, Coah.",
      ubicacion: "https://maps.app.goo.gl/4EGYAmgDszKcK2oZ6",
      buttonStyles: {
        font: analogist,
        bg: "bg-[#c5351b]",
        textColor: "text-white",
      },
    },
    RecepcionProps: {
      backGround: "bg-white",
      title: {
        font: brilliant,
        textColor: "text-[#c5351b]",
      },
      sectionTextColor: "text-[#836d65]",
      nombre: "Hotel Hacienda La Concepción",
      horas: "20:30 horas",
      direccion:
        "Guillermo Purcell 10, Altos de Bella Unión,  25350 Arteaga, Coah.",
      ubicacion: "https://maps.app.goo.gl/4EGYAmgDszKcK2oZ6",
      buttonStyles: {
        font: analogist,
        bg: "bg-[#c5351b]",
        textColor: "text-white",
      },
    },
    MesaRegalosProps: {
      backGround: "bg-white",
      title: {
        font: brilliant,
        textColor: "text-[#c5351b]",
      },
      sobres: {
        enabled: true,
        textColor: "text-[#836d65]",
        type: "default",
      },
      transferencia: {
        enabled: false,
      },
      regalo: {
        enabled: true,
      },
    },
    DressCodeProps: {
      backGround: "bg-neutral-800",
      title: {
        font: dancing,
        textColor: "text-[#ffcf40]",
      },
      desc: {
        text: "Temática black te pedimos asistir formal color negro",
        color: "text-yellow-50",
      },
      iconSection: {
        show: false,
        Mujeres: {
          dressCodeImg: undefined,
          textColor: "",
        },
        Hombres: {
          dressCodeImg: undefined,
          textColor: "",
        },
      },
    },
    ConfimacionProps: {
      SoloPlannerMode: {
        backGround: "bg-white",
        title: {
          font: dancing,
          textColor: "text-[#ffcf40]",
        },
      },
    },
  };
  const {
    IngresarBotonProps,
    HeroSectionProps,
    ContadorProps,
    GaleriaFotosProps,
    Bendiciones,
    IglesiaProps,
    RecepcionProps,
    MesaRegalosProps,
    DressCodeProps,
  } = invitationData;
  return (
    <InvitationContainer songLink="/assets/songs/aleyjulian.mp3">
      <IngresarBoton
        font={IngresarBotonProps.font}
        novia={IngresarBotonProps.novia}
        novio={IngresarBotonProps.novio}
        join={IngresarBotonProps.join}
        color={IngresarBotonProps.color}
      />

      <div
        className={`
        ${HeroSectionProps.simplified.backgroundPictures.desktop}
        ${HeroSectionProps.simplified.backgroundPictures.cell}
        w-full h-screen  cell:h-[50vh]
        bg-center bg-no-repeat bg-cover bg-blend-multiply bg-stone-300 
        flex flex-col items-center justify-center 
      `}
      >
        <p
          className={`${analogist.className} textShadow text-[40px] cell:text-[32px] w-6/12 cell:w-11/12 text-center mx-auto text-white  drop-shadow-2xl`}
        >
          {HeroSectionProps.simplified.fraseIncial.text}
        </p>
      </div>
      <div className="relative">
        <Image
          alt="hojita"
          src={hojita}
          className="absolute z-50 right-0 w-[25%] top-[-70px]"
        />
        <div className=" z-[60]">
          <Contador model="floral" contadorPropsFloral={ContadorProps.floral} />
        </div>
      </div>
      <GaleriaFotos galeriaFotosProps={GaleriaFotosProps} />
      <BendicionFamilias bendicionFamiliasProps={Bendiciones} />
      <div className="relative">
        <Image
          alt="hojita"
          src={hojita2}
          className="absolute z-50 left-0 w-[15%] top-[40px]"
        />
        <Iglesia iglesiaProps={IglesiaProps} />
      </div>
      <div className="relative">
        <Image
          alt="hojita"
          src={hojita}
          className="absolute z-50 right-0 w-[35%] bottom-[-100px]"
        />
        <Recepcion recepcionProps={RecepcionProps} />
      </div>
      <div className="bg-white">
        <Image alt="boda" src={img5} className="mx-auto " />
      </div>
      <MesaDeRegalos mesaDeRegalosProps={MesaRegalosProps} />
      <div className=" bg-white">
        <h2
          className={`
          ${brilliant.className}
          text-[#c5351b]
          text-center text-5xl py-1 
          cell:text-2xl cell:px-4
      `}
        >
          Código de Vestimenta
        </h2>
        <p className={`text-3xl cell:text-xl text-[#836d65] text-center`}>
          Formal
        </p>
      </div>
      <div className="relative">
        <Image
          alt="hojita"
          src={hojita2}
          className="absolute z-50 left-0 w-[20%] top-[-180px]"
        />
        <div className=" bg-white py-8">
          <h2
            className={`
          ${brilliant.className}
          text-[#c5351b]
          text-center text-5xl py-1 
          cell:text-2xl cell:px-4
      `}
          >
            Confirmacion de Asistencia
          </h2>
          <p
            className={`text-3xl cell:text-xl cellw-10/12 cell:mx-auto  text-[#836d65] text-center`}
          >
            Confirma tu Asistencia antes de el dıá 12 de Julio en el siguiente
            link
          </p>

          <div className="flex flex-col justify-center items-center py-8">
            <p
              className={`${analogist.className} text-[#c5351b] text-4xl cell:text-2xl text-center font-bold`}
            >
              Wedding Planner <br /> Viviana Amare
            </p>
            <a href="https://api.whatsapp.com/send?phone=5218441339405">
              <button
                className="flex items-center  my-3 rounded-full px-4 py-2  bg-[#c5351b]
"
              >
                <p className=" text-3xl text-white">844 700 6000</p>
              </button>
            </a>
          </div>
          <p
            className={`text-3xl cell:text-xl cell:w-10/12 cell:mx-auto text-[#c5351b] text-center`}
          >
            En caso de no confirmar asistencia antes de la fecha mencionada
            entenderemos que amablemente estas declinando la invitación y
            cederemos su lugar a otro invitado.
          </p>
        </div>
      </div>
      <div className="bg-white">
        <Image alt="boda" src={img5} className="mx-auto " />
      </div>
      <div className="relative">
        <Image
          alt="hojita"
          src={hojita}
          className="absolute z-50 right-0 w-[35%] rotate-180 top-[-130px]"
        />
        <Image
          alt="hojita"
          src={hojita}
          className="absolute z-50 left-0 translate-x-[30px] w-[20%] bottom-[-60px]"
        />
        <div className=" bg-white py-8 flex flex-col justify-center">
          <q
            className={`text-3xl cell:text-xl cell:w-10/12 cell:mx-auto text-[#c5351b] text-center`}
          >
            Todo lo hizo hermoso en su tiempo; y a puesto eternidad en el
            corazon de ellos, sin que alcance el hombre a entender la obra que
            ha hecho Dios desde el principio hasta el fin.
          </q>
          <p className={`text-3xl cell:text-lg text-[#c5351b] text-center`}>
            Eclesiastés 3:11{" "}
          </p>
          <h2
            className={`
          ${brilliant.className}
          text-[#836d65]
          text-center text-5xl py-3 
          cell:text-2xl cell:px-4
      `}
          >
            Gracias por ser parte de esta historia.
          </h2>
          <h2
            className={`
          ${brilliant.className}
          text-[#c5351b]
          text-center text-5xl py-1 
          cell:text-2xl cell:px-4
      `}
          >
            Alejandra <span className="text-[#836d65]">&</span> Julian
          </h2>
        </div>
      </div>
      <SongPlayer color="bg-[#c5351b]" />
    </InvitationContainer>
  );
};

export default CustomizedTemplate;
