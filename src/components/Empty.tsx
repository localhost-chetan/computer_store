const Empty = ({ children }: { children: string }) => {
  return (
    <>
      <h2 className={`text-xl font-bold`}>{children}</h2>
      <div className={`flex h-full items-center justify-center`}>
        <p
          className={`text-xl font-bold md:text-2xl lg:text-3xl`}
        >{`Nothing to Show.`}</p>
      </div>
    </>
  );
};

export default Empty;
