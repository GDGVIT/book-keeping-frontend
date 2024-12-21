'use client';

import React, { useState, useEffect } from 'react';
// import { useSession } from 'next-auth/react';

const SettingsPage = () => {
    // const { data: session } = useSession();
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        licenseType: 'Free',
        subscriptionStatus: 'Active'
    });

    useEffect(() => {
        // Replaced session check with dummy data
        setUserDetails({
            name: 'John Doe',
            email: 'john@example.com',
            licenseType: 'Professional',
            subscriptionStatus: 'Active'
        });
    }, []); // Removed session dependency

    return (
        <div className="max-w-4xl mx-auto p-6 text-black">
            <h1 className="text-3xl font-bold mb-8 text-white">Settings</h1>
            
            <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Profile Details</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <div className="mt-1 text-gray-900">{userDetails.name}</div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <div className="mt-1 text-gray-900">{userDetails.email}</div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Subscription Details</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">License Type</label>
                        <div className="mt-1 text-gray-900">{userDetails.licenseType}</div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <div className="mt-1">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                {userDetails.subscriptionStatus}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage