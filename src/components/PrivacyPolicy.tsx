import React from 'react';
import { privacyPolicyContent } from '../data/privacyPolicyContent';

function PrivacyPolicy() {
    return (
        <div className="bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
                {privacyPolicyContent.map((section, index) => (
                    <div key={index} className="mb-4">
                        <h2 className="text-2xl font-semibold text-white mb-2">{section.title}</h2>
                        <p className="text-indigo-200">{section.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PrivacyPolicy;
