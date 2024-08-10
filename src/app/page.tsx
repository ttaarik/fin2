import { Button } from "@/components/ui/button";
  import "./globals.css";
import Sidebar  from "@/components/ui/Sidebar";
// import { Dashboard } from "@/components/ui/dashboard";
import { LoginField } from "@/components/ui/loginfield";
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/login'); 
}
