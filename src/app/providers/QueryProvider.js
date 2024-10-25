"use client";

import {  QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../queries/queryClient';

const QueryProvider = ({ children }) => {

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default QueryProvider;
