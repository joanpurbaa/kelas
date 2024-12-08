import { X } from "lucide-react";
import FormButton from "./FormButton";
import FormField from "./FormField";
import Image from "next/image";

const CreateKelasModalBox = ({ onClose }: { onClose: () => void }) => {
  const tema = [
    "/agama.png",
    "/bahasa.png",
    "/biologi.png",
    "/fisika.png",
    "/geografi.png",
    "/kimia.png",
    "/komputer.png",
    "/matematika.png",
    "/olahraga.png",
    "/seni.png",
  ];

  return (
    <div
      onClick={onClose}
      className="fixed z-50 w-full h-screen flex justify-center items-center bg-black bg-opacity-50"
    >
      <div className="w-[500px]  bg-white p-5 rounded-md">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Buat kelas</h1>
          <X className="cursor-pointer" onClick={onClose} />
        </div>
        <form className="mt-3" action="">
          <ul className="space-y-3">
            <li>
              <FormField
                id="namaKelas"
                label="Nama kelas"
                placeholder="Masukkan nama kelas"
              />
            </li>
            <li>
              <label htmlFor="">Pilih tema</label>
              <input type="hidden" id="agama" />
              <div className="space-y-3 overflow-y-scroll h-[700px]">
                {tema.map((tema) => (
                  <Image
                    key={tema}
                    className="w-full h-auto rounded-md"
                    width="700"
                    height="0"
                    src={tema}
                    alt="agama"
                  />
                ))}
              </div>
            </li>
            <li>
              <FormButton value="Buat kelas" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default CreateKelasModalBox;
