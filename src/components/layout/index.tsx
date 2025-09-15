import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function Dashboard() {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-4">
        <h1 className="text-2xl font-bold mb-6">MyApp</h1>
        <NavigationMenu.Root orientation="vertical">
          <NavigationMenu.List className="flex flex-col space-y-2">
            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="block px-3 py-2 rounded hover:bg-gray-700"
                href="#"
              >
                Dashboard
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="block px-3 py-2 rounded hover:bg-gray-700"
                href="#"
              >
                Analytics
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="block px-3 py-2 rounded hover:bg-gray-700"
                href="#"
              >
                Settings
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-14 bg-white border-b flex items-center justify-between px-6">
          <h2 className="text-lg font-semibold">Dashboard</h2>

          {/* User Menu */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="px-3 py-1 bg-gray-200 rounded">
              User
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-white border shadow-md rounded p-2">
              <DropdownMenu.Item className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
                Profile
              </DropdownMenu.Item>
              <DropdownMenu.Item className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
                Settings
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />
              <DropdownMenu.Item className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
                Logout
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 bg-gray-50">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">Card 1</div>
            <div className="bg-white p-4 rounded-lg shadow">Card 2</div>
            <div className="bg-white p-4 rounded-lg shadow">Card 3</div>
          </div>
        </main>
      </div>
    </div>
  );
}
