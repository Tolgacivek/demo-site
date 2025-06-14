
import Sidebar from "./Sidebar";

const dummyData = [
  { id: 1, name: "Ahmet Yılmaz", email: "ahmet@example.com", message: "Fiyat teklifi almak istiyorum." },
  { id: 2, name: "Ayşe Demir", email: "ayse@example.com", message: "Temizlik randevusu talep ediyorum." },
];

type Props = {
  onLogout: () => void;
  activePage: string;
  setActivePage: (page: string) => void;
};

export default function Dashboard({ onLogout, activePage, setActivePage }: Props) {
  return (
    <div className="flex">
      <Sidebar onLogout={onLogout} setActivePage={setActivePage} />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">
          {activePage === "forms" ? "Form Başvuruları" : "İçerik Yönetimi"}
        </h1>
        <div className="bg-white p-4 shadow rounded">
          {activePage === "forms" ? (
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">İsim</th>
                  <th className="py-2 text-left">E-posta</th>
                  <th className="py-2 text-left">Mesaj</th>
                </tr>
              </thead>
              <tbody>
                {dummyData.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="py-2">{item.name}</td>
                    <td className="py-2">{item.email}</td>
                    <td className="py-2">{item.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-600">Yakında entegre edilecek.</p>
          )}
        </div>
      </div>
    </div>
  );
}
