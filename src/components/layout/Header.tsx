//src/components/layout/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import { useAuth } from '@/contexts/AuthContext';
import { MagnifyingGlassIcon, UserIcon, HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const { user } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [displayName, setDisplayName] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        try {
          const profileRef = doc(db, 'userProfiles', user.uid);
          const profileSnap = await getDoc(profileRef);
          
          if (profileSnap.exists()) {
            setDisplayName(profileSnap.data().displayName);
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      }
    };

    fetchUserProfile();
  }, [user]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setShowUserMenu(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
      {/* Main Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold text-center flex-1">
            SAVAGE & LUXE
          </Link>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <UserIcon 
                className="h-6 w-6 cursor-pointer" 
                onClick={() => setShowUserMenu(!showUserMenu)}
              />
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  {user ? (
                    <>
                      <div className="px-4 py-2 text-sm text-gray-700">
                        {displayName || user.email}
                      </div>
                      <Link 
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Edit Profile
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link 
                        href="/auth/signin"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign in
                      </Link>
                      <Link 
                        href="/auth/signup"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign up
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
            <HeartIcon className="h-6 w-6 cursor-pointer" />
            <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer" />
            <ShoppingBagIcon className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b">
        <ul className="container mx-auto flex justify-center gap-8 py-4">
          <li><Link href="/diaries" className="hover:underline">DIARIES</Link></li>
          <li><Link href="/health" className="hover:underline">HEALTH</Link></li>
          <li><Link href="/moments" className="hover:underline">MOMENTS</Link></li>
          <li><Link href="/news" className="hover:underline">NEWS</Link></li>
          <li><Link href="/store" className="hover:underline">STORE</Link></li>
          <li><Link href="/our-story" className="hover:underline">OUR STORY</Link></li>
        </ul>
      </nav>
    </>
  );
}