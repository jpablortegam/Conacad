"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full lg:w-[600px] mt-6">
      <TabsList className="grid w-full grid-cols-2 mb-4">
        <TabsTrigger value="account">Cuenta</TabsTrigger>
        <TabsTrigger value="password">Contraseña</TabsTrigger>
      </TabsList>

      {/* Contenido de Account */}
      <TabsContent value="account">
        <Card className="shadow-md hover:shadow-lg transition-all dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle>Información de la Cuenta</CardTitle>
            <CardDescription>
              Realiza cambios en la información de tu cuenta.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre Completo</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Nombre de Usuario</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="default" className="w-full">
              Guardar Cambios
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      {/* Contenido de Password */}
      <TabsContent value="password">
        <Card className="shadow-md hover:shadow-lg transition-all dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle>Cambiar Contraseña</CardTitle>
            <CardDescription>
              Actualiza tu contraseña de acceso.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current">Contraseña Actual</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new">Nueva Contraseña</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="default" className="w-full">
              Guardar Contraseña
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
