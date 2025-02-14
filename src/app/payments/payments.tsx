"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  Button,
} from '@mantine/core';
import { getAccountLinkStatus } from "@/lib/auth/getAccountLinkStatusServerAction";
import { getUserName } from "@/lib/auth/getUserNameServerAction";
import { getUserRole } from "@/lib/auth/getUserRoleServerAction";
import { handleGoogleSignIn } from "@/lib/auth/googleSignInServerAction";
import { unlinkGoogleAccount } from "@/lib/auth/unlinkGoogleAccountServerAction";


export const PaymentsPage: React.FC = () => {


  return (
    <div className="payment-page">
      
    </div>
  );
};
