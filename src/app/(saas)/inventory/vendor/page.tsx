"use client";

import React, { useState } from 'react';
import { Search, ChevronDown, X, Plus, FileText, Download, Filter } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SupplierOrderManagement = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [showCreateOrder, setShowCreateOrder] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const sampleOrders = [
    {
      id: '#1002012',
      placedOn: '23-Oct 2019',
      deliveryStatus: 'Not Delivered',
      paymentStatus: 'Paid',
    },
    {
      id: '#1002012',
      placedOn: '23-Oct 2019',
      deliveryStatus: 'Delivered',
      paymentStatus: 'Paid',
    }
  ];

  const CreateOrderModal = () => {
    const [orderItems, setOrderItems] = useState([
      {
        name: 'Lays Magic Masala',
        units: 12,
        pricePerUnit: 342,
        total: 2333
      },
      {
        name: 'Lays Magic Masala',
        units: 12,
        pricePerUnit: 342,
        total: 2333
      },
      {
        name: 'Lays Magic Masala',
        units: 12,
        pricePerUnit: 342,
        total: 2333
      }
    ]);

    const total = orderItems.reduce((sum, item) => sum + item.total, 0);

    return (
      <div className="fixed inset-0 bg-black/50 text-white flex items-center justify-center">
        <div className="bg-slate-900 rounded-lg w-full max-w-2xl">
          <div className="p-6 border-b border-slate-800">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <h2 className="text-xl">Order #234542</h2>
                <FileText className="w-4 h-4" />
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-slate-700 rounded-lg">
                  Export
                </button>
                <button onClick={() => setShowCreateOrder(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-2 text-slate-400">
                <FileText className="w-4 h-4" />
                <span>Placed on 22nd Jan</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                <span className="text-slate-400">Attach Invoice</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-red-500">Not Delivered</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              
              <div className="flex justify-between items-center">
                <span className="bg-green-500/20 text-green-500 px-2 py-1 rounded">
                  Paid
                </span>
                <ChevronDown className="w-4 h-4" />
              </div>
              
              <div className="flex justify-between items-center">
                <Plus className="w-4 h-4" />
                <span className="text-slate-400">Add Payment Method</span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg">Items</h3>
              <div className="text-xl">${total} <span className="text-sm text-slate-400">total</span></div>
            </div>
            
            <div className="space-y-4">
              {orderItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-slate-800">
                  <div className="flex-1">
                    <h4>{item.name}</h4>
                  </div>
                  <div className="flex gap-8 items-center">
                    <div className="text-slate-400">
                      {item.units} Units
                    </div>
                    <div className="text-slate-400">
                      ${item.pricePerUnit}/unit
                    </div>
                    <div>
                      ${item.total} Total
                    </div>
                  </div>
                </div>
              ))}
              
              <button className="flex items-center gap-2 text-slate-400">
                <Plus className="w-4 h-4" />
                <span>Add Item</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const OrderDetails = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-slate-900 rounded-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl">Order #{selectedOrder?.id}</h2>
            <FileText className="w-4 h-4" />
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-slate-700 rounded-lg">Export</button>
            <button onClick={() => setShowOrderDetails(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-slate-400">
            <FileText className="w-4 h-4" />
            <span>Placed on 22nd Jan</span>
          </div>
          <div className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            <span className="text-slate-400">Attach Invoice</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-red-500">Not Delivered</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-green-500">Paid</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );

  const FiltersModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-slate-900 rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl">Filters</h2>
          <button onClick={() => setShowFilters(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg">Order Information</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Order Name Contains"
                className="w-full bg-slate-800 rounded-lg p-3"
              />
              <input
                type="text"
                placeholder="Order Name Excludes"
                className="w-full bg-slate-800 rounded-lg p-3"
              />
              <input
                type="text"
                placeholder="Order ID Contains"
                className="w-full bg-slate-800 rounded-lg p-3"
              />
              <input
                type="text"
                placeholder="Order ID Excludes"
                className="w-full bg-slate-800 rounded-lg p-3"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg">Payment Status</h3>
          </div>
          <div className="flex justify-between">
            <button className="px-4 py-2 text-white">Clear Filters</button>
            <button className="px-4 py-2 bg-orange-500 rounded-lg">Apply Filters</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-white  mb-6">
          <span>Suppliers</span>
          <ChevronDown className="w-4 h-4" />
          <span>APG Suppliers Ltd</span>
        </div>
        
        <Card className="bg-slate-900 border-slate-800 text-white">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span>APG Suppliers Ltd</span>
                <FileText className="w-4 h-4" />
              </div>
              <div className="text-green-500 text-2xl">+$2345</div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-8 mb-8">
              <button className="flex items-center gap-2 text-slate-400">
                <Plus className="w-4 h-4" />
                <span>Add Email</span>
              </button>
              <button className="flex items-center gap-2 text-slate-400">
                <Plus className="w-4 h-4" />
                <span>Add Phone</span>
              </button>
              <button className="flex items-center gap-2 text-slate-400">
                <Plus className="w-4 h-4" />
                <span>Supplier ID</span>
              </button>
            </div>
            
            <div className="space-y-6 text-whit">
              <h3>Order History</h3>
              <div className="flex justify-between items-center">
                <div className="relative flex-1 max-w-xl">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search orders"
                    className="w-full bg-slate-800 rounded-lg pl-10 pr-4 py-2"
                  />
                </div>
                <button onClick={() => setShowFilters(true)}>
                  <Filter className="w-5 h-5" />
                </button>
                <button 
                  className="px-4 py-2 bg-orange-500 rounded-lg"
                  onClick={() => setShowCreateOrder(true)}
                >
                  Create Order
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-slate-400">
                      <th className="py-2">Placed on</th>
                      <th className="py-2">Order ID</th>
                      <th className="py-2">Delivery Status</th>
                      <th className="py-2">Payment Status</th>
                      <th className="py-2">Invoice</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleOrders.map((order, index) => (
                      <tr
                        key={index}
                        className="border-t border-slate-800 cursor-pointer hover:bg-slate-800/50"
                        onClick={() => {
                          setSelectedOrder(order);
                          setShowOrderDetails(true);
                        }}
                      >
                        <td className="py-4">{order.placedOn}</td>
                        <td className="py-4">{order.id}</td>
                        <td className={`py-4 ${order.deliveryStatus === 'Not Delivered' ? 'text-red-500' : ''}`}>
                          {order.deliveryStatus}
                        </td>
                        <td className="py-4">
                          <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded">
                            {order.paymentStatus}
                          </span>
                        </td>
                        <td className="py-4">
                          <Download className="w-4 h-4" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {showFilters && <FiltersModal />}
      {showOrderDetails && <OrderDetails />}
      {showCreateOrder && <CreateOrderModal />}
    </div>
  );
};

export default SupplierOrderManagement;
