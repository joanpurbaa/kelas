import { X } from "lucide-react";
import FormButton from "./FormButton";
import FormField from "./FormField";
import Image from "next/image";
import { useActionState } from "react";
import { buatKelas } from "@/app/actions/kelas";

const CreateKelasModalBox = ({ onClose }: { onClose: () => void }) => {
  const [state, action] = useActionState(buatKelas, null);

  const tema = [
    "agama",
    "bahasa",
    "biologi",
    "fisika",
    "geografi",
    "kimia",
    "komputer",
    "matematika",
    "olahraga",
    "seni",
  ];

  return (
    <div className="fixed z-50 w-full h-screen flex justify-center items-center bg-black bg-opacity-50">
      <div className="w-[850px]  bg-white p-5 rounded-md">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Buat kelas</h1>
          <X className="cursor-pointer" onClick={onClose} />
        </div>
        <form className="mt-3" action={action}>
          <ul className="space-y-3">
            <li>
              <FormField
                id="name"
                label="Nama kelas"
                placeholder="Masukkan nama kelas"
              />
            </li>
            <li>
              <label htmlFor="">Pilih tema</label>
              <div className="flex flex-wrap items-center justify-between mt-1 overflow-y-scroll h-[700px]">
                {tema.map((tema) => (
                  <div className="mt-2" key={tema}>
                    <div className="space-x-2">
                      <input
                        type="radio"
                        id={tema}
                        name="background"
                        value={tema}
                        required
                      />
                      <label htmlFor={tema}>
                        <span>{tema}</span>
                        <Image
                          className="w-full h-auto rounded-md mt-3"
                          width="380"
                          height="0"
                          src={`/${tema}.png`}
                          alt="agama"
                        />
                      </label>
                    </div>
                  </div>
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
