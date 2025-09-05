import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Providers
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Layout and Pages
import App from "./App";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IndiaEntryPage from "./pages/IndiaEntryPage";
import WhollyOwnedSubsidiaryPage from "./pages/WhollyOwnedSubsidiaryPage";
import BranchOfficePage from "./pages/BranchOfficePage";
import StatutoryAuditPage from "./pages/StatutoryAuditPage";
import InternalAuditPage from "./pages/InternalAuditPage";
import PublicSectorAuditPage from "./pages/PublicSectorAuditPage";
import CompanySecretarialPage from "./pages/CompanySecretarialPage";
import TaxAuditPage from "./pages/TaxAuditPage";
import IndAsPage from "./pages/IndAsPage";
import IncomeTaxAdvisoryPage from "./pages/IncomeTaxAdvisoryPage";
import EasyItFilingPage from "./pages/EasyItFilingPage";
import InternationalTaxationPage from "./pages/InternationalTaxationPage";
import TransferPricingPage from "./pages/TransferPricingPage";
import GstRegistrationPage from "./pages/GstRegistrationPage";
import GstAuditPage from "./pages/GstAuditPage";
import "./index.css";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/india-entry-strategy",
        element: <IndiaEntryPage />,
      },
      {
        path: "/wholly-owned-subsidiary",
        element: <WhollyOwnedSubsidiaryPage />,
      }, // The comma has been added here
      {
        path: "/branch-office",
        element: <BranchOfficePage />,
      },
      {
        path: "/statutory-audit", // Example URL
        element: <StatutoryAuditPage />,
      },
      {
        path: "/internal-audit", // Example URL
        element: <InternalAuditPage />,
      },
      {
        path: "/ind-as-advisory", // Example URL
        element: <IndAsPage />,
      },
      {
        path: "/public-sector-audit", // Example URL
        element: <PublicSectorAuditPage />,
      },
      {
        path: "/company-secretarial-services", // Example URL
        element: <CompanySecretarialPage />,
      },
      {
        path: "/tax-audit", // Example URL
        element: <TaxAuditPage />,
      },
      {
        path: "/income-tax-advisory", // Example URL
        element: <IncomeTaxAdvisoryPage />,
      },
      {
        path: "/easy-it-filing", // Example URL
        element: <EasyItFilingPage />,
      },
      {
        path: "/international-taxation", // Example URL
        element: <InternationalTaxationPage />,
      },
      {
        path: "/transfer-pricing",
        element: <TransferPricingPage />,
      },
      {
        path: "/gst-registration", // Example URL
        element: <GstRegistrationPage />,
      },
      {
        path: "/gst-audit", // Example URL
        element: <GstAuditPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouterProvider router={router} />
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
