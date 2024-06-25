import Icono from "./Icon"

function Header() {
  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <a href="#" className="text-lg font-bold text-gray-800 flex items-center">
              <Icono clas={"text-blue-500 h-6 w-6 mx-auto"} />
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header