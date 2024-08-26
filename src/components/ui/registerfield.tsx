"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React, { useState } from 'react';
import axios from "axios";
import { Spinner } from "@nextui-org/spinner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export function RegisterField() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  function MoveToLogin() {
    window.location.replace("/login");
  }

  const handleRegister = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:5024/register", { email, password, firstname, lastname, street, city });
      console.log(response);
      setShowDialog(true); // Show the dialog when registration is successful
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Registration failed:", error);
    }
  };

  return (
    <>
      <Card className="mx-auto mt-[7em] max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Register</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input value={firstname} onChange={(e) => setFirstname(e.target.value)}
                  required id="first-name" placeholder="Max" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input value={lastname} onChange={(e) => setLastname(e.target.value)}
                  required id="last-name" placeholder="Mustermann" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input value={email} onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input value={password} onChange={(e) => setPassword(e.target.value)}
                required id="password" type="password" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="street">Street</Label>
                <Input value={street} onChange={(e) => setStreet(e.target.value)}
                  required id="street" placeholder="Musterstraße 1" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="city">City</Label>
                <Input value={city} onChange={(e) => setCity(e.target.value)}
                  required id="city" placeholder="Bregenz" />
              </div>
            </div>
            
            <div>
              {isLoading ? (
                <Button className="w-full h-full">
                  <Spinner size="sm" label="Loading..." labelColor="success" color="success" />
                </Button>
              ) : (
                <Button type="submit" id="btn" onClick={handleRegister} className="w-full">
                  Register
                </Button>
              )}
            </div>
            
            <Button variant="outline" className="w-full">
              Sign in with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Log in
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* AlertDialog for successful registration */}
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Registrieren erfolgreich</AlertDialogTitle>
            <AlertDialogDescription>
              Ihr Konto wurde erfolgreich hergestellt! Sie werden weitergeleitet.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={MoveToLogin}>Weiter</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
