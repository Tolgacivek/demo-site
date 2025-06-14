
type Props = {
  onLogout: () => void;
  setActivePage: (page: string) => void;
};

export default function Sidebar({ onLogout, setActivePage }: Props) {
  return (
    <div className="w-64 h-screen bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-6">Admin Menü</h2>
      <ul className="space-y-4">
        <li>
          <button
            onClick={() => setActivePage("forms")}
            className="text-blue-600 hover:underline"
          >
            Formlar
          </button>
        </li>
        <li>
          <button
            onClick={() => setActivePage("content")}
            className="text-blue-600 hover:underline"
          >
            İçerikler
          </button>
        </li>
      </ul>
      <button
        onClick={onLogout}
        className="mt-10 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full"
      >
        Çıkış Yap
      </button>
    </div>
  );
}
