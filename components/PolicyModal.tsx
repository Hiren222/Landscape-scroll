'use client';

import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export default function PolicyModal({ type, onClose }: PolicyModalProps) {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div className="space-y-4 text-[#1C1C1C]">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="w-10 h-10 rounded-lg bg-[#2D6A2D]/10 text-[#2D6A2D] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Privacy Policy</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              At Landscaping Company (Austin, TX), we value your privacy. We collect personal information (such as name, email, phone number, and address) solely to respond to your quote requests, schedule site visits, and provide high-quality landscaping services.
            </p>
            <h4 className="font-bold text-base pt-2">Data Protection</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              We never sell, rent, or trade your contact information to third parties. All personal details provided through our website forms are strictly safeguarded and utilized solely for client communications.
            </p>
            <h4 className="font-bold text-base pt-2">Contacting Us</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              If you have any questions about this privacy policy or how we handle your information, please email us at <strong className="text-[#1C1C1C]">hello@landscapingcompany.com</strong> or call <strong className="text-[#1C1C1C]">(512) 555 0139</strong>.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-[#1C1C1C]">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="w-10 h-10 rounded-lg bg-[#2D6A2D]/10 text-[#2D6A2D] flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Terms of Service</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Welcome to Landscaping Company. By requesting a quote or booking services with us in Austin, TX, you agree to the following terms and conditions:
            </p>
            <h4 className="font-bold text-base pt-2">Free Consultations & Quotes</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              All initial property site visits and estimate proposals are free of charge with zero obligation. Written proposals detail itemized scope of work and pricing prior to project commencement.
            </p>
            <h4 className="font-bold text-base pt-2">Satisfaction Guarantee</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              We pride ourselves on 100% client satisfaction. If any aspect of our completed landscaping work does not meet the agreed specification, our team will return promptly to rectify it.
            </p>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-gray-100 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#2D6A2D] text-white font-bold text-sm rounded-lg hover:bg-[#235423] transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
