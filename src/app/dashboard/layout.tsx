'use client';
import DashboardAppBar from '@/components/dashboard/appbar/dashboard-app-bar';
import DashboardAuthProvider from '@/components/dashboard/auth-provider';
import { Container } from '@mui/material';
import { SnackbarProvider } from 'notistack';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashboardAuthProvider>
        <SnackbarProvider>
          <DashboardAppBar />
          <Container>
            {children}
          </Container>
        </SnackbarProvider>
      </DashboardAuthProvider>
    </>
  );
}
