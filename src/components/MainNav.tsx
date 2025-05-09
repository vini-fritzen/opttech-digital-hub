
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { UserCircle, LogIn, Users } from 'lucide-react';

const MainNav = () => {
  const { user, isAdmin, isClient } = useAuth();

  return (
    <div className="flex items-center space-x-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Produtos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                <li className="col-span-2">
                  <NavigationMenuLink asChild>
                    <Link
                      to="/produtos"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Produtos</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Conheça nossos produtos e soluções.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    to="/produtos?categoria=software"
                  >
                    <div className="text-sm font-medium leading-none">Software</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Sistemas e aplicativos para empresas.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    to="/produtos?categoria=hardware"
                  >
                    <div className="text-sm font-medium leading-none">Hardware</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Equipamentos e soluções físicas.
                    </p>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                <li className="col-span-2">
                  <NavigationMenuLink asChild>
                    <Link
                      to="/servicos"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Serviços</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Conheça nossos serviços especializados.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    to="/servicos?categoria=desenvolvimento"
                  >
                    <div className="text-sm font-medium leading-none">Desenvolvimento</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Criação de softwares sob medida.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    to="/servicos?categoria=consultoria"
                  >
                    <div className="text-sm font-medium leading-none">Consultoria</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Assessoria especializada em TI.
                    </p>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/vagas" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              Vagas
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/contato" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              Contato
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/orcamento" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              Orçamento
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      {/* Áreas de Acesso */}
      <div className="flex items-center space-x-2">
        {user ? (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <UserCircle className="mr-2 h-5 w-5" />
                  Minha Conta
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[220px] p-2">
                    <li className="px-2 py-1 text-sm font-medium text-muted-foreground">
                      Olá, {profile?.full_name || 'Usuário'}
                    </li>
                    <li>
                      {isAdmin && (
                        <Link
                          to="/admin/dashboard"
                          className="flex items-center px-2 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground"
                        >
                          <Users className="mr-2 h-4 w-4" />
                          Painel Administrativo
                        </Link>
                      )}
                    </li>
                    <li>
                      {isClient && (
                        <Link
                          to="/cliente/dashboard"
                          className="flex items-center px-2 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground"
                        >
                          <UserCircle className="mr-2 h-4 w-4" />
                          Área do Cliente
                        </Link>
                      )}
                    </li>
                    <li className="mt-2 border-t pt-2">
                      <button
                        onClick={() => signOut()}
                        className="w-full flex items-center px-2 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Sair
                      </button>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ) : (
          <>
            <Button variant="outline" asChild>
              <Link to="/auth/login" className="flex items-center">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Link>
            </Button>

            <div className="hidden lg:flex items-center space-x-2">
              <div className="text-sm flex space-x-2">
                <Link to="/admin/login" className="underline text-muted-foreground hover:text-primary">
                  Admin
                </Link>
                <span>|</span>
                <Link to="/auth/login" className="underline text-muted-foreground hover:text-primary">
                  Cliente
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MainNav;
