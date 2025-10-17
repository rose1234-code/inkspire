

// 'use client';

// import Link from "next/link";
// // afficher les chemins actifs
// import { usePathname } from "next/navigation";
// // concatenner une classe conditionnelle
// import clsx from 'clsx'
// // declarons une liste de link
// const links=[
//   {name:"🏠 Dashboard",href:"/dashboard"},
//   {name:"👥 Customers", href:"/dashboard/customers"},
//   {name:"📄 Invoices",href:'/dashboard/invoices'}
// ]
// const  SideNav= ()=> {
//   // recuperons les liens
//   const pathame=usePathname()

//   return(
//     <>
//       {
//         links.map(link=>{

//           return(
//             <Link>{link.name}</Link>
//           )

//         })
//       }
//     </>
//   )


//   // const dashboard='/dashboard'
//   // const custumers='/dashboard/customers'
//   // const invoices='/dashboard/invoices'
//   // return (
//   //   <nav className="h-full p-4">
//   //     <ul className="space-y-3">
//   //       <li><Link href={dashboard}>🏠 Dashboard</Link></li>
//   //       <li><Link href={custumers}>👥 Customers</Link></li>
//   //       <li><Link href={invoices}>📄 Invoices</Link></li>
//   //     </ul>
//   //   </nav>
//   // );
// }

// export default SideNav