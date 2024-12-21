"use client"

import React, { useState } from 'react';
import { ChevronDown, X, Plus, Download, Search, Calendar } from 'lucide-react';

const SalesScreen = () => {
  const [showNewOrder, setShowNewOrder] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState('');

  const orders = [
    {
      status: 'Overdue',
      date: '22/2/23',
      number: '121',
      customer: 'Mr Agarwal Bhandari',
      phone: '+91 2402121991',
      amount: -2012,
      paid: false
    },
    // Additional orders would go here
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1D] text-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg">
            Business 1
            <ChevronDown size={16} />
          </button>
          <h1 className="text-2xl font-medium">Sales</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl">Sales</h2>
          <button
            onClick={() => setShowNewOrder(true)}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            New Order
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Placeholder"
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-slate-600"
            />
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-slate-800/50 rounded-lg border border-slate-700">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="p-4 text-left font-normal">
                  <input type="checkbox" className="rounded bg-slate-700 border-transparent" />
                </th>
                <th className="p-4 text-left font-normal">Status</th>
                <th className="p-4 text-left font-normal">Date Due</th>
                <th className="p-4 text-left font-normal">Number</th>
                <th className="p-4 text-left font-normal">Customer</th>
                <th className="p-4 text-left font-normal">Invoice</th>
                <th className="p-4 text-left font-normal">Amount Due</th>
                <th className="p-4 text-left font-normal">Payment</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-b border-slate-700">
                  <td className="p-4">
                    <input type="checkbox" className="rounded bg-slate-700 border-transparent" />
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      order.paid ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                    }`}>
                      {order.paid ? 'Paid' : 'Overdue'}
                    </span>
                  </td>
                  <td className="p-4">{order.date}</td>
                  <td className="p-4">{order.number}</td>
                  <td className="p-4">
                    <div>
                      <div>{order.customer}</div>
                      <div className="text-gray-400 text-sm">{order.phone}</div>
                    </div>
                  </td>
                  <td className="p-4">
                    <Download size={20} className="text-gray-400" />
                  </td>
                  <td className="p-4 text-gray-400">${Math.abs(order.amount).toLocaleString()}</td>
                  <td className="p-4">
                    {order.paid ? (
                      <button className="flex items-center gap-2 text-gray-400">
                        Revert Payment
                        <Plus size={16} className="rotate-45" />
                      </button>
                    ) : (
                      <button className="flex items-center gap-2 text-gray-400">
                        Add Payment
                        <Plus size={16} />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 flex items-center justify-between text-sm text-gray-400">
            <span>277 Entries</span>
            <div className="flex items-center gap-2">
              <span>Page</span>
              <button className="px-2 py-1 bg-slate-700 rounded">1</button>
              <span>of 11</span>
            </div>
          </div>
        </div>
      </div>

      {/* New Order Modal */}
      {showNewOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-slate-800 rounded-lg w-full max-w-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl">New Order</h2>
                <button onClick={() => setShowNewOrder(false)}>
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block mb-2">Select Customer</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={selectedCustomer}
                      onChange={(e) => setSelectedCustomer(e.target.value)}
                      placeholder="Select Customer"
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2"
                    />
                    <Plus size={16} className="absolute right-4 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>

                <div>
                  <label className="block mb-2">Date</label>
                  <div className="relative">
                    <input
                      type="text"
                      value="22/4/24"
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2"
                    />
                    <Calendar size={16} className="absolute right-4 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="mb-4">Add Items</h3>
                  <table className="w-full">
                    <thead>
                      <tr className="text-left">
                        <th className="pb-2 font-normal">Item Name</th>
                        <th className="pb-2 font-normal">Qty</th>
                        <th className="pb-2 font-normal">Unit Price</th>
                        <th className="pb-2 font-normal">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2">
                          <button className="flex items-center gap-2 text-gray-400">
                            <Plus size={16} />
                            Add Item
                          </button>
                        </td>
                        <td></td>
                        <td></td>
                        <td>$0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 flex justify-end gap-4">
                <button className="px-4 py-2 text-gray-400">Make Invoice and Add Item</button>
                <button className="px-4 py-2 bg-orange-500 text-white rounded-lg">Add Item</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesScreen;
