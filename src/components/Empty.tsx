const Empty = ({ children }: { children: string }) => {
  return (
    <>
      <div className={`flex h-full items-center justify-center`}>
        <p className={`text-xl font-bold md:text-2xl lg:text-3xl`}>
          {children}
        </p>
      </div>
    </>
  );
};

export default Empty;
