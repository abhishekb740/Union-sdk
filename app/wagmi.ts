import { http, createConfig } from 'wagmi';
import { injected, metaMask, safe } from 'wagmi/connectors';
import { sepolia, arbitrumSepolia, berachainTestnetbArtio } from 'wagmi/chains';

export const config = createConfig({
  chains: [sepolia, arbitrumSepolia, berachainTestnetbArtio],
  transports: {
    [sepolia.id]: http(),
    [arbitrumSepolia.id]: http(),
    [berachainTestnetbArtio.id]: http(),
  },
  connectors: [injected(), metaMask(), safe()],
});
