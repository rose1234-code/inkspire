

'use client';

import Link from "next/link";


const SideNav =()=>{
  const dashboard='/dashboard'
  const custumer='/dashboard/customers'
  const invoice='/dashboard/invoices'
  return (
    <nav className="h-full p-4">
      <ul className="space-y-3">
        <li><Link href={dashboard}>🏠 Dashboard</Link></li>
        <li><Link href={custumer}>👥 Customers</Link></li>
        <li><Link href={invoice}>📄 Invoices</Link></li>
      </ul>
    </nav>
  );
}

export default SideNav