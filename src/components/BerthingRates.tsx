import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Anchor, Users, Clock, Check, Info, HelpCircle } from 'lucide-react';
interface Rate {
  location: string;
  maxLength: string;
  memberRate: {
    daily: string;
    monthly: string;
    yearly: string;
  };
  nonMemberRate: {
    daily: string;
    monthly: string;
    yearly: string;
  };
  excessCharge: {
    member: string;
    nonMember: string;
  };
  features: string[];
}
export const BerthingRates = () => {
  const navigate = useNavigate();
  const [selectedDuration, setSelectedDuration] = useState<'daily' | 'monthly' | 'yearly'>('monthly');
  const rates: Rate[] = [{
    location: 'T-HEAD',
    maxLength: 'None',
    memberRate: {
      daily: '₱3,500.00',
      monthly: '₱60,000.00',
      yearly: '₱720,000.00'
    },
    nonMemberRate: {
      daily: '₱10,500.00',
      monthly: '₱180,000.00',
      yearly: '₱2,160,000.00'
    },
    excessCharge: {
      member: 'None',
      nonMember: 'None'
    },
    features: ['Premium T-HEAD location', 'Suitable for mega yachts', 'Direct access to main facilities', 'Premium utilities connection', 'VIP concierge service']
  }, {
    location: 'BRAVO-CHARLIE',
    maxLength: '82',
    memberRate: {
      daily: '₱1,575.00',
      monthly: '₱27,000.00',
      yearly: '₱324,000.00'
    },
    nonMemberRate: {
      daily: '₱4,725.00',
      monthly: '₱81,000.00',
      yearly: '₱972,000.00'
    },
    excessCharge: {
      member: '₱315.00',
      nonMember: '₱943.00'
    },
    features: ['Prime marina location', 'Full utilities access', 'Regular maintenance service', '24/7 security monitoring']
  }, {
    location: 'DELTA',
    maxLength: '100',
    memberRate: {
      daily: '₱2,245.83',
      monthly: '₱38,500.00',
      yearly: '₱462,000.00'
    },
    nonMemberRate: {
      daily: '₱6,737.49',
      monthly: '₱115,500.00',
      yearly: '₱1,386,000.00'
    },
    excessCharge: {
      member: '₱315.00',
      nonMember: '₱943.00'
    },
    features: ['Spacious berth space', 'Enhanced utility connections', 'Priority maintenance service', 'Dedicated dock assistance']
  }, {
    location: 'ECHO-FOXTROT-GOLF',
    maxLength: '66',
    memberRate: {
      daily: '₱933.33',
      monthly: '₱16,000.00',
      yearly: '₱192,000.00'
    },
    nonMemberRate: {
      daily: '₱2,799.99',
      monthly: '₱48,000.00',
      yearly: '₱576,000.00'
    },
    excessCharge: {
      member: '₱315.00',
      nonMember: '₱943.00'
    },
    features: ['Standard utilities package', 'Regular security patrols', 'Basic maintenance service', 'Convenient location']
  }, {
    location: 'HOTEL-INDIA',
    maxLength: '50',
    memberRate: {
      daily: '₱875.00',
      monthly: '₱15,000.00',
      yearly: '₱180,000.00'
    },
    nonMemberRate: {
      daily: '₱2,625.00',
      monthly: '₱45,000.00',
      yearly: '₱540,000.00'
    },
    excessCharge: {
      member: '₱315.00',
      nonMember: '₱943.00'
    },
    features: ['Ideal for smaller vessels', 'Basic utilities included', 'Standard maintenance service', 'Easy access location']
  }];
  const calculateSavings = (memberRate: string, nonMemberRate: string) => {
    const member = parseInt(memberRate.replace(/[₱,]/g, ''));
    const nonMember = parseInt(nonMemberRate.replace(/[₱,]/g, ''));
    return ((nonMember - member) / nonMember * 100).toFixed(0);
  };
  return <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Berthing Rates
          </h2>
          <p className="text-gray-600 mb-8">
            Experience world-class marina facilities with competitive rates
          </p>
          <div className="inline-flex rounded-lg border border-gray-200 p-1 mb-8">
            {(['daily', 'monthly', 'yearly'] as const).map(duration => <button key={duration} onClick={() => setSelectedDuration(duration)} className={`px-4 py-2 rounded-md text-sm font-medium capitalize ${selectedDuration === duration ? 'bg-navy-900 text-white' : 'text-gray-600 hover:text-navy-900'}`}>
                {duration}
              </button>)}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {rates.map((rate, index) => <div key={index} className="bg-white rounded-lg border hover:border-navy-900 transition-colors p-6 relative">
              <div className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Save{' '}
                {calculateSavings(rate.memberRate[selectedDuration], rate.nonMemberRate[selectedDuration])}
                %
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  {rate.location}
                </h3>
                <div className="flex items-center justify-center text-gray-600 mb-4">
                  <span>Max {rate.maxLength}ft</span>
                  <div className="relative group ml-2">
                    <HelpCircle className="w-4 h-4 text-gray-400" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      {rate.excessCharge.member === 'None' ? 'No excess length charges apply' : <>
                          Excess length charge: {rate.excessCharge.member}/ft
                          (members)
                          <br />
                          {rate.excessCharge.nonMember}/ft (non-members)
                        </>}
                    </div>
                  </div>
                </div>
                <div className="space-y-4 py-4 border-y">
                  <div>
                    <p className="text-3xl font-bold text-navy-900">
                      {rate.memberRate[selectedDuration]}
                    </p>
                    <p className="text-sm text-gray-600">
                      Member Rate per{' '}
                      {selectedDuration === 'daily' ? 'day' : selectedDuration === 'monthly' ? 'month' : 'year'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xl text-gray-500 line-through">
                      {rate.nonMemberRate[selectedDuration]}
                    </p>
                    <p className="text-sm text-gray-500">Non-Member Rate</p>
                  </div>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {rate.features.map((feature, i) => <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>)}
              </ul>
              <button onClick={() => navigate('/membership')} className="w-full bg-navy-900 text-white py-3 rounded-md hover:bg-navy-800 transition-colors">
                Reserve Now
              </button>
            </div>)}
        </div>
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg p-8 mb-8">
          <div className="flex flex-col items-center text-center mb-6">
            <Info className="w-8 h-8 text-navy-900 mb-4" />
            <h4 className="text-xl font-semibold text-navy-900">
              Additional Fees & Information
            </h4>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center justify-center">
              <span className="w-2 h-2 bg-navy-900 rounded-full mr-3" />
              <span>
                Excess length charges apply for vessels exceeding maximum length
              </span>
            </li>
            <li className="flex items-center justify-center">
              <span className="w-2 h-2 bg-navy-900 rounded-full mr-3" />
              <span>Electricity and water consumption billed separately</span>
            </li>
            <li className="flex items-center justify-center">
              <span className="w-2 h-2 bg-navy-900 rounded-full mr-3" />
              <span>Security deposit required (refundable)</span>
            </li>
            <li className="flex items-center justify-center">
              <span className="w-2 h-2 bg-navy-900 rounded-full mr-3" />
              <span>Special rates available for long-term contracts</span>
            </li>
            <li className="flex items-center justify-center">
              <span className="w-2 h-2 bg-navy-900 rounded-full mr-3" />
              <span>Berth assignment subject to availability</span>
            </li>
          </ul>
        </div>
        <div className="text-center space-y-6">
          <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium">
            Save up to 70% with SBYC Membership
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => navigate('/membership')} className="px-8 py-3 bg-navy-900 text-white rounded-md hover:bg-navy-800 transition-colors">
              Join SBYC
            </button>
            <button onClick={() => navigate('/contact')} className="px-8 py-3 border border-navy-900 text-navy-900 rounded-md hover:bg-navy-900/5 transition-colors">
              Contact Marina Office
            </button>
          </div>
        </div>
      </div>
    </div>;
};