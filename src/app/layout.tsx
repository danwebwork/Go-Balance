import './globals.css';
import NavBar from './components/NavBar';
import LogoMenu from './components/LogoMenu';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body  className='bg-white' suppressHydrationWarning={true}>
        <main  className="flex min-h-screen flex-col" >
         <div className=" flex absolute ml-[7%] md:hidden md:mr-[60%] ">
          <LogoMenu/>
          </div>
          <div className='fixed hidden flex-col md:flex md:w-full md:h-[80px] w-[200px] h-full z-[1] backdrop-blur-2xl md:bg-green-500 opacity-95'>
           <NavBar />
          </div>
          {children}
        </main>
      </body> 
    </html>
  );
}
