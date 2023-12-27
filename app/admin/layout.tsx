import { MenuHover } from "@/react-tailwind-components";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="border-b border-gray-300">
        <div className="container px-2 mx-auto flex gap-2">
          <MenuHover
            list={[
            { text: 'יצירת בלוג חדש', href: '/admin/blog/create' }
          ]}
            text="בלוגים"
          />

        </div>
      </header>
      {children}
    </>
  )
}
