import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { PawPrint, User as UserIcon, Stethoscope, ArrowLeft } from 'lucide-react';
import type { UserRole, User } from '../types';

export const Register: React.FC = () => {
    const { role } = useParams<{ role: UserRole }>();
    const navigate = useNavigate();
    const { register } = useAuth();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const isOwner = role === 'owner';
    const Icon = isOwner ? UserIcon : Stethoscope;
    const title = isOwner ? 'Crear Cuenta PawUser' : 'Registro Veterinario';
    const bgColor = isOwner ? 'from-blue-400 to-blue-600' : 'from-green-400 to-green-600';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const newUser: User = {
                id: `user-${Date.now()}`,
                username: email.split('@')[0],
                fullName,
                email,
                role: role as UserRole,
                joinedDate: new Date(),
                // Add default fields if needed
                ...(isOwner ? { pets: [] } : {}), // For Owner type compatibility if we were strictly typing casting
            } as any; // Using any to bypass strict type check for now as we are storing generic User in context but specific types extend it.

            // If we want to be more strict with types:
            // if (isOwner) { newUser.role = 'owner'; (newUser as any).pets = []; } 
            // else { newUser.role = 'veterinarian'; }

            await register(newUser);
            navigate(isOwner ? '/owner/profile' : '/veterinarian/dashboard');
        } catch (err: any) {
            setError(err.message || 'Error al registrarse. Por favor, intenta de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <button
                    onClick={() => navigate('/login')}
                    className="mb-4 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Volver al inicio
                </button>

                <Card>
                    <CardHeader>
                        <div className="flex flex-col items-center">
                            <div className={`w-20 h-20 mb-4 rounded-full bg-gradient-to-br ${bgColor} flex items-center justify-center`}>
                                <Icon className="w-10 h-10 text-white" />
                            </div>
                            <CardTitle>{title}</CardTitle>
                            <div className="flex items-center gap-2 mt-2">
                                <PawPrint className="w-5 h-5 text-primary-600" />
                                <span className="text-sm text-gray-600">PawCare</span>
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <Input
                                type="text"
                                label="Nombre Completo"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                                placeholder="Juan Pérez"
                            />

                            <Input
                                type="email"
                                label="Correo Electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="ejemplo@correo.com"
                            />

                            <Input
                                type="password"
                                label="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="••••••••"
                                minLength={6}
                            />

                            {error && (
                                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                                    {error}
                                </div>
                            )}

                            <Button
                                type="submit"
                                variant="primary"
                                fullWidth
                                disabled={loading}
                            >
                                {loading ? 'Creando cuenta...' : 'Registrarse'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
