import { User } from "lucide-react";
import Link from "next/link";

const SubjectsMenu = () => {
  const subjects = [
    {
      id: 1,
      subject: "Matematika kelas 12 A",
      guru: "Braja",
      background: "matematika",
      jumlahMurid: 25,
    },
    {
      id: 2,
      subject: "Geografi kelas 12 A",
      guru: "Stalin",
      background: "geografi",
      jumlahMurid: 25,
    },
    {
      id: 3,
      subject: "Agama kelas 12 A",
      guru: "Dazal",
      background: "agama",
      jumlahMurid: 25,
    },
    {
      id: 4,
      subject: "Bahasa Indonesia kelas 12 A",
      guru: "Rida",
      background: "bahasa",
      jumlahMurid: 25,
    },
    {
      id: 5,
      subject: "Biologi kelas 12 A",
      guru: "Sugi uno",
      background: "biologi",
      jumlahMurid: 25,
    },
    {
      id: 6,
      subject: "Fisika kelas 12 A",
      guru: "Openhaimmer",
      background: "fisika",
      jumlahMurid: 25,
    },
    {
      id: 7,
      subject: "Komputer kelas 12 A",
      guru: "xy dragon",
      background: "komputer",
      jumlahMurid: 25,
    },
    {
      id: 8,
      subject: "Olahraga kelas 12 A",
      guru: "Kobe bryant",
      background: "olahraga",
      jumlahMurid: 25,
    },
    {
      id: 9,
      subject: "Seni kelas 12 A",
      guru: "Hitler",
      background: "seni",
      jumlahMurid: 25,
    },
  ];

  return (
    <div className="w-full grid grid-cols-12 gap-5 p-2">
      {subjects.map((subject) => (
        <Link
          href="#"
          className="col-span-4 h-[250px] shadow-md hover:shadow-2xl rounded-lg"
          key={subject.id}
        >
          <div
            className={`flex items-end ${subject.background} bg-cover bg-center w-full h-[60%] rounded-t-lg p-3`}
          >
            <h1 className="text-white text-2xl font-semibold">{subject.subject}</h1>
          </div>
          <div className="h-[40%] flex flex-col justify-between p-3">
            <p className="text-zinc-800 italic font-semibold">- {subject.guru}</p>
            <div className="flex justify-end">
              <div className="flex gap-x-1 bg-zinc-600 rounded-md p-2">
                <User className="text-white" />
                <p className="text-white">{subject.jumlahMurid}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SubjectsMenu;