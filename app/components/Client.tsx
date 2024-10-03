"use client";
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from '../wagmi';

const queryClient = new QueryClient();

const ClientLayout = ({children}: {children: React.ReactNode} )  => {
    return (
        <div>
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </WagmiProvider>
        </div>
    )
}

export default ClientLayout;