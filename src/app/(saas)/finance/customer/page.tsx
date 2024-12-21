// // app/customers/page.tsx
// "use client"

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
// import AddCustomerForm from '@/app/_components/AddCustomerForm'

// interface Customer {
//   id: string;
//   name: string;
//   vendorDetails: string;
//   notes: string;
//   closingBalance: number;
// }

// const dummyCustomers: Customer[] = [
//   { id: '1', name: 'John Doe', vendorDetails: 'Vendor A', notes: 'Regular customer', closingBalance: 1000 },
//   { id: '2', name: 'Jane Smith', vendorDetails: 'Vendor B', notes: 'New customer', closingBalance: 500 },
//   // Add more dummy data as needed
// ];

// export default function CustomerList() {
//   const [customers, setCustomers] = useState<Customer[]>(dummyCustomers);
//   const [searchTerm, setSearchTerm] = useState<string>('');

//   const filteredCustomers = customers.filter(customer => 
//     customer.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const addCustomer = (newCustomer: Customer) => {
//     setCustomers([...customers, newCustomer]);
//   };

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Customer</h1>
//         <div className="flex space-x-4">
//           <Button variant="outline">Analytics</Button>
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button>New Customer</Button>
//             </SheetTrigger>
//             <SheetContent side="right">
//               <SheetHeader>
//                 <SheetTitle>Add New Customer</SheetTitle>
//               </SheetHeader>
//               <AddCustomerForm onAddCustomer={addCustomer} />
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//       <Input
//         type="text"
//         placeholder="Search customers"
//         className="mb-4"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Vendor Name</TableHead>
//             <TableHead>Vendor Details</TableHead>
//             <TableHead>Notes</TableHead>
//             <TableHead>Closing balance</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {filteredCustomers.map((customer) => (
//             <TableRow key={customer.id}>
//               <TableCell>
//                 <Link href={`customer/${customer.id}`} className="text-blue-600 hover:underline">
//                   {customer.name}
//                 </Link>
//               </TableCell>
//               <TableCell>{customer.vendorDetails}</TableCell>
//               <TableCell>{customer.notes}</TableCell>
//               <TableCell>{customer.closingBalance}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }

"use client"

import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  outstandingBalance: number;
  lastPurchased: string;
  totalSpent: number;
}

const dummyCustomers: Customer[] = [
  {
    id: '1',
    name: 'APG Suppliers Ltd',
    email: 'apgsuppliers@gmail.com',
    phone: '+91 2402121991',
    outstandingBalance: -2012,
    lastPurchased: '24th April, 2023 10:46',
    totalSpent: 2012,
  },
  // Add more dummy data with the same structure
];

export default function CustomerPage() {
  const [customers] = useState<Customer[]>(dummyCustomers);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-6 h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-6">Customers</h1>
        
        <div className="flex justify-between items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              className="pl-10 bg-transparent"
              placeholder="Placeholder"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="ghost" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-orange-500 hover:bg-orange-600">Add Customer</Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md">
              <SheetHeader>
                <SheetTitle>New Customer</SheetTitle>
              </SheetHeader>
              <div className="space-y-6 py-6">
                <div className="space-y-4">
                  <Input
                    className="bg-transparent"
                    placeholder="Ex: 12 Bananas 12 rs unit price 30"
                  />
                  <Button variant="outline" className="w-full">
                    Create Supplier Entry
                  </Button>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Basic Information</h3>
                  <Input placeholder="Ex: 12345" className="bg-transparent" />
                  <Input placeholder="Ex: 12345" className="bg-transparent" />
                  <Input placeholder="Ex: Aloo paratha" className="bg-transparent" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Placeholder" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="type1">Type 1</SelectItem>
                      <SelectItem value="type2">Type 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Location Details</h3>
                  <Input placeholder="Ex: 12345" className="bg-transparent" />
                  <Input placeholder="Ex: 12345" className="bg-transparent" />
                  <Input placeholder="Ex: Aloo paratha" className="bg-transparent" />
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Payment Details</h3>
                  <Select defaultValue="net30">
                    <SelectTrigger>
                      <SelectValue placeholder="Net 30" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="net30">Net 30</SelectItem>
                      <SelectItem value="net60">Net 60</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Ex: 12345" className="bg-transparent" />
                  <Input placeholder="Ex: Aloo paratha" className="bg-transparent" />
                </div>

                <div className="flex justify-end gap-4">
                  <Button variant="outline">Clear Fields</Button>
                  <Button className="bg-orange-500 hover:bg-orange-600">Create</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="rounded-lg border border-gray-800">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-gray-800">
                <TableHead className="w-12">
                  <input type="checkbox" className="rounded border-gray-600" />
                </TableHead>
                <TableHead>Customer Name</TableHead>
                <TableHead>Contact Information</TableHead>
                <TableHead>Outstanding balance</TableHead>
                <TableHead>Last Purchased</TableHead>
                <TableHead>Total Spent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id} className="hover:bg-gray-900 border-gray-800">
                  <TableCell className="w-12">
                    <input type="checkbox" className="rounded border-gray-600" />
                  </TableCell>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>
                    <div>
                      <div>{customer.email}</div>
                      <div className="text-gray-500">{customer.phone}</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-red-500">
                    ${customer.outstandingBalance}
                  </TableCell>
                  <TableCell>{customer.lastPurchased}</TableCell>
                  <TableCell className="text-green-500">
                    +${customer.totalSpent}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="p-4 border-t border-gray-800 flex items-center justify-between">
            <div className="text-sm text-gray-500">277 Entries</div>
            <div className="flex items-center gap-2 text-black">
              <Button variant="outline" size="icon">«</Button>
              <Button variant="outline" size="icon">‹</Button>
              <div className="flex items-center gap-1">
                <span className="text-sm">Page</span>
                <Input className="w-12 h-8 text-center" value="1" />
                <span className="text-sm">of 11</span>
              </div>
              <Button variant="outline" size="icon">›</Button>
              <Button variant="outline" size="icon">»</Button>
              <Select defaultValue="12">
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Show 12" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12">Show 12</SelectItem>
                  <SelectItem value="24">Show 24</SelectItem>
                  <SelectItem value="48">Show 48</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}