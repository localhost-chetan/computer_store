const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex justify-center items-center min-h-screen py-8">
      {children}
    </div>
  );
};

export default AuthLayout;
