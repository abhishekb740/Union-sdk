"use client";

import { useState } from 'react';
import Select from 'react-select';
import { motion } from 'framer-motion';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

type Network = {
  name: string;
  logo: string;
  description: string;
};

const networks: Network[] = [
  { name: 'Ethereum', logo: '/logos/ethereum.svg', description: 'Ethereum Mainnet' },
  { name: 'Polygon', logo: '/logos/polygon.svg', description: 'Polygon Network - Low Cost' },
  { name: 'Arbitrum', logo: '/logos/ethereum.svg', description: 'Arbitrum Layer 2 - Fast Transactions' },
  { name: 'Cosmos', logo: '/logos/polygon.svg', description: 'Cosmos - Interoperable Network' },
];

const Transfer: React.FC = () => {
  const [sourceChain, setSourceChain] = useState<Network | null>(null);
  const [destinationChain, setDestinationChain] = useState<Network | null>(null);
  const [amount, setAmount] = useState<string>('');

  const handleSelectChange = (selectedOption: Network | null, type: 'source' | 'destination') => {
    type === 'source' ? setSourceChain(selectedOption) : setDestinationChain(selectedOption);
  };

  const selectOptions = networks.map((network) => ({
    value: network.name,
    label: (
      <div className="flex items-center">
        <img src={network.logo} alt={network.name} className="h-6 w-6 mr-2" />
        {network.name}
      </div>
    ),
  }));

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="text-3xl font-semibold text-white mb-4">
        Transfer your Tokens to any Chain using Union
      </div>
      <motion.div
        className="w-[35rem] h-auto border border-gray-700 rounded-2xl p-6 mt-8 bg-[#1a1a1a] shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-lg text-white mb-6">Transfer Details</div>

        <div className="flex flex-col space-y-4">
          {/* Source Chain Selection */}
          <div className="text-white">Select Source Chain</div>
          <Select
            options={selectOptions}
            placeholder="Select Source Chain"
            onChange={(option) => handleSelectChange(option as unknown as Network, 'source')}
            className="mb-4"
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: '#1a1a1a',
                primary: '#1a1a1a',
                neutral0: '#121212',
                neutral20: '#ededed',
              },
            })}
          />

          {/* Token Amount Input */}
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Token Amount"
            className="w-full p-3 rounded-lg border border-gray-600 bg-[#121212] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 mt-6"
          />

          {/* Destination Chain Selection */}
          <div className="text-white">Select Destination Chain</div>
          <Select
            options={selectOptions}
            placeholder="Select Destination Chain"
            onChange={(option) => handleSelectChange(option as unknown as Network, 'destination')}
            className="mb-4"
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: '#1a1a1a',
                primary: '#1a1a1a',
                neutral0: '#121212',
                neutral20: '#ededed',
              },
            })}
          />

          {/* Transfer Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300 mt-6"
            onClick={() => alert('Transfer initiated!')}
          >
            Transfer Tokens
          </motion.button>
        </div>

        <div className="text-sm text-gray-400 mt-8 text-center">
          Ensure you have connected your wallet to proceed.
        </div>
      </motion.div>
    </div>
  );
};

export default Transfer;
