
import SideNav from '../ui/page'
export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="w-full md:w-64 bg-gray-800 text-white">
        <SideNav/>
      </div>
      <div className="flex-grow p-6">{children}</div>
    </div>
  );
}